import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
     <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center gap-6 justify-center">
        {/* Card Container */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 ">
          {/* Teacher Card */}
          <div className="bg-white rounded-xl shadow-md p-6 w-84 max-w-sm text-center hover:shadow-lg transition ">
            <img
              src="https://t4.ftcdn.net/jpg/07/92/99/37/360_F_792993785_VCMOqevasS3g85LbTibf3pQUpVAvOvVF.jpg"
              alt="teacher"
              className="mx-auto mb-4 w-32 h-32 rounded-full object-cover"
            />
            <Link
              to="/login"
              className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Teacher Login
            </Link>
          </div>

          {/* Student Card */}
          <div className="bg-white rounded-xl shadow-md p-6 w-84 max-w-sm text-center hover:shadow-lg transition">
            <img
              src="https://img.freepik.com/premium-vector/student-kids-cartoon_18591-786.jpg"
              alt="student"
              className="mx-auto mb-4 w-32 h-32 rounded-full object-cover"
            />
            <Link
              to="/student-login"
              className="inline-block mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Student Login
            </Link>
          </div>
        </div>

        {/* Welcome Text */}
        <div className="text-center pt-10">
          <h1 className="text-2xl font-semibold text-gray-800">Welcome To</h1>
          <h2 className="text-xl text-gray-600">XYZ LiteraZee School</h2>
        </div>
      </div>
    </>
  )
}

export default Home
