import styles from "./ProductImage.module.scss";


export default function ProductImage({url}){

    return (
      <div className="product-image" style={styles.product-image}>
          <img className="image" style={styles.image} src={url}/>
      </div>
    )
}