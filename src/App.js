import Nav from "./Components/Nav/Nav";
import Hello from "./Components/Hello/Hello";
import Counter from "./Components/Counter/Counter";
import Button from "./Components/Button/Button";
import MapForReal from "./Components/MapForReal/MapForReal";
import "./App.css";
import ClassState from "./Components/ClassState/ClassState";
import AjaxDemo from "./Components/AjaxDemo/AjaxDemo";

function App() {
  const numby = 1;
  const styles = {
    color: "red",
  };

  const names = ["Max", "Jay", "Chrissy"];

  return (
    <div style={styles} className="App">
      {/* <Nav num={numby} />
      <Button color="danger" text="Delete" />
      <Button color="success" text="Edit" />
      <Counter /> */
      /* <MapForReal names={names} /> */
      /* <ClassState /> */}
      <AjaxDemo />
    </div>
  );
}

export default App;
