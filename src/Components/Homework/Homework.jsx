import React from "react";
import Button from "../button";
import Input from "../input";

function Homework() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-md w-full max-w-2xl p-6 md:p-10">
        <div className="mb-6">
          <img
            src="https://media.istockphoto.com/id/487583768/vector/cartoon-little-kid-reading-book.jpg?s=612x612&w=0&k=20&c=xo928M8NshfIWcTnD5Ywva7FuCGpsLDESyY51QOyIrA="
            alt="students"
            className="w-full h-full object-cover"
          />
        </div>

        <form action="" className="space-y-4">
          <Input
            label="Class"
            type="text"
            name="class"
            placeholder="Enter Class"
          />
          <Input
            label="Subject"
            type="text"
            name="subject"
            placeholder="Enter Subject Name"
          />
          <Input
            label="Homework"
            type="text"
            name="homework"
            placeholder="Enter Homework"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button type="button" className="w-full">
              Gallery
            </Button>
            <Button type="button" className="w-full">
              Take Photos
            </Button>
          </div>

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Homework;
