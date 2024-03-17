import React from "react";
import { get_memes } from "../api";
import { useParams ,Link} from "react-router-dom";
export default function CurrentMeme(){
    const [meme,setMeme]=React.useState({});
    const params=useParams();
    React.useEffect(()=>{
        async function displayMeme(){
            const result=await get_memes();
            setMeme(result.data.memes[params.id-1]);
        }

        displayMeme();
    },[])
    return(
        <div>

            <Link to=".." style={{textDecoration:"none",color:"white", backgroundColor:"black",borderRadius:"10px",padding:"10px",margin:"10px"}}>GO BACK</Link>
        <div className="current">
            <div className="current-number">{"Meme Number "+params.id}</div>
            <img src={meme.url} className="current-image"/>
            <div className="current-name">{meme.name}</div>
        </div>
        </div>
    )
}
