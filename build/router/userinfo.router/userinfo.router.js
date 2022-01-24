import express from 'express';
import alluser_collapse from '../../config/controller/userInfo.js';
import { authenticateToken } from '../../config/jwt/jwt.js';
const app = express(); // app.get('/all/:id', medicine.findAllUser);
// app.get('/my-medicine/:id', medicine.findAllvete_id);
// app.get('/search/:id', medicine.findAll);
// app.post('/register', alluser_collapse.create);

app.get('/getuser', authenticateToken, alluser_collapse.getUser);
app.put('/update', authenticateToken, alluser_collapse.updateUser); // app.put('/update/:id', medicine.update);
// app.delete('/delete/:id', medicine.Delete);

export default app;