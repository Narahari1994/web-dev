import Login from "./components/Login";
import Profile from "./components/Profile";
import UserProvider from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <h1>react with chai</h1>
      <Login />
      <Profile />
    </UserProvider>
  );
}

export default App;
