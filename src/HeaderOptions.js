import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

function HeaderOptions() {
    return (
        <div className="flex-col hidden sm:hidden md:inline-flex lg:inline-flex">
            <div className="flex text-base h-7 mt-3 pl-5 mr-5 space-x-12 justify-between items-center ">
                <div className="flex cursor-pointer items-center space-x-4 w-96 whitespace-nowrap">

                    <p>Language<ExpandMoreIcon /></p>
                    <p>Sign Up for Email</p>
                    <p>Careers</p>
                </div>
                <div className="flex space-x-3 cursor-pointer whitespace-nowrap">
                    <p><SearchOutlinedIcon />Search</p>
                    <p><LocationOnIcon className="text-red-600"/> Change your location</p>
                </div>

            </div>

            <div className="flex justify-center mt-9 mx-5 whitespace-nowrap cursor-pointer items-center space-x-8 text-lg">

                <p>Our Menu<ExpandMoreIcon /></p>
                <p>McCafé</p>
                <p>About Our Food</p>
                <p>Exclusive Deals</p>
                <p>Download App</p>
                <p>Locate</p>
            </div>
        </div>


    )
}

export default HeaderOptions
