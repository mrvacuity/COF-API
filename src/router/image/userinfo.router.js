import express from "express";
import image from "../../config/controller/image.js";
const app = express();

app.post("/createpdf", image.createpdf);
app.post("/create", image.createpdf);
app.get("/getimage/:id", image.getImage);
app.get("/pdf/:id", image.getPDF);
app.get("/export/:id", image.exportPDF);
app.get("/examexport/:id", image.exportexamPDF);

export default app;
