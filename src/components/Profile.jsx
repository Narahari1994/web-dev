/* eslint-disable react/prop-types */
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user)
    return (
      <div>
        <h1>Please login</h1>
      </div>
    );

  return (
    <div>
      <h2>Welcome {user.username}, to profile page</h2>
      <h3>Your password is {user.password}</h3>
    </div>
  );
}
export default Profile;
