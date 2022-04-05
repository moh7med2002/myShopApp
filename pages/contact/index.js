import MapContact from '../../components/Contact/Map'
import LandShop from '../../components/Shop/landingShop'
import EmailContact from '../../components/Home/EmailsContact'
import { useState , useEffect} from 'react'
import ContactForm from '../../components/Contact/ContactForm'
import {people} from '../../data/peoples'
export default function Contact(){
    let[peoples,setPeoples]=useState([])
    let[loadPeoples,setLoad]=useState(false)

    useEffect(()=>{
        function getPeoples(){
            setPeoples(people);
            setLoad(true)
        }
        getPeoples()
    })
    return(
        <div className="pt-[70.4px]">
            <LandShop clas={'landAbout'} title={'#let\'s_talk'} description={'LEAVE A MESSAGE, We love to hear from you!'}/>
            <MapContact/>
            <EmailContact/>
            {loadPeoples && <ContactForm peoples={peoples}/>}
            <EmailContact/>
        </div>
    )
}