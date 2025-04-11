import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Teacher, Login, Attendance, Homework,Marks } from "./Components";

function App() {

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
          <Route path="/marks" element={<Marks/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
