import Footer from "../components/Footer"
import UserNavBar from "../components/UserNavBar"


const PagesLayoutUser = ({children}) => {
  return (
    <div>
      <UserNavBar/>
      {children}
      <Footer/>
    </div>
  )
}

export default PagesLayoutUser