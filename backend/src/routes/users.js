const express = require("express");
const {
  registerUser,
  loginUser,
  getUser,
} = require("../controllers/userController");
const { verifyToken } = require("../middlewares/authMiddleware");
const { logRequest } = require("../middlewares/loggerMiddleware");

const router = express.Router();

router.use(logRequest);

router.post("/usuarios", registerUser);
router.post("/login", loginUser);
router.get("/usuarios", verifyToken, getUser);

module.exports = router;
