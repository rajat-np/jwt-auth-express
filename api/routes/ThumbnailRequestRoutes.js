import express from "express";
import ThumbnailRequestController from "../controllers/ThumbnailRequestController";

const router = express.Router();

router.post("/getImage", ThumbnailRequestController.thumbnailResize);

export default router;
