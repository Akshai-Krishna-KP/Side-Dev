import { Link } from "react-router-dom";
import { handleLogin, handleSignup } from "../logic/auth.js";

function Login() {
  return (
    <div className="min-h-screen bg-login-bg bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center font-minecraft">
      {/* Header Section */}
      <div className="text-center mb-4">
        <img
          src="/icon.png"
          alt="Samsaram Logo"
          className="w-20 h-20 mb-2 mx-auto drop-shadow-2xl"
          style={{ imageRendering: "auto" }}
        />
        <img
          src="/samsaram-text.png"
          alt="Samaram"
          className="w-3xl h-36 mx-auto drop-shadow-2xl"
        />
      </div>

      {/* Login Form Container - Stone Brick Border Wrapper */}
      <div className="border-stonebricks shadow-[0_8px_32px_rgba(0,0,0,0.6)] relative">
        {/* Inner Content - Dark Oak Planks */}
        <div className="border-stonebricks-inner p-8 pb-12 relative">
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

          <form
            action={handleLogin}
            className="flex flex-col gap-4 relative z-10 font-minecraft"
          >
            {/* Username/Email Field */}
            <div>
              <label className="block text-xl text-white drop-shadow-[2px_2px_0px_#3a3a3a] mb-1 font-minecraft">
                ROLL NUMBER
              </label>
              <input
                type="text"
                name="rollNumber"
                placeholder="roll number"
                className="w-full px-4 py-3 text-xl bg-light-oak-planks bg-repeat text-black font-bold placeholder:font-normal placeholder:text-black/50 border-3 border-mc-wood-dark outline-none shadow-[inset_2px_2px_4px_rgba(0,0,0,0.5)] focus:border-mc-green-mid focus:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.5),0_0_8px_rgba(90,154,74,0.5)] font-minecraft"
                style={{
                  backgroundSize: "16px 32px",
                  imageRendering: "pixelated",
                }}
                autoComplete="username"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-xl text-white drop-shadow-[2px_2px_0px_#3a3a3a] mb-1 font-minecraft">
                PASSWORD
              </label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 text-xl bg-light-oak-planks bg-repeat text-black font-bold placeholder:font-normal placeholder:text-black/50 border-3 border-mc-wood-dark outline-none shadow-[inset_2px_2px_4px_rgba(0,0,0,0.5)] focus:border-mc-green-mid focus:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.5),0_0_8px_rgba(90,154,74,0.5)] font-minecraft"
                style={{
                  backgroundSize: "32px 32px",
                  imageRendering: "pixelated",
                }}
                autoComplete="current-password"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-4 text-2xl font-bold text-white uppercase tracking-widest mt-2 bg-gradient-to-b from-mc-green via-mc-green-mid to-mc-green-dark border-4 cursor-pointer transition-all duration-100 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)] hover:from-mc-green-light hover:via-mc-green hover:to-mc-green-mid hover:-translate-y-0.5 active:translate-y-0.5 font-minecraft"
              style={{
                borderColor: "#6ee056 #3d8a26 #2d6a1a #5fce45",
              }}
            >
              LOGIN
            </button>
          </form>
        </div>

        {/* Create Account Button - Positioned at bottom center of border */}
        <Link
          to="/signup"
          className="absolute left-1/2 -translate-x-1/2 -bottom-3 px-6 py-2 text-px font-bold text-black bg-stone-bricks bg-repeat no-underline transition-all duration-200 hover:brightness-110 font-minecraft drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]"
          style={{
            backgroundSize: "10px 10px",
            imageRendering: "pixelated",
          }}
        >
          CREATE ACCOUNT
        </Link>
      </div>
    </div>
  );
}

function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-lg shadow-md p-8 w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form action={handleSignup} method="post" className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Type Username!"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name=""
              id=""
              placeholder="Your Password!"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name=""
              id=""
              placeholder="Repeat the password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">OTP</label>
            <div className="flex gap-2">
              <input
                type="number"
                name="OTP"
                id=""
                placeholder="Enter OTP"
                className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                className="px-3 py-2 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition whitespace-nowrap"
              >
                Get OTP
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition mt-2"
          >
            SignUP
          </button>
        </form>
        <p className="text-center text-sm mt-4 text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 hover:underline font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export { Login, Signup };
