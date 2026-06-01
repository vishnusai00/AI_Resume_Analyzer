import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">

      <nav className="flex justify-between items-center px-8 py-5 bg-white shadow">
        <h1 className="text-2xl font-bold text-blue-600">
          AI Resume Analyzer
        </h1>

        <div className="space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Register
          </Link>
        </div>
      </nav>

      <div className="flex flex-col justify-center items-center flex-1 text-center px-4">

        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          AI Resume Analyzer &
          <span className="text-blue-600"> Job Matching Platform</span>
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Upload your resume, analyze ATS score, identify missing skills,
          and discover jobs that match your profile.
        </p>

        <div className="space-x-4">

          <Link
            to="/register"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="border border-gray-400 px-6 py-3 rounded-lg"
          >
            Login
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Home;