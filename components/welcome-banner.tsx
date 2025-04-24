export default function WelcomeBanner() {
  return (
    <div className="bg-purple-600 text-white p-4 rounded-md">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <div className="flex items-center gap-2">
          <h1 className="text-lg md:text-xl font-semibold">Welcome Aboard, Blessing</h1>
          <span className="text-yellow-300 text-xl">👋</span>
          <p className="text-sm md:text-base ml-2">We're thrilled to have you join Techrity Team!</p>
        </div>
        <button className="bg-white text-purple-600 px-4 py-1 rounded-md text-sm font-medium whitespace-nowrap">
          Update Profile
        </button>
      </div>
    </div>
  )
}