import React from "react";
import {get_memes} from "../api";
import Meme from "./Meme";
import {Link} from "react-router-dom";

export default function AllMemes()
{
    const [memes,setMemes]=React.useState(null);
  React.useEffect(()=>{
    async function memes(){
    const result=await get_memes();
    setMemes(result.data.memes);
    }
    memes();

  },[]);
  if(memes==null)
{
  return(<h1>LOADING........</h1>)
}
return(

<div className="container">
{memes.map((data,index)=>{

  return(
  <Link to={"/"+(index+1)} style={{textDecoration:"none",color:"black"}} key={index}>
  <Meme key={index}  url={data.url} id={index+1}/>
  </Link>

  )
})
  }
</div>
);

}