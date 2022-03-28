import express from "express";
import course from "../../config/controller/course.js";
import { authenticateToken } from "../../config/jwt/jwt.js";
const app = express();

// authen
app.post("/createlesson", course.createlesson);
app.post("/createcomponent", course.creatcomponent_model);
app.post("/createtest", course.createtest);
app.get("/gettest/:id", course.gettest);
app.delete("/deletetest/:id", course.deletetest);

app.put("/updatecomponent/:id", course.updatecomponent);
app.delete("/deletecomponent/:id", course.deletecomponent);
app.delete("/deletelesson/:id", course.deletecourse);
app.get("/getalllesson", course.getcourse);
app.get("/getlesson/:id", course.getcourseById);
app.put("/updatelesson/:id", course.update);
app.post("/createhistory", authenticateToken, course.createhistory);
app.put("/updatehistory", authenticateToken, course.updatehistory);
app.get("/getallhistory", authenticateToken, course.getallhistory);
app.post("/createfeed", authenticateToken, course.createfeed);
app.put("/updatefeed", authenticateToken, course.updatefeed);

app.delete("/deletefeed", course.deletefeed);
app.post("/createcomment", authenticateToken, course.createcomment);
app.get("/checkcondition/:id", authenticateToken, course.checkcondition);
app.get("/getallfeed", authenticateToken, course.getallfeed);
app.get("/getfeed/:id", course.getfeed);
app.get("/allreport", authenticateToken, course.allreport);
app.post("/createreport", authenticateToken, course.createreport);
app.post("/createscore", authenticateToken, course.createscore);
app.get("/like", authenticateToken, course.createlike);
app.get("/alllike", authenticateToken, course.getalllike);

app.get("/score", authenticateToken, course.score);

export default app;
