import styles from './Avatar.module.scss';
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