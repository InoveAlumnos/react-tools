import { Button } from "./PropsButton.style";


const PropsButton = () => {
    return (
        <div>
            <Button bgColor="cornflowerblue">Botón coloreado por props</Button>
            <Button >Botón con color por defecto</Button>
        </div>
    );
}

export default PropsButton;