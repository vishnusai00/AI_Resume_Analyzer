const skillsDatabase = [
  // Programming Languages
  "c programming",
  "c++",
  "python",
  "java",
  "javascript",
  "typescript",
  "php",
  "c#",
  "go",
  "golang",
  "ruby",
  "kotlin",
  "swift",
  "r programming",
  "scala",

  // Frontend
  "html",
  "css",
  "bootstrap",
  "tailwind css",
  "sass",
  "react",
  "react.js",
  "next.js",
  "vue.js",
  "angular",
  "redux",
  "jquery",

  // Backend
  "node.js",
  "express",
  "express.js",
  "spring boot",
  "django",
  "flask",
  "fastapi",
  "laravel",
  "asp.net",
  ".net",
  "hibernate",

  // Databases
  "mysql",
  "postgresql",
  "mongodb",
  "sqlite",
  "oracle",
  "sql server",
  "firebase",
  "redis",
  "cassandra",
  "dynamodb",
  "sql",
  "nosql",

  // Cloud & DevOps
  "aws",
  "azure",
  "google cloud",
  "gcp",
  "docker",
  "kubernetes",
  "jenkins",
  "terraform",
  "ansible",
  "ci/cd",
  "cloud computing",
  "linux",
  "shell scripting",

  // Version Control
  "git",
  "github",
  "gitlab",
  "bitbucket",

  // Data Science & Analytics
  "excel",
  "advanced excel",
  "power bi",
  "tableau",
  "pandas",
  "numpy",
  "matplotlib",
  "seaborn",
  "scikit-learn",
  "machine learning",
  "deep learning",
  "data analysis",
  "data visualization",
  "statistics",
  "data mining",
  "business intelligence",
  "etl",

  // AI & NLP
  "artificial intelligence",
  "ai",
  "generative ai",
  "chatgpt",
  "openai",
  "llm",
  "nlp",
  "computer vision",
  "tensorflow",
  "keras",
  "pytorch",
  "hugging face",

  // CS Fundamentals
  "data structures",
  "algorithms",
  "object oriented programming",
  "oop",
  "operating systems",
  "computer networks",
  "dbms",
  "system design",
  "software engineering",
  "design patterns",

  // APIs & Testing
  "rest api",
  "graphql",
  "postman",
  "swagger",
  "jest",
  "junit",
  "selenium",
  "cypress",
  "manual testing",
  "automation testing",

  // Cybersecurity
  "cybersecurity",
  "ethical hacking",
  "network security",
  "penetration testing",
  "owasp",

  // Mobile Development
  "android",
  "android studio",
  "flutter",
  "react native",
  "ios development",

  // Project Management
  "agile",
  "scrum",
  "jira",
  "confluence",
  "kanban",

  // Business & Product
  "product management",
  "market research",
  "business analysis",
  "requirement gathering",
  "stakeholder management",
  "user stories",
  "wireframing",
  "figma",
  "a/b testing",

  // Networking
  "tcp/ip",
  "dns",
  "http",
  "https",
  "networking",

  // Soft Skills
  "communication",
  "teamwork",
  "leadership",
  "problem solving",
  "critical thinking",
  "analytical thinking",
  "time management",

  "reactjs",
"nodejs",
"expressjs",
"powerbi",
"ms excel",
"aws s3",
"ec2",
"lambda",
"api",
"restful api",
"ml",
"data analytics",
"data analyst",
"business analyst",
"product analyst",
"sql queries",
"advanced sql"
];
const analyzeResume = (resumeText, jobDescription) => {
  const resume = resumeText.toLowerCase();
  const compactResume = resume.replace(/\s+/g, "");
  const jd = jobDescription.toLowerCase();

  // ===== Skills Matching =====

  const requiredSkills = new Set();

  skillsDatabase.forEach((skill) => {
    const escapedSkill = skill
      .toLowerCase()
      .replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    const regex = new RegExp(`\\b${escapedSkill}\\b`, "i");

    if (regex.test(jd)) {
      requiredSkills.add(skill);
    }
  });

  const requiredSkillsArray = [...requiredSkills];

  const foundSkills = [];
  const missingSkills = [];

  requiredSkillsArray.forEach((skill) => {
    const escapedSkill = skill
      .toLowerCase()
      .replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    const regex = new RegExp(`\\b${escapedSkill}\\b`, "i");

    if (regex.test(resume)) {
      foundSkills.push(skill);
    } else {
      missingSkills.push(skill);
    }
  });

  const skillsScore =
    requiredSkillsArray.length > 0
      ? (foundSkills.length / requiredSkillsArray.length) * 100
      : 0;

  // ===== Project Score =====

  const projectKeywords = [
    "project",
    "developed",
    "built",
    "implemented",
    "application",
  ];

  let projectMatches = 0;

  projectKeywords.forEach((word) => {
    if (resume.includes(word)) {
      projectMatches++;
    }
  });

  const projectScore =
    (projectMatches / projectKeywords.length) * 100;

  // ===== Experience Score =====

  const experienceKeywords = [
    "intern",
    "internship",
    "experience",
    "trainee",
  ];

  let experienceMatches = 0;

  experienceKeywords.forEach((word) => {
    if (resume.includes(word)) {
      experienceMatches++;
    }
  });

  const experienceScore =
    (experienceMatches / experienceKeywords.length) * 100;

  // ===== Education Score =====

  const educationKeywords = [
    "bachelor",
    "engineering",
    "computer science",
    "cgpa",
  ];

  let educationMatches = 0;

  educationKeywords.forEach((word) => {
    if (resume.includes(word)) {
      educationMatches++;
    }
  });

  const educationScore =
    (educationMatches / educationKeywords.length) * 100;

// ===== Resume Section Analysis =====
const cgpaMatch = resumeText.match(
  /cgpa\s*[:\-]?\s*(\d+(\.\d+)?)/i
);

let cgpa = null;
let cgpaStatus = "Not Found";

if (cgpaMatch) {
  cgpa = parseFloat(cgpaMatch[1]);

  if (cgpa >= 8) {
    cgpaStatus = "Excellent";
  } else if (cgpa >= 7) {
    cgpaStatus = "Good";
  } else if (cgpa >= 6) {
    cgpaStatus = "Average";
  } else {
    cgpaStatus = "Needs Improvement";
  }
}
const sectionAnalysis = {
  contactInfo: false,
  email: false,
  linkedin: false,
  github: false,
  education: false,
  projects: false,
  experience: false,
  skillsSection: false,

  cgpa,
  cgpaStatus,
};
const emailRegex =
  /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}/;

