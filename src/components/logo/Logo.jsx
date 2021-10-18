import { useEffect, useState } from "react";

export default function Logo({type}) {
   const defaultLogo = "../images/logo.svg";
   const mutedLogo = "../images/logo-muted.svg";
   const [isMuted, setImg] = useState('');
   useEffect(() => {
    if(type === 'muted'){
      setImg(mutedLogo);
    } else {
        setImg(defaultLogo);
    }
   }, [isMuted])

    return (
        <img defaultValue={mutedLogo} src={isMuted}></img>
    )
}
