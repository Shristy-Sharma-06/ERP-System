import { useState } from "react";

export default function StudentMarksheet() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    name: "",
    math: "",
    science: "",
    english: "",
    hindi: "",
    computer: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAddStudent = () => {
    if (
      !form.name ||
      !form.math ||
      !form.science ||
      !form.english ||
      !form.hindi ||
      !form.computer
    )
      return;

    const newStudent = {
      name: form.name,
      math: Number(form.math),
      science: Number(form.science),
      english: Number(form.english),
      hindi: Number(form.hindi),
      computer: Number(form.computer),
    };
    setStudents([...students, newStudent]);
    setForm({
      name: "",
      math: "",
      science: "",
      english: "",
      hindi: "",
      computer: "",
    });
  };

  return (
    <div className="p-6  mx-auto space-y-6">
      <h2 className="text-3xl font-bold text-center text-blue-800">
        📊 Student Marksheet
      </h2>

      {/* Input Form */}
      <div className="bg-white rounded-lg shadow p-4 space-y-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="number"
            name="math"
            value={form.math}
            onChange={handleChange}
            placeholder="Math"
            className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="number"
            name="science"
            value={form.science}
            onChange={handleChange}
            placeholder="Science"
            className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="number"
            name="english"
            value={form.english}
            onChange={handleChange}
            placeholder="English"
            className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="number"
            name="hindi"
            value={form.hindi}
            onChange={handleChange}
            placeholder="Hindi"
            className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="number"
            name="computer"
            value={form.computer}
            onChange={handleChange}
            placeholder="Computer"
            className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleAddStudent}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            ➕ Add Student
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-blue-100 text-blue-800 uppercase">
            <tr>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Math</th>
              <th className="px-4 py-3 text-left">Science</th>
              <th className="px-4 py-3 text-left">English</th>
              <th className="px-4 py-3 text-left">Hindi</th>
              <th className="px-4 py-3 text-left">Computer</th>
              <th className="px-4 py-3 text-left">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {students.map((student, index) => {
              const total =
                Number(student.math) +
                Number(student.science) +
                Number(student.english);
              return (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-2">{student.name}</td>
                  <td className="px-4 py-2">{student.math}</td>
                  <td className="px-4 py-2">{student.science}</td>
                  <td className="px-4 py-2">{student.english}</td>
                  <td className="px-4 py-2">{student.hindi}</td>
                  <td className="px-4 py-2">{student.computer}</td>
                  <td className="px-4 py-2 font-semibold text-blue-600">
                    {total}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
