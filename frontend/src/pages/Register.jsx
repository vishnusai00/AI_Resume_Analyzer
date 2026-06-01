function Register() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

        <h2 className="text-3xl font-bold text-center mb-6">
          Create Account
        </h2>

        <form className="space-y-4">

          <div>
            <label className="block mb-2 font-medium">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm password"
              className="w-full border rounded-lg px-4 py-3"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg"
          >
            Register
          </button>

        </form>

      </div>

    </div>
  );
}

export default Register;