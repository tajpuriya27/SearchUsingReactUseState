import "./styles.css";
import JSON from "./MOCK_DATA.json";
import { useState } from "react";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search First Name....."
        autoFocus
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {JSON.filter((val) => {
        if (searchTerm === "") {
          return val;
        } else if (
          val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return val;
        }
      }).map((element) => {
        return (
          <div key={element.id}>
            <p>
              {element.first_name} {element.last_name}
            </p>
          </div>
        );
      })}
    </div>
  );
}
