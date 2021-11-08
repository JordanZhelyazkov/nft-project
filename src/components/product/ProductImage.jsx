import "./ProductImage.module.scss";


export default function ProductImage({url}){

    return (
      <p className='product-image'>
          <img className='image'  src={url}/>
          </p>
      
    )
}