import React from 'react'

function Present() {
  return (
   <>
   <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Present</option>
            <option>Absent</option>
            <option>Leave</option>
          </select>
   </>
  )
}

export default Present
