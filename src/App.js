import "./App.css";
import NavBar from "./component/NavBar";
import React, { useState, useEffect } from "react";
function App() {
  const [State, setState] = useState(2 );
  const [data, setData] = useState([]);
  function incre() {
    setState(State + 1);
  }
  function decre() {
    setState(State - 1);
  }
  useEffect(() => {
    // window.alert("useEffect called");
     async function getData(){
      const get = await fetch('https://reqres.in/api/users?page=${State}');
     const res=await get.json();
     setData(res);
     console.log(res);
    }
    getData();

  }, [State]);
  //array passed shows no dependencies
  return (
    <div className="App">
      <NavBar />
      <div className="container" style={{display:"flex-column",justifyContent:"center",padding:"10%"}}>
        <h1>{State}</h1>
        <button onClick={incre}> Increment </button>
        <button onClick={decre}> Decrement </button>
        {
          // data.map((e,ind)=>{
          //   return(
          //     <div>
          //       <h4>{e.first_name}</h4>
          //       <h4>{}</h4>
          //     </div>
          //   )
          // })
        }
      </div>
    </div>
  );
}

export default App;
