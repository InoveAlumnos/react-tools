import { Button } from "./Button.style";


const MyButton = () => {
    return (
        <div>
            <Button>Botón normal</Button>
            <Button as="a" href="#">Botón con link</Button>
        </div>
    );
}

export default MyButton;