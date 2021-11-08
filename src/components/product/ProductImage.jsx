import styles from "./ProductImage.module.scss";


export default function ProductImage({url}){

    return (
      <div>
          <div style={styles.product-image}>
          <img style={styles.image} src={url}/>
          </div>
      </div>
    )
}