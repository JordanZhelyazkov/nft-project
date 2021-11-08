import styles from "./ProductImage.module.scss";

export default function ProductImage({url}){

    return (
      <div>
          <div className="product-image">
          <img className="image" src={url}/>
          </div>
      </div>
    )
}