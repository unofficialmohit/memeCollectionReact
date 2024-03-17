import React from "react";
function Meme(props){
    return(
        <div className="meme-container">
            <div>
                <img className="meme-pic" src={props.url}></img>
            </div>
            <div className="meme-number">
                <div>MEME NUMBER {props.id}</div>
            </div>
        </div>
    );
}
export default Meme;