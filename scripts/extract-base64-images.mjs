import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";

const ROOT = process.cwd();
const SOURCE_DIR = path.join(ROOT, "source-html");
const OUTPUT_HTML_DIR = path.join(ROOT, "source-html-processed");
const OUTPUT_IMAGE_DIR = path.join(ROOT, "public", "images", "extracted");

const DATA_URL_REGEX =
  /src=(["'])(data:image\/(png|jpeg|jpg|webp|gif|svg\+xml);base64,([A-Za-z0-9+/=\r\n]+))\1/gim;

const extByMime = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
  "image/webp": "webp",
  "image/gif": "gif",
  "image/svg+xml": "svg",
};

const slugify = (value) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);

const hashBuffer = (buffer) =>
  crypto.createHash("sha256").update(buffer).digest("hex").slice(0, 12);

const ensureDirs = async () => {
  await fs.mkdir(OUTPUT_HTML_DIR, { recursive: true });
  await fs.mkdir(OUTPUT_IMAGE_DIR, { recursive: true });
};

const processFile = async (fileName) => {
  const inputPath = path.join(SOURCE_DIR, fileName);
  const outputPath = path.join(OUTPUT_HTML_DIR, fileName);
  const fileBase = slugify(path.basename(fileName, path.extname(fileName)));
  const html = await fs.readFile(inputPath, "utf8");
  const imageMap = new Map();
  let matchIndex = 0;

  const processed = html.replace(
    DATA_URL_REGEX,
    (fullMatch, quote, dataUrl, mime, _base64Raw, offset, source) => {
      const normalizedMime = `image/${mime}`.replace("image/jpg", "image/jpeg");
      const ext = extByMime[normalizedMime] || "bin";
      const base64 = dataUrl.substring(dataUrl.indexOf(",") + 1).replace(/\s+/g, "");
      const buffer = Buffer.from(base64, "base64");
      const hash = hashBuffer(buffer);

      let fileNameFromAlt = "";
      const imgStart = source.lastIndexOf("<img", offset);
      const imgEnd = source.indexOf(">", offset);
      if (imgStart >= 0 && imgEnd > imgStart) {
        const imgTag = source.slice(imgStart, imgEnd + 1);
        const altMatch = imgTag.match(/\salt=(["'])(.*?)\1/i);
        if (altMatch?.[2]) {
          fileNameFromAlt = slugify(altMatch[2]);
        }
      }

      const imageName = `${fileBase}-${fileNameFromAlt || `image-${matchIndex + 1}`}-${hash}.${ext}`;
      const relativePath = `/images/extracted/${imageName}`;
      matchIndex += 1;

      if (!imageMap.has(hash)) {
        imageMap.set(hash, { imageName, buffer });
      }

      return `src=${quote}${relativePath}${quote}`;
    }
  );

  for (const image of imageMap.values()) {
    await fs.writeFile(path.join(OUTPUT_IMAGE_DIR, image.imageName), image.buffer);
  }

  await fs.writeFile(outputPath, processed, "utf8");

  return { fileName, images: imageMap.size, outputPath };
};

const main = async () => {
  await ensureDirs();
  const entries = await fs.readdir(SOURCE_DIR, { withFileTypes: true });
  const htmlFiles = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".html"))
    .map((entry) => entry.name);

  let total = 0;
  for (const fileName of htmlFiles) {
    const result = await processFile(fileName);
    total += result.images;
    console.log(`${result.fileName}: ${result.images} image(s) extraites`);
  }

  console.log(`Total: ${total} image(s) écrites dans ${OUTPUT_IMAGE_DIR}`);
  console.log(`HTML traités dans ${OUTPUT_HTML_DIR}`);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
