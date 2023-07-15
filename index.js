import express from 'express';
import router from './modules/user/user.router.js';

const app = express();

app.use(express.json());
app.use(router);

app.listen(3000,console.log("Runnnning"))