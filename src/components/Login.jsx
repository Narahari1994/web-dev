import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

function Login() {
  const [userObj, setUserObj] = useState({ username: "", password: "" });
  const { setUser } = useContext(UserContext);

  const handleChange = (e) => {
    setUserObj({ ...userObj, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUser(userObj);
    setUserObj({ username: "", password: "" });
  };

  return (
    <div>
      <div>
        <h2>Login</h2>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={userObj.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={userObj.password}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
export default Login;
