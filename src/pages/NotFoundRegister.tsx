import Navbar from "../components/Navbar"
import RegistrationFormCard from "../components/RegistrationFormCard"
import SearchCard from "../components/SearchCard"
import VehicleDetailsCard from "../components/VehicleDetailsCard"

const NotFoundRegister = () => {
  return (
    <>
      <Navbar></Navbar>
      <SearchCard></SearchCard>
      <div className='recovery-body'>
        <VehicleDetailsCard />
        <RegistrationFormCard/>
      </div>
    </>
  )
}

export default NotFoundRegister