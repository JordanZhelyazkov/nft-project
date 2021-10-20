import styles from './Avatar.module.scss';
import { Badge } from '@mui/icons-material';
import classNames from 'classnames';

import { useEffect, useState } from 'react';
export default function Avatar({url, size, verified}) {

const badge = '/images/verified.svg';
return (
  <div className="avatar"  width={size + 'px'} height={size + 'px'}>
      <img className="image" src={url}></img>
      <Badge className="badge" src={`${verified === true ? badge : ''}`}></Badge>
  </div>
)

}
