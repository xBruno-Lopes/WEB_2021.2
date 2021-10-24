import React from 'react'

function Arena(props){
    return(
        <>
        {
        React.Children.map(props.children, personagem => {return React.cloneElement(personagem, { ...props });})
        }
        </>
    )
}

export default Arena