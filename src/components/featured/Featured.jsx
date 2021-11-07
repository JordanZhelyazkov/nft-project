import styles from "./Featured.module.scss";
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';

export default function Featured({items = []}){

    
    return(
     <Container>
         <ImageList sx={{ width: 500, height: 450 }} rows={2} rowHeight={164}>
             {items.map((item) => (
                 <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                     <img
                     src={item.image}
                     alt={item.title}
                     >
                         <a href={item.href}></a>
                         </img>
                     </ImageListItem>
             ))}
             </ImageList>
     </Container>
    )
}