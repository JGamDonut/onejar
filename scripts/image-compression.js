import imagemin from 'imagemin';
import imageminMoztran from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import fs from "fs";


// backgrounds
const source = "src/public/images/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}";
const output = "build/public/images/";

(async () => {
  if (!fs.existsSync(source)) {
    return;
  }
  const files = await imagemin([source], {
    destination: output,
    preserveDirectories: true,
    plugins: [
      imageminMoztran({
        quality: [40, 45]
      }),
      imageminPngquant({
        quality: [0.40, 0.45]
      })
    ]
  });
  
  console.log(files);
  //=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
})();