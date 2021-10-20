import styles from './Avatar.module.scss';
import classNames from 'classnames';
import VerifiedIcon from '@mui/icons-material/Verified';
import { useState, useEffect } from 'react';


export default function Avatar({url, size = 90, verified = false}) {
const [isVerified, setVerified] = useState('');

useEffect(() => {
    if(verified){
        setVerified(<div><VerifiedIcon/></div>)
    } 
}, [isVerified])

return (
  <div className="avatar"  style={{width: size + 'px', height: size + 'px'}} > 
      <img className="image"  style={{width: "100%", justifyContent: 'center'}} src={url}></img>
      {isVerified} 
  </div>
)
}
