import "./ProductImage.module.scss";


export default function ProductImage({url}){

    return (
      <div>
          <img className="image" src={url}/>
          </div>
      
    )
}