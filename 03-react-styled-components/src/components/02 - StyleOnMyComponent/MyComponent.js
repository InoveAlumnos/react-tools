const BaseComponent = (props) => {
    return (
        <div className={props.className}>
            {props.children}
            <h1>Este es un componente propio estilizado con Styled Components</h1>
            <h3>Estilizando cualquier componente, Link de referencia: <a href="https://styled-components.com/docs/basics#installation">LINK </a></h3>
            <h3>CSS soportado, Link de referencia: <a href="https://styled-components.com/docs/api#supported-css">LINK </a></h3>
        </div>
    )
}

export default BaseComponent;