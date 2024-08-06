import './stlyes/cards.css'
import Card from './Card'
export default function Cards(){
  return(
<>
<div className="row">
  <div className="col">
    <h1>this weeks specials!</h1>
    </div>
    <div className="col">
    <button>online menu</button>
    </div>
    </div>
    <div className='row'>
      <div className="col"><Card imgLink="../../salad.jpg" name="greek salad" price="12.99" description="The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons."/></div>
      <div className="col"><Card imgLink="../../bruschetta1.jpg" name="brushetta" price="5.99" description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil; made perfect for an evening dinner."/></div>
      <div className="col"><Card imgLink="../../lemon.jpg" name="lemon desert" price="5.00" description="This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined."/></div>
    </div>




</>



  )
}
//sald 
//brusheta
//crme
