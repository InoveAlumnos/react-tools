import "./App.css";
// Importamos el CSS de bootstrap:
import "bootstrap/dist/css/bootstrap.min.css";
// Importamos los componentes de bootstrap:
import { Button } from "react-bootstrap";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import AccordionExample from "./components/00 - Accordion";
import CarouselExample from "./components/01 - Carousels";
import ModalExample from "./components/02 - Modal"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/*00 - Ejemplo de importación de componente */}
      {/* <Button>👮‍♂️ Soy un botón!</Button> */}
      {/* <Button style={{background:"#038A64"}}>Estilo personalizado</Button> */}
      {/* <Button onClick={()=>console.log("mensaje")}>¡Y también hago cosas!</Button> */}
      
      {/*01 - Ejemplo de importación de componentes desde la documentación: */}
      {/* <AccordionExample></AccordionExample> */}
      {/* <CarouselExample></CarouselExample> */}
      {/* <ModalExample></ModalExample> */}

      {/*02 - Ejemplo de armado de estructura: */}
      {/* <Page1></Page1> */}
      {/* <Page2></Page2> */}
      
      </header>
    </div>
  );
}

export default App;
