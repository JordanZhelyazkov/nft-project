import { useEffect, useState } from "react";

export default function Logo({type = "default"}) {
   const defaultLogo = "../images/logo.svg";
   const mutedLogo = "../images/logo-muted.svg";
   const [isMuted, setImg] = useState(defaultLogo);
useEffect(() => {
 if(type === 'muted'){
   setImg(mutedLogo);
 } else if (type === 'default'){
     setImg(defaultLogo);
 }
}, [isMuted])
  

    return (
        <img  src={isMuted}></img>
    )
}
