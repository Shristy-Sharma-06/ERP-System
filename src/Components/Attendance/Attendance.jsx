import React from "react";
import Present from "./Present";

function Attendence() {
  const students = [
    { name: "Shradha" },
    { name: "Shristy" },
    { name: "Mohit" },
    { name: "Rohit" },
    { name: "Rohit" },
    { name: "Rohit" },
    { name: "Rohit" },
    { name: "Rohit2" },
  ];
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="w-full max-w-4xl space-y-4 flex md:flex-row flex-col justify-between items-center">
      {/* Grade Heading */}
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Grade XI</h1>

      <button
        type="submit"
        className="px-6 py-1 bg-green-600 text-white rounded-lg hover:bg-blue-700 transition mr-6 mb-2"
      >
        Present
      </button>

      </div>
      <hr className="w-full max-w-4xl  border-gray-300 mb-4" />
      {/* Attendance List */}
      <div className="w-full max-w-4xl space-y-4">
        {students.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-lg shadow"
          >
            <span
              key={item.name}
              className="text-lg font-medium text-gray-700 mb-2 md:mb-0"
            >
              {item.name}
            </span>
            <Present />
          </div>
        ))}
      </div>

      {/* Divider */}
      <hr className="w-full max-w-4xl border-gray-300 my-6" />

      {/* Submit Button */}
      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </div>
  );
}

export default Attendence;
