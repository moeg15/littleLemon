import BookingForm from "./BokkingForm"
export default function BookingPage({passdown = []}){
  console.log(passdown, "passdown")
  return(
    <>
    
    <BookingForm availableTimes={passdown }/>
    </>

  )
}