if (emailRegex.test(compactResume)) {
  sectionAnalysis.email = true;
}

const phoneRegex =
  /(\+91)?\s?[6-9]\d{9}/;

if (phoneRegex.test(compactResume)) {
  sectionAnalysis.contactInfo = true;
}

if (
  compactResume.includes("linkedin") ||
  compactResume.includes("linkedin.com")
) {
  sectionAnalysis.linkedin = true;
}

if (
  compactResume.includes("github") ||
  compactResume.includes("github.com")
) {
  sectionAnalysis.github = true;
}

if (
  resume.includes("education") ||
  resume.includes("bachelor") ||
  resume.includes("cgpa")
) {
  sectionAnalysis.education = true;
}

if (
  resume.includes("project") ||
  resume.includes("projects")
) {
  sectionAnalysis.projects = true;
}

if (
  resume.includes("experience") ||
  resume.includes("internship") ||
  resume.includes("intern")
) {
  sectionAnalysis.experience = true;
}

if (
  resume.includes("skills") ||
  resume.includes("technical skills")
) {
  sectionAnalysis.skillsSection = true;
}
  // ===== Final ATS Score =====

  const score = Math.round(
    skillsScore * 0.5 +
    projectScore * 0.2 +
    experienceScore * 0.2 +
    educationScore * 0.1
  );

  // ===== Suggestions =====

  const suggestions = [];

  if (missingSkills.length > 0) {
    suggestions.push(
      `Consider adding these skills if relevant: ${missingSkills.join(
        ", "
      )}`
    );
  }

  if (!resume.includes("github")) {
    suggestions.push("Add GitHub profile link");
  }

  if (!resume.includes("linkedin")) {
    suggestions.push("Add LinkedIn profile");
  }

  if (!resume.includes("intern")) {
    suggestions.push("Add internship experience");
  }
console.log("EMAIL:", sectionAnalysis.email);
console.log("GITHUB:", sectionAnalysis.github);
console.log("SKILLS:", sectionAnalysis.skillsSection);
console.log(resumeText);
  // ===== Return =====

  return {
  score,
  requiredSkills: requiredSkillsArray,
  foundSkills,
  missingSkills,
  suggestions,
  sectionAnalysis,

    breakdown: {
      skillsScore: Math.round(skillsScore),
      projectScore: Math.round(projectScore),
      experienceScore: Math.round(experienceScore),
      educationScore: Math.round(educationScore),
    },
  };
};

module.exports = analyzeResume;