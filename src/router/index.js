import express from "express";
import Authen from "./authen.router/index.js";
import Course from "./course.router/index.js";
import image from "./image/userinfo.router.js";

const router = express.Router();

router.use("/authen", Authen);
router.use("/image", image);
router.use("/lesson", Course);

export default router;
