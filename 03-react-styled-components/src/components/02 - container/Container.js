import { Wrapper, CardContainer, Card } from "./Container.style";
const Container = () => {
    return (
        <Wrapper>
            <h1>Hola, esta es un envoltorio, dentro encontraras:</h1>
            <CardContainer>
                <h2>Un contenedor de tarjetas</h2>
                <Card>✨ Una tarjeta</Card>
                <Card>✨ Otra tarjeta</Card>
            </CardContainer>
        </Wrapper>
    )
}
export default Container;