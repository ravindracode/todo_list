import react, { useState } from "react";
const Index = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      firstName,
      email,
      password,
    };
    console.log(userData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-content">
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={firstName}
            placeholder="enter you are name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-content">
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder="enter you are email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-content">
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            placeholder="eneter you are password"
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>

        <button type="submit">submit</button>
      </form>
    </div>
  );
};
export default Index;
