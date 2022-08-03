const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - LIVE - 👋🌎🌍🌏",
  });
});

module.exports = router;
