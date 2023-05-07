import React, { useState, useEffect } from 'react'
import Admin from '@/layouts/Admin'
import SelectionBox from '@/components/form/selectionBox'
import TextFormField from '@/components/form/textFormField'
import StudentTable from '@/components/table/studentTable'

import { db } from '@/src/config/firebase.config';
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  limit
} from "firebase/firestore";
import Link from 'next/link';

const RegisteredStudents = () => {
  const [students, setStudents] = useState([])
  const [filtered, setFiltered] = useState([])

  // mandatory filters
  const [grade, setGrade] = useState('11')
  const [session, setSession] = useState('2021-2022')

  // optional filters
  const [gender, setGender] = useState('Any')
  const [max, setMax] = useState(300)
  const [min, setMin] = useState(1)
  const [roll, setRoll] = useState('')
  const [skill, setSkill] = useState('Any')

  useEffect(() => {
    const docRef = collection(db, "students");
    let queryParam = query(docRef, where("class", "==", grade), where("session", "==", session))
    if (roll != '') {
      queryParam = query(docRef, where("class", "==", grade), where("session", "==", session), where("roll", "==", roll))
    } else if (gender != 'Any') {
      queryParam = query(docRef, where("class", "==", grade), where("session", "==", session), where("gender", "==", gender))
    }
    if (skill != 'Any'){
      queryParam = query(docRef, where("class", "==", grade), where("session", "==", session), where("skills", "array-contains", skill))
    }
    getDocs(queryParam).then((snapshots) => {
      setStudents(snapshots.docs)
      setFiltered(snapshots.docs)
    })

  }, [grade, session, roll, gender, skill])

  const handleChange = (e) => {
    if (e.target.name == 'class') {
      setGrade(e.target.value)
    }
    else if (e.target.name == 'roll') {
      setRoll(e.target.value)
      setGender('Any')
    }
    else if (e.target.name == 'session') {
      setSession(e.target.value)
    }
    else if (e.target.name == 'gender') {
      setGender(e.target.value)
    }
    else if (e.target.name == 'min') {
      setMin(e.target.value)
    }
    else if (e.target.name == 'max') {
      setMax(e.target.value)
    }
    else if (e.target.name == 'skill') {
      setSkill(e.target.value)
    }
  }

  const filterSection = () => {
    const filteredResults = students.filter(s => parseInt(s.data().roll) <= max && parseInt(s.data().roll) >= min)
    setFiltered(filteredResults)
  }

  return (
    <div>
      <h1 className="font-bold text-5xl text-center m-3 p-1">All Registered Students</h1>
      <div className='container mx-auto w-full lg:w-2/3 rounded-md bg-gray-800 p-3 border-2 border-gray-600'>
        <div className="dropdown">
          <input tabIndex={0} type="text" placeholder="Search here by name..." className="input input-bordered w-full max-w-xs" />
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
        </div>
        <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3 my-5'>
          <SelectionBox
            label="Class"
            name="class"
            options={['11', '12']}
            handleChange={handleChange}
            value={grade}
          />
          <SelectionBox
            label="Gender"
            name="gender"
            options={['Any', 'Male', 'Female', 'Other']}
            handleChange={handleChange}
            value={gender}
          />
          <TextFormField
            label="Roll (min)"
            placeholder="starting roll"
            name="min"
            handleChange={handleChange}
            value={min}
          />
          <TextFormField
            label="Roll (max)"
            placeholder="ending roll"
            name="max"
            handleChange={handleChange}
            value={max}
          />
          <TextFormField
            label="Roll"
            placeholder="Roll"
            name="roll"
            handleChange={handleChange}
            value={roll}
          />
          <SelectionBox
            label="Session"
            name="session"
            options={['2019-2020', '2020-2021', '2021-2022', '2022-2023', '2023-2024']}
            handleChange={handleChange}
            value={session}
          />
          <SelectionBox
            label="Skills"
            name="skill"
            options={["Any", "Critical thinking", "Time management", "Effective communication", "Problem-solving", "Leadership", "Collaboration", "Information literacy", "Digital literacy", "Financial literacy", "Public speaking", "Teamwork", "Research", "Writing", "Study skills", "Coding", "Athleticism", "Team sports", "Individual sports", "Yoga", "Dance", "Mathematics", "Science", "History", "Foreign language proficiency", "Debate", "Persuasion", "Negotiation", "Diplomacy"]}
            handleChange={handleChange}
            value={skill}
          />
        </div>
        <button className="btn btn-info" onClick={filterSection}>Apply Filter</button>
      </div>
      <StudentTable array={filtered} />
    </div>
  )
}

export default RegisteredStudents
RegisteredStudents.layout = Admin