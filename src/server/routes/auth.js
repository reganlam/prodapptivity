const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/verify", (req, res) => {
  const { token } = req.body;

  jwt.verify(token, "your-secret-key", (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Token is invalid" });
    }

    return res.status(200).json({ message: "Token is valid", decoded });
  });
});

module.exports = router;
