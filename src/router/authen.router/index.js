import express from "express";
import alluser_collapse from "../../config/controller/user_account.js";
import { authenticateToken } from "../../config/jwt/jwt.js";
const app = express();

// authen
app.post("/register", alluser_collapse.create);
app.post("/forgetpassword", alluser_collapse.forgetPassword);
app.post("/resetpassword", authenticateToken, alluser_collapse.ResetPassword);

app.post("/login", alluser_collapse.Login);
app.get("/user", authenticateToken, alluser_collapse.getUser);
app.put("/updateuser", authenticateToken, alluser_collapse.updateUser);

export default app;
