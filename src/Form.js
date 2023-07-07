import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [dept, setDept] = useState("");
  const [college, setCollege] = useState("");
  const [students, setStudents] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const student = { name, age, dept, college };
    console.log(student);
    setStudents([...students, student]);
    setName("");
    setAge("");
    setDept("");
    setCollege("");
  };
  return (
    <div>
      <h1>Student Record Form </h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Age:
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Dept:
          <input
            type="text"
            value={dept}
            onChange={(e) => setDept(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          College:
          <input
            type="text"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
          />
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th style={{ padding: "10px" }}>Name</th>
            <th style={{ padding: "10px" }}>Age</th>
            <th style={{ padding: "10px" }}>Department</th>
            <th style={{ padding: "10px" }}>College</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => {
            return (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.dept}</td>
                <td>{student.college}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Form;
