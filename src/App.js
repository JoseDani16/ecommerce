import ItemListContainer from "./components/ItemListContainer/index";
import Navbar from "./components/Navbar/index";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greetings="Bienvenido" />
    </>
  );
}

export default App;
