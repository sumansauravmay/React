import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import AllRoute from "./Routes/AllRoute";

function App() {
  return (
    <Container>
      <Navbar />
      <AllRoute />
    </Container>
  );
}

export default App;
