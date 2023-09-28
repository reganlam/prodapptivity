const express = require("express");
const router = express.Router();
const verifyToken = require("../utils/verifyToken");

router.post("/verify", async (req, res) => {
  const { jwtToken } = req.body;
  const decodedToken = await verifyToken(jwtToken);

  if (!decodedToken) {
    return res.status(401).json({ error: "Token verification failed" });
  }

  console.log(decodedToken);

  return res.status(200).json({ message: "Token verified successfully" });
});

module.exports = router;
