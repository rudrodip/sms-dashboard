import React from 'react'
import Link from 'next/link'

const StudentTable = ({ array }) => {
  const fields = ["Name", "Class", "Roll", "Student ID", "See Profile"]
  return (
    <section className='student-table my-10'>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              {fields.map(i => (<th key={i}>{i}</th>))}
            </tr>
          </thead>
          <tbody>
            {
              array.map(s => {
                let studentData = s.data()
                return (
                  <tr key={s}>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="font-bold">{studentData.name}</div>
                    </td>
                    <td>
                      12
                    </td>
                    <td>{studentData.roll}</td>
                    <td>{studentData.studentID}</td>
                    <th>
                      <Link className="btn btn-ghost btn-xs" href={`/student/${studentData.studentID}`}>details</Link>
                    </th>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default StudentTable