import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Teacher, Login, Attendance, Homework } from "./Components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/home-work" element={<Homework />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
