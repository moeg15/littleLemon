import './stlyes/card.css'
export default function Card({imgLink, name, description, price}){
  return(
    <>
      <div className="box">
        <div className="img-container"> 
          <img src={imgLink} alt="" />
        </div>
        <div className="row">
        <div className="col"><h5>{name}</h5></div>
        <div className="col"><h5>{price}</h5></div>
        </div>
        <div className="description">
        <p>{description}</p>

        </div>

      </div>
    
    
    
    </>

  )
}