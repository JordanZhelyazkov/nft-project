import styles from './Avatar.module.scss';
import classNames from 'classnames';

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
    
        <Badge className='badge'>
        <img className="image"  style={{width: "100%", justifyContent: 'center'}} src={url}></img>
        <img  src="/images/verified.svg" style={{display: `${verified ? 'block' : 'none'}`}}></img>
        </Badge>
  </div>
)
}
// style={{display: `${verified ? 'block' : 'none'}`}}