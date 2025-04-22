export default function WelcomeBanner() {
    return (
      <div className="bg-purple-600 text-white p-4 rounded-md">
        <div className="flex items-center gap-2 mb-2 md:mb-0">
          <h1 className="text-lg md:text-xl font-semibold">Welcome Aboard, Blessing</h1>
          <span className="text-yellow-300 text-xl">👋</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-2 md:mt-0">
          <p className="text-sm md:text-base md:mr-4 mb-2 md:mb-0">We're thrilled to have you join Techrity Team!</p>
          <button className="bg-white text-purple-600 px-4 py-1 rounded-md text-sm font-medium self-start md:self-auto">
            Update Profile
          </button>
        </div>
      </div>
    )
  }
  