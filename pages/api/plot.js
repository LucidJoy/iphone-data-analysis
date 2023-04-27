import { PythonShell } from "python-shell";
import fs from "fs";
import path from "path";

export default function handler(req, res) {
  // Run the Python script
  // const scriptPath = path.join(__dirname, "../..", "iphoneData.py");
  // console.log(scriptPath);
  // PythonShell.run(scriptPath, null, function (err, result) {
  //   if (err) throw err;

  //   // Read the image file and return it as a response
  //   const imagePath = path.join(__dirname, "plot.png");
  //   const image = fs.readFileSync(imagePath);
  //   res.writeHead(200, { "Content-Type": "image/png" });
  //   res.end(image, "binary");
  // });

  const scriptPath = path.join(__dirname, "iphoneData.py");
  // console.log(scriptPath);
  PythonShell.run(
    "/Users/joy/Desktop/KIIT/6th sem/TT Lab/iphone_analysis/iphoneData.py",
    null,
    function (err, result) {
      if (err) throw err;

      // Read the image file and return it as a response
      const imagePath = path.join(__dirname, "plot.png");
      const image = fs.readFileSync(imagePath);
      res.writeHead(200, { "Content-Type": "image/png" });
      res.end(image, "binary");
    }
  );
}
