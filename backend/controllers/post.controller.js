import Post from "../models/post.model.js";
import User from "../models/user.model.js";

export const createPost = async (req, res) => {
  try {
    const { question } = req.body;
    const { code } = req.body;
    const { privacy } = req.body;
    const userId = req.user._id.toString();
    console.log(req.body);
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (!question && !privacy) {
      return res.status(400).json({ error: "Post must have question and privacy status" });
    }

    const newPost = new Post({
      user: userId,
      question,
      code,
      privacy,
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    console.log("Error in createPost controller: ", error);
  }
};

export const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    if (post.user.toString() !== req.user._id.toString()) {
      return res
        .status(401)
        .json({ error: "You are not authorized to delete this post" });
    }

    await Post.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.log("Error in deletePost controller: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const commentOnPost = async (req, res) => {
  try {
    const { text } = req.body;
    const postId = req.params.id;
    const userId = req.user._id;

    if (!text) {
      return res.status(400).json({ error: "Text field is required" });
    }
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    const comment = { user: userId, text };

    post.comments.push(comment);
    await post.save();

    res.status(200).json(post);
  } catch (error) {
    console.log("Error in commentOnPost controller: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .populate({
        path: "user",
        select: "-password",
      })
      .populate({
        path: "comments.user",
        select: "-password",
      });

    if (posts.length === 0) {
      return res.status(200).json([]);
    }

    res.status(200).json(posts);
  } catch (error) {
    console.log("Error in getAllPosts controller: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getUserPosts = async (req, res) => {
	try {
		const { username } = req.params;

		const user = await User.findOne({ username });
		if (!user) return res.status(404).json({ error: "User not found" });

		const posts = await Post.find({ user: user._id })
			.sort({ createdAt: -1 })
			.populate({
				path: "user",
				select: "-password",
			})
			.populate({
				path: "comments.user",
				select: "-password",
			});

		res.status(200).json(posts);
	} catch (error) {
		console.log("Error in getUserPosts controller: ", error);
		res.status(500).json({ error: "Internal server error" });
	}
};