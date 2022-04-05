import  LandShop from '../../components/Shop/landingShop'
import EmailContact from '../../components/Home/EmailsContact'
import CartProducts from '../../components/Cart/CartProduct'
export default function Cart(){
    return(
        <div className="pt-[70.4px]">
            <LandShop clas={'landAbout'} title={'#cart'} description={'Add your cupon code & SAVE upto 70%!'}/>
            <CartProducts/>
            <EmailContact/>
        </div>
    )
}