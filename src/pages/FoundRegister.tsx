import React from 'react'
import Navbar from '../components/Navbar'
import SearchCard from '../components/SearchCard'
import VehicleDetailsCard from '../components/VehicleDetailsCard'
import PreviousCaseCard from '../components/PreviousCaseCard'
import Form from '../components/Form'

const FoundRegister = () => {
    return (
        <>
            <Navbar />
            <SearchCard />
            <div className='recovery-body'>
                <VehicleDetailsCard/>
                <Form/>
                <PreviousCaseCard/>
            </div>
        </>
    )
}

export default FoundRegister