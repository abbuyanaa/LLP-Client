import React, { useState } from "react";
import Axios from "axios";

const ForeignCreate = () => {
  const [aimag, setAimag] = useState([]);

  const getAimags = () => {
    Axios.get("http://localhost:8000/api/v1/aimags", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        setAimag(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <input type="text" placeholder="Korean" />
      <select name="">
        {aimag.map((val, key) => {
          return (
            <option value={val.a_id}>
              {val.name_foreign} - {val.name_native}
            </option>
          );
        })}
      </select>
      <input type="text" placeholder="Hi" />
      <button onClick={getAimags}>Get Aimag</button>
      <button onClick={getAimags}>Get Aimag</button>
    </div>
  );
};

export default ForeignCreate;
