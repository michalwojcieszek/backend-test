import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
// import userTemplate from "./userTemplate";

// import "./App.css";
export default function App() {
  const [selectData, setSelectData] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [message, setMessage] = useState("");

  useEffect(function () {
    let processing = true;
    axiosFetchData(processing);
    return function () {
      return (processing = false);
    };
  }, []);

  async function axiosFetchData(processing) {
    try {
      if (processing) {
      }
      const res = await axios.get("http://localhost:4000/users");
      setSelectData(res.data);
      console.log(res.data);
    } catch (error) {
      console.error("error fetching data", error);
    }
  }

  async function axiosPostData() {
    const postData = { name: nameInput, password: passwordInput };
    const res = await axios.post("http://localhost:4000/users", postData);
    setMessage(<h2>{res.data}</h2>);
    return res.data;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await axiosPostData();
  }

  return (
    <div>
      <h1>test</h1>
      <ul>
        {selectData?.map((el) => (
          <li key={el.name}>
            <p>{el.name}</p>
            <p>{el.password}</p>
          </li>
        ))}
      </ul>
      <input value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
      <input
        value={passwordInput}
        onChange={(e) => setPasswordInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Send</button>
      {message}
    </div>
  );
}
