const router = require("express").Router();
const articleRoutes = require("./articles");
const userRoutes = require("./user");

// /api/book routes
router.use("/articles", articleRoutes);

// /api/user routes
router.use("/user", userRoutes);

module.exports = router;
