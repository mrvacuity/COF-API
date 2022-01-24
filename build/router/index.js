import express from "express";
import Authen from "./useraccount.router/medicine.router.js";
const router = express.Router();
router.use("/authen", Authen);
export default router;