import express from 'express';
import * as usercont from './user.controller.js';

const router = express.Router();

router.get("/user", usercont.user);

router.post("/user/add", usercont.addUser);

router.patch("/user/update", usercont.updateUser);

router.delete("/user/deletes", usercont.deleteUser);

export default router;