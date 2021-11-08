import styles from "./ProductImage.module.scss";

export default function ProductImage({url}){

    return (
      <div>
          <div className={classNames(styles.product-image)}>
          <img className={classNames(styles.image)} src={url}/>
          </div>
      </div>
    )
}