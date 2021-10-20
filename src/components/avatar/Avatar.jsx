import styles from './Avatar.module.scss';
import classNames from 'classnames';
import VerifiedIcon from '@mui/icons-material/Verified';
import { useState, useEffect } from 'react';
import Badge from '@mui/material/Badge';


export default function Avatar({size = 90, url, verified = false}) {
// const [isVerified, setVerified] = useState('');

// useEffect(() => {
//     if(verified){
//         setVerified(<div><VerifiedIcon/></div>)
//     } 
// }, [isVerified])
// const isVerified = () => {
//     if(verified){
//         const ver = <VerifiedIcon/>
//         return ver;
//     } 
// }

return (
  <div className="avatar"  style={{width: size + 'px', height: size + 'px'}} > 
      <img className="image"  style={{width: "100%", justifyContent: 'center'}} src={url}></img>
      <div className='badge' hidden={!verified}>
          <Badge 
          color="secondary"
          variant="dot"
          badgeContent={1}
          className='badge'
        >
          <VerifiedIcon/>
        </Badge>
        </div>
  </div>
)
}
