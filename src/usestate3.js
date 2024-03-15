import react, { useState } from "react";
const Index = () => {
  const intialarray = [
    {
      id: 1,
      firstNmae: "ravindra",
      lastName: "sai",
      age: 20,
    },
    {
      id: 2,
      firstNmae: "ravindra",
      lastName: "sai",
      age: 20,
    },
    {
      id: 3,
      firstNmae: "ravindra",
      lastName: "sai",
      age: 20,
    },
  ];
  const [data, setData] = useState(intialarray);
  console.log(data);
  const handleDelete = (commingid) => {
    const filterdata = data.filter((eachitem) => {
      return eachitem.id !== commingid;
    });
    setData(filterdata);
  };

  return (
    <div>
      <ul>
        {data.map((eachitem, index) => {
          const { firstNmae, lastName, age, id } = eachitem;
          return (
            <li key={index}>
              <div>firstNmae:{firstNmae}</div>
              <div>lastName:{lastName}</div>
              <div>age:{age}</div>
              <button onClick={() => handleDelete(id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Index;
