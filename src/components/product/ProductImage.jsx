import "./ProductImage.module.scss";


export default function ProductImage({url}){

    return (
      <div >
          <img   src={url}/>
          </div>
      
    )
}