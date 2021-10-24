import React from "react"

function Enemy (props){
    return(
        <h2>
            Enemy Name: {props.name} <br/> <img src = {props.img} alt = "Enemy"/>
        </h2>

    )
}

export default Enemy