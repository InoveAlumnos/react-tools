import "./App.css";
// Importamos el componente deseado:
import Button from "@mui/material/Button";
import { TextField, Paper, Box } from "@mui/material";
import MediaCard from "./components/00 - card";
import OutlinedCard from "./components/01 - card";
import Variants from "./components/02 - skeleton";
import BasicGrid from "./components/03 - grids";
import GridSkeleton from "./components/04 - skeletonGrids";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* 00 - Ejemplo de importación de componente: */}
        {/* <Button variant="contained">Soy un material-ui button</Button> */}

        {/* 01 - Ejemplos de uso de componentes: */}
        {/* <OutlinedCard></OutlinedCard> */}
        {/* <MediaCard></MediaCard> */}
        {/* <Variants></Variants> */}
        {/* <BasicGrid></BasicGrid> */}
        {/* <GridSkeleton/> */}
        {/* <Button 
        variant="contained" 
        sx={{background:"orange"}}
        onClick={()=>alert("Bingo!")}
        >Soy un material-ui button
        </Button> */}
      </header>
    </div>
  );
}

export default App;
