import "./App.css";
import AppLayout from "./layout";
import AuthLayout from "./authLayout";
import { useSelector } from "react-redux";

function App() {
  const { currentUser } = useSelector((state) => ({
    currentUser: state.global.currentUser,
  }));
  console.log(currentUser);
  return (
    <div className="App">{currentUser ? <AppLayout /> : <AuthLayout />}</div>
  );
}

export default App;
