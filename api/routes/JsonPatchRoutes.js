import express from "express";

import JsonPatchController from "../controllers/JsonPatchController";

const router = express.Router();

router.post("/patchJson", JsonPatchController.patchJson);

module.exports = router;
