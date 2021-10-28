import styles from './Avatar.module.scss';
<<<<<<< HEAD
// import Badge from '@mui/material/Badge';
import VerifiedIcon from '@mui/icons-material/Verified';





export default function Avatar({size = 90, url, verified = false}) {


return (
  <div className="avatar"  style={{width: size + 'px', height: size + 'px'}} > 
        <img className="image media"  style={{width: "100%", justifyContent: 'center'}} src={url} ></img>
        {verified && <img className='badge' src="../images/verified.svg"/>}
  </div>
)
}
// style={{display: `${verified ? 'block' : 'none'}`}}
// style={{display: `${verified ? 'block' : 'none'}`}}
//<img  src="/images/verified.svg" style={{display: `${verified ? 'block' : 'none'}`}}></img> 
=======
import { Badge } from '@mui/icons-material';
import classNames from 'classnames';
import { useState } from 'react';
export default function Avatar({size, url, verified}) {


return (
  <div className="avatar" width={size} height={size}>
      <img className="image" src={url}></img>
      <Badge className="badge" src={`${verified ? "/images/verified.svg" : ""}`} ></Badge>
  </div>
)

}
>>>>>>> 08e19c9d9208a2a05f94782736aac3eccb7ea601
