import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-xl w-full text-center">
        {/* Gradient Glow */}
        <div className="relative mx-auto w-fit mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-fuchsia-600 to-indigo-700 blur-3xl opacity-20 rounded-full"></div>

          <div className="relative bg-white border border-gray-100 shadow-xl rounded-3xl px-10 py-12">
            {/* 404 */}
            <h1 className="text-8xl font-extrabold bg-gradient-to-r from-pink-500 via-fuchsia-600 to-indigo-700 bg-clip-text text-transparent">
              404
            </h1>

            {/* Title */}
            <h2 className="mt-4 text-3xl font-bold text-gray-800">
              Page Not Found
            </h2>

            {/* Description */}
            <p className="mt-4 text-gray-500 leading-relaxed">
              The page you are looking for does not exist or may have been
              moved. Let’s get you back to your community.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Home Button */}
              <Link
                to="/app/dashboard"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 via-fuchsia-600 to-indigo-700 text-white font-medium shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                Go To Dashboard
              </Link>

              {/* Back Button */}
              <button
                onClick={() => window.history.back()}
                className="px-6 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 font-medium hover:bg-gray-100 transition-all duration-300"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Branding */}
        <p className="text-sm text-gray-400">
          Lost in Sangati? We’ll help you reconnect.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
