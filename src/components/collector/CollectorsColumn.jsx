import Collector from "./Collector";


export default function CollectorsColumn({items}){

    const mapItems = items.map((item, index) => <Collector name={item.name} 
    nftsCount={item.nftsCount} 
    avatar={item.count}
    verified={item.verified}
    id={index}/>)
    return(
    <div>
        {mapItems}
    </div>
    )
}