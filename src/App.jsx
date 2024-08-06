import Header from "./componets/Header"
import Main from "./componets/Main"
import Footer from "./componets/Footer"
import Cards from "./componets/Cards"
import {Routes, Route} from 'react-router-dom'
function App() {


  return (
    <>
    <Routes>
      <Route element={ <><Header/> <Main/> <Cards/> <Footer/> </> } path="/" />
   

    </Routes>
     
    </>
  )
}

export default App
