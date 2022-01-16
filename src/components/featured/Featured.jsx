import styles from "./Featured.module.scss";
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useRouter } from 'next/router';
import classNames from "classnames";

export default function Featured({items = []}){
    const router = useRouter();

    
    return(

     <div className={classNames(styles.container)}>
         <ImageList  rows={2} cols={6}>
             {items.map((item, index) => (
                 <ImageListItem key={index} cols={item.cols || 1} rows={item.rows || 1} >
                     <img
                     onClick={() => router.push(item.href)}
                     src={item.image}
                     alt={item.title}
                     >
                         </img>
                     </ImageListItem>
             ))}
             </ImageList>
             </div>
    )
}