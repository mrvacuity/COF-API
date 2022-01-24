import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT || 6000;

const app = express();

app.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname ,"./web-build", '/index.html'));
  const filePath = path.resolve(__dirname, "./web-build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return;
      // // console.log(err);
    }

    // data = data
    //   .replace(/__TITLE__/g, "Home Page")
    //   .replace(/__DESCRIPTION__/g, "Home page description.");

    res.send(data);
  });
});

app.get("/office", (req, res) => {
  const filePath = path.resolve(__dirname, "./web-build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return;
      // // console.log(err);
    }

    // data = data
    //   .replace(/__TITLE__/g, "About Page")
    //   .replace(/__DESCRIPTION__/g, "About page description.")
    //   .replace(
    //     /__IMAGE__/g,
    //     "http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg"
    //   );

    res.send(data);
  });
});

app.use(express.static(path.resolve(__dirname, "./web-build")));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
