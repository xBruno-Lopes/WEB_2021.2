import React from "react"

function Hero (props){
    return(
        <h2>
            Hero Name: {props.name} <br/> Na arena: {props.arena} <br/> <img src = {props.img} alt = "Hero"/>
        </h2>

    )
}

export default Hero