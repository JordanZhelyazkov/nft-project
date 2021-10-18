import { useEffect, useState } from "react";

const Logo = (prop) => {
   const defaultLogo = "./images/logo.svg";
   const mutedLogo = "./images/logo-muted.svg";
   const [isMuted, setImg] = useState('');
   useEffect(() => {
    if(prop.type === 'muted'){
      setImg(mutedLogo);
    } else {
        setImg(defaultLogo);
    }
   }, [isMuted])

    return (
        <img defaultValue={mutedLogo} src={isMuted}></img>
    )
}
export default Logo