const Analysis = require("../models/Analysis");
const analyzeResume = require("../utils/atsAnalyzer");
const fs = require("fs");
const pdf = require("pdf-parse");

const uploadResume = async (req, res) => {
  try {
    const pdfBuffer = fs.readFileSync(req.file.path);

    const data = await pdf(pdfBuffer);

    const analysis = analyzeResume(
      data.text,
      req.body.jobDescription
    );

    await Analysis.create({
  userId: req.body.userId,

  atsScore: analysis.score,

  requiredSkills:
    analysis.requiredSkills,

  foundSkills:
    analysis.foundSkills,

  missingSkills:
    analysis.missingSkills,

  suggestions:
    analysis.suggestions,

  jobDescription:
    req.body.jobDescription,
});

    return res.status(200).json({
      success: true,
      message: "Resume Analyzed Successfully",
      analysis,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAnalysisHistory = async (req, res) => {
  try {
    const history = await Analysis.find({
      userId: req.params.userId,
    })
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      history,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  uploadResume,
  getAnalysisHistory,
};