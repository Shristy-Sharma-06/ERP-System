import React from "react";
import { NavLink } from "react-router-dom";

function Teacher() {
  return (
    <div className="flex flex-col justify-center items-center p-6 bg-gray-100 min-h-screen">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center ">Welcome Teacher</h1>

      {/* Action Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 w-full max-w-4xl">

        {/* Attendance */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition w-full max-w-xs text-center">
          <img
            src="https://media.istockphoto.com/id/1167651240/vector/attendance-concept-businessman-holding-document-vector-flat-design-man-hold-document.jpg?s=612x612&w=0&k=20&c=DHr2ZaBkHuSkcZOcrt3djH3N0SdlRZS74gtbzQzPLT0="
            alt="Attendance"
            className="mx-auto mb-4 w-32 h-32 rounded-full object-cover"
          />
          <NavLink
            to="/attendance"
            className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Attendance
          </NavLink>
        </div>

        {/* Homework */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition w-full max-w-xs text-center">
          <img
            src="https://media.istockphoto.com/id/960808210/vector/happy-cute-school-boy-writing-for-homework-study-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=13blOs54q6F6KJK2BSDf3B0gwRXgyBNHyJuW7IP_OWo="
            alt="Homework"
            className="mx-auto mb-4 w-32 h-32 rounded-full object-cover"
          />
          <NavLink
            to="/home-work"
            className="inline-block mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Homework
          </NavLink>
        </div>

        {/* Marks */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition w-full max-w-xs text-center">
          <img
            src="https://png.pngtree.com/png-clipart/20220111/original/pngtree-cartoon-boy-holding-full-mark-test-paper-illustration-png-image_7085558.png"
            alt="Marks"
            className="mx-auto mb-4 w-32 h-32 rounded-full object-cover"
          />
          <NavLink
            to="/marks"
            className="inline-block mt-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            Marks
          </NavLink>
        </div>

      </div>
    </div>
  );
}

export default Teacher;
