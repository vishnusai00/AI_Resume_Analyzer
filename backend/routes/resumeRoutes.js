const express = require("express");
const upload = require("../middleware/uploadMiddleware");

const {
  uploadResume,
  getAnalysisHistory,
} = require("../controllers/resumeController");

const router = express.Router();

router.get(
  "/history/:userId",
  getAnalysisHistory
);

router.post(
  "/upload",
  upload.single("resume"),
  uploadResume
);

module.exports = router;