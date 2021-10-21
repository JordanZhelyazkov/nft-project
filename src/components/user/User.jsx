import Avatar from "../avatar/Avatar";
import styles from"./User.module.scss";

export default function User({name="", info="", avatar='', size=55, verified=false}){
return (
<div className="user">
<Avatar url={avatar}/>
<p className="name">{name}</p>
<p className="info">{info}</p>
</div>
)
}