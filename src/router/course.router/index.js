import express from "express";
import course from "../../config/controller/course.js";
import { authenticateToken } from "../../config/jwt/jwt.js";
const app = express();

// authen
app.post("/createlesson", course.createlesson);
app.post("/createcomponent", course.creatcomponent_model);
app.post("/createtest", course.createtest);
app.get("/gettest/:id", course.gettest);

app.put("/updatelesson/:id", course.update);
app.get("/getalllesson", course.getcourse);
app.get("/getlesson/:id", course.getcourseById);
app.post("/createhistory", authenticateToken, course.createhistory);
app.get("/getallhistory", authenticateToken, course.getallhistory);
app.post("/createfeed", authenticateToken, course.createfeed);
app.post("/createcomment", authenticateToken, course.createcomment);
app.get("/checkcondition/:id", authenticateToken, course.checkcondition);

app.get("/getallfeed", authenticateToken, course.getallfeed);
app.get("/getfeed/:id", course.getfeed);
app.get("/allreport", authenticateToken, course.allreport);
app.post("/createreport", authenticateToken, course.createreport);
app.post("/createscore", authenticateToken, course.createscore);
app.get("/like", authenticateToken, course.createlike);

app.get("/score", authenticateToken, course.score);

// app.post('/update/:id', course.update);
// app.get('/getall', course.getcourse);
// app.get('/get/:id',authenticateToken, course.getcourseById);

// app.post('/update/:id', course.update);
// app.get('/getall', course.getcourse);
// app.get('/get/:id',authenticateToken, course.getcourseById);

export default app;
