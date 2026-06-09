import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ASSETS =
  "C:/Users/ppmpc/.cursor/projects/c-Users-ppmpc-interface/assets";

const projects = [
  {
    id: "villeneuve-loubet",
    images: [
      {
        src: "c__Users_ppmpc_AppData_Roaming_Cursor_User_workspaceStorage_6fbe03be795d84c19e70204b9227af9b_images_IMG_0912-88d8dd2f-f273-49f0-8dfa-48e82d8d4af1.png",
        out: "01-facade-pierre-vue-mer.jpg",
      },
      {
        src: "c__Users_ppmpc_AppData_Roaming_Cursor_User_workspaceStorage_6fbe03be795d84c19e70204b9227af9b_images_IMG_0902-25530602-a347-4154-a006-d2933e903786.png",
        out: "02-parement-pierre-panorama.jpg",
        rotate: 90,
      },
      {
        src: "c__Users_ppmpc_AppData_Roaming_Cursor_User_workspaceStorage_6fbe03be795d84c19e70204b9227af9b_images_IMG_0581-93b0e522-499d-4adb-98e3-4495768011d7.png",
        out: "03-mur-pierre-portail.jpg",
      },
      {
        src: "c__Users_ppmpc_AppData_Roaming_Cursor_User_workspaceStorage_6fbe03be795d84c19e70204b9227af9b_images_IMG_0789-a5505363-bc6d-4411-8c57-14ec156d04ca.png",
        out: "04-piscine-interieure.jpg",
        rotate: -90,
      },
      {
        src: "c__Users_ppmpc_AppData_Roaming_Cursor_User_workspaceStorage_6fbe03be795d84c19e70204b9227af9b_images_IMG_0985-657f2c94-4ba7-4b91-a221-da1ceb8a27f6.png",
        out: "05-salon-baies-mer.jpg",
      },
      {
        src: "c__Users_ppmpc_AppData_Roaming_Cursor_User_workspaceStorage_6fbe03be795d84c19e70204b9227af9b_images_IMG_0133-7c16a1a6-f33b-4edc-a668-34711ddae018.png",
        out: "06-gros-oeuvre-beton.jpg",
      },
    ],
  },
  {
    id: "saint-tropez",
    images: [
      {
        src: "c__Users_ppmpc_AppData_Roaming_Cursor_User_workspaceStorage_6fbe03be795d84c19e70204b9227af9b_images_IMG_6652-4248db1d-1aa1-4078-837d-6a71fb1641a2.png",
        out: "01-facade-pergola.jpg",
      },
      {
        src: "c__Users_ppmpc_AppData_Roaming_Cursor_User_workspaceStorage_6fbe03be795d84c19e70204b9227af9b_images_IMG_6360-22e08036-5d25-4150-9d2a-bfc3e5b0a3db.png",
        out: "02-charpente-fermettes.jpg",
      },
      {
        src: "c__Users_ppmpc_AppData_Roaming_Cursor_User_workspaceStorage_6fbe03be795d84c19e70204b9227af9b_images_IMG_6357-fd1fca51-de7a-4317-878c-aa72843b0630.png",
        out: "03-ossature-bois-toiture.jpg",
      },
      {
        src: "c__Users_ppmpc_AppData_Roaming_Cursor_User_workspaceStorage_6fbe03be795d84c19e70204b9227af9b_images_IMG_5971-aa28b2ac-b3ce-4576-84ab-558440de6d97.png",
        out: "04-coffrage-beton.jpg",
        rotate: 90,
      },
      {
        src: "c__Users_ppmpc_AppData_Roaming_Cursor_User_workspaceStorage_6fbe03be795d84c19e70204b9227af9b_images_IMG_6358-2d4e3be5-b448-4a8e-99f2-1562de5b6f8d.png",
        out: "05-structure-mixte.jpg",
      },
      {
        src: "c__Users_ppmpc_AppData_Roaming_Cursor_User_workspaceStorage_6fbe03be795d84c19e70204b9227af9b_images_IMG_5972-34fa0b3a-1680-4695-8d56-a5cf18bf11b1.png",
        out: "06-fondations-beton.jpg",
        rotate: 90,
      },
    ],
  },
];

for (const project of projects) {
  const outDir = path.join("public/images/realisations", project.id);
  await fs.mkdir(outDir, { recursive: true });

  for (const { src, out, rotate = 0 } of project.images) {
    const input = path.join(ASSETS, src);
    await sharp(input)
      .rotate(rotate)
      .jpeg({ quality: 85, mozjpeg: true })
      .toFile(path.join(outDir, out));
    console.log("OK", project.id, out);
  }
}
