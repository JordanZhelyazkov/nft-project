import styles from './Avatar.module.scss';
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
