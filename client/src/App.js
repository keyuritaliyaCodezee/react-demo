import { lazy } from "react";
import './App.css';
const Main = lazy(() => import("./components/Nav"));

function App() {
  return (
    <Main />
  );
}

export default App;
