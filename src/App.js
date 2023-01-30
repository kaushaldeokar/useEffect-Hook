import "./App.css";
import NavBar from "./component/NavBar";
import React, { useState, useEffect } from "react";

function App() {
  const [state, setState] = useState(1);
  const [data, setData] = useState([]);
  function incre() {
    if (state + 1 <= 2) setState(state + 1);
  }

  function decre() {
    if (state > 1) setState(state - 1);
  }



  async function getData() {
    const get = await fetch("https://reqres.in/api/users?page=" + state);
    const res = await get.json();
    console.log(res.data);
    setData(res.data);
    //  console.log(res);
  }


  

  useEffect(() => {
    // window.alert("useEffect called");
    getData();
  }, [state]);


  //array passed shows no dependencies
  return (
    <div className="App">
      <NavBar />
      <div
        className="container"
        style={{
          display: "flex-column",
          justifyContent: "center",
          padding: "10%",
        }}
      >
        <h1>{state}</h1>
        <button onClick={incre}> page up</button>
        <button onClick={decre}> page down </button>
        {data.map((e, ind) => {
          return (
            <div key={ind}>
              <h4>
                {e.first_name} {e.last_name} - {e.email}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
