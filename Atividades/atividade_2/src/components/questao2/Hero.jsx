import React from "react"

function Hero (props){
    return(
        <h2>
            Hero Name: {props.name} <br/> <img src = {props.img} alt = "Hero"/>
        </h2>

    )
}

export default Hero