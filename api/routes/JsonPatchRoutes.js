import express from "express";

import JsonPatchController from "../controllers/JsonPatchController";

const router = express.Router();

router.post("/patch", JsonPatchController.patchJson);

export default router;
