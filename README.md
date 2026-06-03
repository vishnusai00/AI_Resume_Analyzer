# ATS Resume Analyzer & Job Matching Platform

## Overview

ATS Resume Analyzer & Job Matching Platform is a full-stack web application that helps job seekers evaluate their resumes against job descriptions using Applicant Tracking System (ATS) principles.

The platform analyzes uploaded resumes, identifies matching and missing skills, calculates an ATS compatibility score, and provides personalized improvement suggestions to increase the chances of getting shortlisted.

---

## Features

### Authentication & Security

* User Registration and Login
* JWT-based Authentication
* Protected Routes and APIs
* User-specific Analysis History

### Resume Analysis

* PDF Resume Upload
* Resume Text Extraction
* ATS Score Calculation
* Resume Quality Evaluation
* Skill Gap Detection

### Job Matching

* Job Description Parsing
* Required Skill Identification
* Matching Skill Detection
* Missing Skill Analysis

### Dashboard

* ATS Match Score Visualization
* Resume Section Validation
* Improvement Suggestions
* Historical Analysis Tracking

---

## Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas

### Authentication

* JSON Web Token (JWT)

### Other Tools

* Git
* GitHub

---

## System Workflow

1. User registers or logs in.
2. Resume PDF is uploaded.
3. Job description is provided.
4. Resume content is extracted and analyzed.
5. Skills are compared with job requirements.
6. ATS score is generated.
7. Missing skills and recommendations are displayed.
8. Analysis history is stored securely.

---

## Future Enhancements

* AI-powered Resume Recommendations
* Resume Builder
* Multiple Resume Versions
* Job Portal Integration
* Advanced ATS Scoring Engine
* Interview Preparation Module

---

## Author

Vishnu Sai

Computer Science Engineer

Full Stack Development | Networking | Software Development

Folder Structure:

ats-resume-analyzer
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── models
│   ├── middleware
│   ├── utils
│   └── server.js
│
├── README.md
└── .gitignore
