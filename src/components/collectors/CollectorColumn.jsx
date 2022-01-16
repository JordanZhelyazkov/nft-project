import Collector from "./Collector";


export default function CollectorColumn({items}){

    const mapItems = items.map((item, index) => <Collector key={index} name={item.name} 
    nftsCount={item.nftsCount} 
    avatar={item.count}
    verified={item.verified}
    id={index}
    type={index % 2 === 0 ? "light" : ""}/>)
    return(
    <div>
        {mapItems}
    </div>
    )
}