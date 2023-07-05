import React, { useState } from "react";
import styles from "./StudentData.module.css";

function StudentData() {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    name: "",
    age: "",
    grade: "",
    address: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData((prevData) => [...prevData, form]);
    setForm({
      name: "",
      age: "",
      grade: "",
      address: "",
    });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleOnChange}
          />
        </label>
        <br />

        <label htmlFor="age">
          Age:
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={handleOnChange}
          />
        </label>
        <br />

        <label htmlFor="grade">
          Grade:
          <input
            type="number"
            name="grade"
            value={form.grade}
            onChange={handleOnChange}
          />
        </label>
        <br />

        <label htmlFor="address">
          Address:
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleOnChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Grade</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>{data.grade}</td>
              <td>{data.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentData;
