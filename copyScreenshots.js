const fs = require("fs");
const path = require("path");

// Ruta de la carpeta donde Cypress guarda las capturas de pantalla
const cypressScreenshotsPath = path.join(
  __dirname,
  "MISW-4103-pruebas-automatizadas/e2e-cypress/src/screenshots/*"
);

// Ruta de la carpeta bitmaps_reference de BackstopJS
const backstopReferencePath = path.join(
  __dirname,
  "backstop-ghost/backstop_data/bitmaps_reference"
);

fs.readdir(cypressScreenshotsPath, (err, files) => {
  if (err) throw err;

  files.forEach((file) => {
    const sourcePath = path.join(cypressScreenshotsPath, file);
    const destinationPath = path.join(backstopReferencePath, file);

    fs.copyFile(sourcePath, destinationPath, (err) => {
      if (err) throw err;
      console.log(`${file} fue copiado a ${destinationPath}`);
    });
  });
});
