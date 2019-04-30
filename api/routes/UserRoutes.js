import express from "express";

import UserController from "../controllers/UserController";

const router = express.Router();

router.post("/authenticate", UserController.authenticate);

module.exports = router;
