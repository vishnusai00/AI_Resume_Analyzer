import { Link } from "react-router-dom";

function Home() {
  const features = [
    {
      icon: "📊",
      title: "ATS Score Analysis",
      desc: "Instantly know how your resume scores against applicant tracking systems.",
    },
    {
      icon: "🎯",
      title: "Skills Gap Detection",
      desc: "See exactly which skills the job requires and which ones you're missing.",
    },
    {
      icon: "💡",
      title: "Smart Suggestions",
      desc: "Get actionable tips to improve your resume and boost your chances.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">

      {/* Subtle background grid */}
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

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 text-sm bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors font-medium"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-28 pb-24">
        <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium px-4 py-1.5 rounded-full mb-8 tracking-wide uppercase">
          Resume Analysis
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-6 max-w-4xl">
          Land More{" "}
          <span className="text-indigo-400">Interviews</span>
          <br />
          With Every Apply
        </h1>

        <p className="text-slate-400 text-lg max-w-xl mb-10 leading-relaxed">
          Upload your resume, paste the job description, and instantly see your
          ATS match score, missing skills, and how to improve.
        </p>

        <div className="flex items-center gap-4">
          <Link
            to="/register"
            className="px-7 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all hover:scale-105 shadow-lg shadow-indigo-900/40"
          >
            Analyze My Resume →
          </Link>
          <Link
            to="/login"
            className="px-7 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white rounded-xl font-medium transition-all"
          >
            Sign In
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-slate-900/60 border border-white/5 rounded-2xl p-6 hover:border-indigo-500/30 transition-colors"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 text-center text-slate-600 text-sm py-6 border-t border-white/5">
        © {new Date().getFullYear()} ATS Analyzer. Built to help you get hired.
      </footer>
    </div>
  );
}

export default Home;