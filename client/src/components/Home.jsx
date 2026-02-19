import { useState, useEffect } from "react";
import "../App.css";
// import axios from "axios";

function Home() {
  // useState needs to have structure for first render
  const [fetchedData, setFetchedData] = useState({ title: "", messages: [] });

  useEffect(() => {
    async function fetchAPI() {
      // fetch
      const response = await fetch("http://localhost:8080/api");
      const data = await response.json();
      console.log(data);
      setFetchedData(data);

      // axios
      // const response = await axios.get("http://localhost:8080/api");
      // console.log(response.data);
      // setFetchedData(response.data);
    }
    fetchAPI();
  }, []);

  return (
    <>
      <div>
        <h3>{fetchedData.title}</h3>
        {fetchedData.messages.map((message, idx) => (
          <div key={idx}>
            <div>{message.text}</div>
            <div>{message.user}</div>
            <div>{message.added}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
