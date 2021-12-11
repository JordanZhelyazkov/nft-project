import Header from "../../src/components/header/Header";
import ProfileHero from "../../src/components/profile/ProfileHero";
import ProfileUser from "../../src/components/profile/ProfileUser";
import ProfileCollection from "../../src/components/profile/ProfileCollection";
import Footer from "../../src/components/footer/Footer";
import profilesData from "../../public/data/profile.json";



export default function Profile(){

    

    return (
        <div>
         <Header />
         <ProfileHero image={profilesData.avatar.backgroundUrl}/>
         <ProfileUser name={profilesData.username} info={profilesData.info} avatar={profilesData.avatar} verified={profilesData.verified}/>
         <ProfileCollection   items={profilesData.nfts}/>
         <Footer />
        </div>
    )
}