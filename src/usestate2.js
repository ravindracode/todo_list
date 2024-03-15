import react, { useState } from "react";
function Usesate2() {
  const intialObj = {
    firstName: "emma",
    lastName: "watson",
  };
  const [data, setData] = useState(intialObj);
  const changeFirst = () => {
    setData({
      ...data,
      firstName: "ravindra",
    });
  };
  const changeLast = () => {
    setData({
      ...data,
      lastName: "sai",
    });
  };

  return (
    <div>
      <h1>MyName is {data.firstName}</h1>
      <button onClick={changeFirst}>changename</button>
      <h1>MylastName is {data.lastName}</h1>
      <button onClick={changeLast}> lastchange</button>
    </div>
  );
}
export default Usesate2;
