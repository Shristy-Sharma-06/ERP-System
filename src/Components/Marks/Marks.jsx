import { useState } from "react";
import Dropdown from './Dropdown';

export default function StudentMarksheet() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    classLevel: "",
    section: "",
    subject: "",
    studentName: "",
    marks: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAddStudent = () => {
    if (
      !form.classLevel ||
      !form.section ||
      !form.subject ||
      !form.studentName ||
      !form.marks
    ) return;

    const newStudent = { ...form };
    setStudents([...students, newStudent]);

    setForm({
      classLevel: "",
      section: "",
      subject: "",
      studentName: "",
      marks: "",
    });
  };

  const subjectOptions =
    ["nursary", "lkg", "ukg"].includes(form.classLevel)
      ? ["English", "Hindi", "Maths", "Science", "GK", "Moral-Science"]
      : ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"].includes(form.classLevel)
      ? ["English", "Hindi", "Maths", "Science", "GK", "Moral-Science", "Social-Science", "Computer"]
      : ["ix", "x"].includes(form.classLevel)
      ? ["English", "Hindi", "Maths", "Social-Science", "Computer", "Science"]
      : ["xi", "xii"].includes(form.classLevel)
      ? ["English", "Hindi", "Maths", "Physics", "Chemistry"]
      : [];

  const studentsOption =
    ["nursary", "lkg", "ukg"].includes(form.classLevel)
      ? ["Meera", "Kajal", "Shyam", "Rakesh"]
      : ["Shilpi", "Raghu"];

  return (
    <div className="p-6 mx-auto space-y-6">
      <h2 className="text-3xl font-bold text-center text-blue-800">
        📊 Student Marksheet
      </h2>

      {/* Input Form */}
      <div className="bg-white rounded-lg shadow p-4 space-y-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4">
          <Dropdown
            options={["nursary", "lkg", "ukg", "i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x", "xi", "xii"]}
            value={form.classLevel}
            onChange={(e) => setForm({ ...form, classLevel: e.target.value })}
            placeholder="Class"
          />

          <Dropdown
            options={["A", "B", "C", "D"]}
            value={form.section}
            onChange={(e) => setForm({ ...form, section: e.target.value })}
            placeholder="Section"
            disabled={!form.classLevel}
          />

          <Dropdown
            options={subjectOptions}
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            placeholder="Subject"
            disabled={!form.classLevel}
          />

          <Dropdown
          
            options={studentsOption}
            value={form.studentName}
            onChange={(e) => setForm({ ...form, studentName: e.target.value })}
            placeholder="Student Name"
            disabled={!form.classLevel}
          />

          <input
            type="number"
            name="marks"
            value={form.marks}
            onChange={handleChange}
            placeholder="Marks"
            className="border p-2 rounded"
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
              <th className="px-4 py-3 text-left">Class</th>
              <th className="px-4 py-3 text-left">Section</th>
              <th className="px-4 py-3 text-left">Subject</th>
              <th className="px-4 py-3 text-left">Student Name</th>
              <th className="px-4 py-3 text-left">Marks</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {students.map((student, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2">{student.classLevel}</td>
                <td className="px-4 py-2">{student.section}</td>
                <td className="px-4 py-2">{student.subject}</td>
                <td className="px-4 py-2">{student.studentName}</td>
                <td className="px-4 py-2">{student.marks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
