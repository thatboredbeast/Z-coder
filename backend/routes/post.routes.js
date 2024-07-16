import express from "express";

import {
	commentOnPost,
	createPost,
	deletePost,
	getAllPosts,
	getUserPosts,
} from "../controllers/post.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/create", protectRoute, createPost);
router.delete("/:id", protectRoute, deletePost);
router.get("/all", protectRoute, getAllPosts);
router.get("/user/:username", protectRoute, getUserPosts);
router.post("/comment/:id", protectRoute, commentOnPost);

export default router;