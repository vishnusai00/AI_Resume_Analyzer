import { useState, useEffect } from "react";
import { uploadResume, getHistory } from "../services/resumeService";

function Dashboard() {
  const [file, setFile] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [jobDescription, setJobDescription] = useState("");
  const [history, setHistory] = useState([]);
  const [dragOver, setDragOver] = useState(false);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const response = await getHistory(userId);
      setHistory(response.data.history);
    } catch (error) {
      console.error("Failed to fetch history:", error);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a resume.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);
    formData.append("jobDescription", jobDescription);
    formData.append("userId", localStorage.getItem("userId"));

    try {
      setLoading(true);
      const response = await uploadResume(formData);
      setAnalysis(response.data.analysis);
      await fetchHistory();
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    window.location.href = "/login";
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const dropped = e.dataTransfer.files[0];
    if (dropped && dropped.type === "application/pdf") {
      setFile(dropped);
    }
  };

  const scoreColor =
    analysis?.score >= 80
      ? "text-green-400"
      : analysis?.score >= 60
      ? "text-yellow-400"
      : "text-red-400";

  const scoreBg =
    analysis?.score >= 80
      ? "bg-green-500/10 border-green-500/20 text-green-400"
      : analysis?.score >= 60
      ? "bg-yellow-500/10 border-yellow-500/20 text-yellow-400"
      : "bg-red-500/10 border-red-500/20 text-red-400";

  const scoreBar =
    analysis?.score >= 80
      ? "bg-green-400"
      : analysis?.score >= 60
      ? "bg-yellow-400"
      : "bg-red-400";

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">

      {/* Background grid — same as Home/Login/Register */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Navbar */}
      <nav className="relative z-10 flex justify-between items-center px-8 py-5 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-sm font-black">
            A
          </div>
          <span className="font-semibold text-white tracking-tight">
            ATS Analyzer
          </span>
        </div>
        <button
          onClick={logout}
          className="px-4 py-2 text-sm bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white rounded-lg transition-all font-medium"
        >
          Sign Out
        </button>
      </nav>

      {/* Main content */}
      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-12 pb-24">

        {/* Page heading */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium px-4 py-1.5 rounded-full mb-5 tracking-wide uppercase">
            Resume Analyzer
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-none mb-3">
            Analyze Your <span className="text-indigo-400">Resume</span>
          </h1>
          <p className="text-slate-400 text-base leading-relaxed">
            Upload your resume, paste a job description, and get your ATS match score instantly.
          </p>
        </div>

        {/* Upload card */}
        <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-8 mb-5 hover:border-indigo-500/20 transition-colors">
          <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-widest mb-5">
            Upload Resume
          </h2>

          {/* Drop zone */}
          <label
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            className={`flex flex-col items-center justify-center border-2 border-dashed rounded-xl px-6 py-10 cursor-pointer transition-colors ${
              dragOver
                ? "border-indigo-500 bg-indigo-500/5"
                : "border-white/10 hover:border-indigo-500/40 hover:bg-white/[0.02]"
            }`}
          >
            <div className="text-4xl mb-3">📄</div>
            <p className="text-slate-300 font-medium text-sm mb-1">
              {file ? file.name : "Drop your PDF here, or click to browse"}
            </p>
            <p className="text-slate-600 text-xs">PDF files only</p>
            <input
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </label>
        </div>

        {/* Job description card */}
        <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-8 mb-6 hover:border-indigo-500/20 transition-colors">
          <label className="block text-sm font-semibold text-slate-300 uppercase tracking-widest mb-4">
            Job Description
          </label>
          <textarea
            rows="7"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Paste the job description here..."
            className="w-full bg-slate-800/60 border border-white/8 hover:border-white/15 focus:border-indigo-500 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm outline-none transition-colors resize-none"
          />
        </div>

        {/* Analyze button */}
        <button
          onClick={handleUpload}
          disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3.5 rounded-xl font-semibold text-sm transition-all hover:scale-[1.01] shadow-lg shadow-indigo-900/30 mb-12"
        >
          {loading ? "Analyzing your resume..." : "Analyze My Resume →"}
        </button>

        {/* Analysis Results */}
        {analysis && (
          <div className="space-y-5">

            {/* Score card */}
            <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-8 hover:border-indigo-500/20 transition-colors">
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">
                  ATS Match Score
                </p>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${scoreBg}`}>
                  {analysis.score >= 80
                    ? "Excellent Match"
                    : analysis.score >= 60
                    ? "Good Match"
                    : "Needs Improvement"}
                </span>
              </div>

              <div className="flex items-end gap-4 mb-5">
                <span className={`text-6xl font-black ${scoreColor}`}>
                  {analysis.score}%
                </span>
                <p className="text-slate-500 text-sm mb-2 leading-snug">
                  How closely your resume matches<br />the provided job description.
                </p>
              </div>

              <div className="w-full bg-slate-800 rounded-full h-1.5">
                <div
                  className={`h-1.5 rounded-full transition-all duration-700 ${scoreBar}`}
                  style={{ width: `${analysis.score}%` }}
                />
              </div>
            </div>

            {/* Skills grid */}
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  title: "Required Skills",
                  accent: "indigo",
                  skills: analysis.requiredSkills,
                  emptyMsg: "No required skills detected",
                  isMissing: false,
                },
                {
                  title: "Skills Found",
                  accent: "green",
                  skills: analysis.foundSkills,
                  emptyMsg: "No matching skills found",
                  isMissing: false,
                },
                {
                  title: "Missing Skills",
                  accent: "red",
                  skills: analysis.missingSkills,
                  emptyMsg: null,
                  isMissing: true,
                },
              ].map(({ title, accent, skills, emptyMsg, isMissing }) => (
                <div
                  key={title}
                  className="bg-slate-900/60 border border-white/5 rounded-2xl p-6 hover:border-indigo-500/20 transition-colors"
                >
                  <h3 className={`font-semibold text-sm uppercase tracking-widest text-${accent}-400 mb-4`}>
                    {title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.length > 0 ? (
                      skills.map((skill, i) => (
                        <span
                          key={`${skill}-${i}`}
                          className={`bg-${accent}-500/10 text-${accent}-300 border border-${accent}-500/20 px-3 py-1 rounded-lg text-xs font-medium`}
                        >
                          {skill}
                        </span>
                      ))
                    ) : isMissing ? (
                      <p className="text-green-400 text-sm font-medium">
                        🎉 No missing skills
                      </p>
                    ) : (
                      <p className="text-slate-500 text-sm">{emptyMsg}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Suggestions */}
            <div className="bg-slate-900/60 border border-white/5 rounded-2xl p-8 hover:border-indigo-500/20 transition-colors">
              <h3 className="font-semibold text-sm uppercase tracking-widest text-amber-400 mb-5">
                💡 Improvement Suggestions
              </h3>
              <ul className="space-y-3">
                {analysis.suggestions.map((item, index) => (
                  <li
                    key={index}
                    className="bg-amber-500/5 border border-amber-500/15 rounded-xl px-5 py-3.5 text-slate-300 text-sm leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* History */}
        {history.length > 0 && (
          <div className="mt-6 bg-slate-900/60 border border-white/5 rounded-2xl p-8 hover:border-indigo-500/20 transition-colors">
            <h2 className="font-semibold text-sm uppercase tracking-widest text-slate-400 mb-6">
              🕒 Analysis History
            </h2>
            <div className="space-y-3">
              {history.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center justify-between bg-slate-800/60 border border-white/5 rounded-xl px-5 py-4"
                >
                  <span className="text-indigo-400 font-semibold text-sm">
                    ATS Score: {item.atsScore}%
                  </span>
                  <span className="text-slate-500 text-xs">
                    {new Date(item.createdAt).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center text-slate-600 text-sm py-6 border-t border-white/5">
        © {new Date().getFullYear()} ATS Analyzer. Built to help you get hired.
      </footer>
    </div>
  );
}

export default Dashboard;