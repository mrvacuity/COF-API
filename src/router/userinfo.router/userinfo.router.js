import express from 'express';
import alluser_collapse from '../../config/controller/user_account';
import { authenticateToken } from '../../config/jwt/jwt.js';
const app = express();

// app.get('/all/:id', medicine.findAllUser);
// app.get('/my-medicine/:id', medicine.findAllvete_id);
// app.get('/search/:id', medicine.findAll);
// app.post('/register', alluser_collapse.create);
app.get('/getuser', authenticateToken, alluser_collapse.findAll);
app.put('/update', authenticateToken, alluser_collapse.update);

// app.put('/update/:id', medicine.update);
// app.delete('/delete/:id', medicine.Delete);

export default app;
