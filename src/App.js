import { useEffect } from "react";
import "./App.css";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import Widget from "./components/Widget";

function App() {
  useEffect(() => {
    document.title = "Welcome to Social Geek";
  }, []);
  return (
    <div className="app">
      <Sidebar></Sidebar>
      <Feed></Feed>
      <Widget></Widget>
    </div>
  );
}

export default App;
