import React, { useState } from "react";

function Index() {
  const [num, updateData] = useState(100);

  return (
    <>
      <h1>{num}</h1>
      <button
        onClick={() => {
          updateData(200);
        }}
      >
        click
      </button>
      <input
        type="text"
        onChange={(e) => {
          let temp = e.target.value;
          updateData(temp);
        }}
      />
    </>
  );
}
export default Index;
