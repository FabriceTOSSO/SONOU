const fs = require('fs');
const path = require('path');

const folderPath = './Image'; // Ton dossier d'images
const files = fs.readdirSync(folderPath);

const photos = files
  .filter(file =>
    file.toLowerCase().endsWith('.jpg') ||
    file.toLowerCase().endsWith('.jpeg') ||
    file.toLowerCase().endsWith('.png')
  )
  .map((file, index) => ({
    id: index + 1,
    url: `${folderPath}/${file}`
  }));

console.log('const photos = [');
photos.forEach(photo => {
  console.log(`  { id: ${photo.id}, url: '${photo.url}' },`);
});
console.log('];');