import React from 'react'

const NotFound = ()=>(
    <React.Fragment>

    <div>No encontrada</div>
    </React.Fragment>
//la ventaja de usar Fragment es que no agrega otro elemento al dom
//lo que hace que si no necesitamos un contenedor para darle estilos o algo similar,optimicemos nuestra aplicacion
    //
    //<> Esto es lo mismo que arriba
    //    <div>No encontrado</div>
    //</>
)

export default NotFound
