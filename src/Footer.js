import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Dropdown from 'react-dropdown';
import { motion } from "framer-motion"
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Footer() {
    const [AboutUsState, setAboutUsState] = useState(false);
    const [CareersState, setCareersState] = useState(false);
    const [ServicesState, setServicesState] = useState(false);
    const [CommunityState, setCommunityState] = useState(false);
    const [ContactUsState, setContactUsState] = useState(false);


    const AboutUsOptions = [
        'Our History',
        'Leadership Team',
        'Values In Action',
        'Investor Relations',
        'News & Notifications',
        'Franchise Info',
        'Recalls & Alerts',
        'Real Estate',
        'Digital Accessibility'
    ]

    const CareersOptions = [
        'Careers Page',
        'Education Opportunities',
        'Employee Perks',
        'Meet Our People: Staff & Management',
        'Working with Us',
        'Apply Now'
    ]

    const ServicesOptions = [
        'Services Page',
        'Wi-Fi',
        'Arch Card®',
        'PlayPlaces & Parties',
        'McDelivery®',
        'Mobile Order & Pay',
        'Trending Now',
        'McDonald’s Merchandise',
        'Family Fun Hub'
    ]
    const CommunityOptions = [
        'Community Page',
        'HACER® Scholarships for Hispanic Students',
        'Ronald McDonald House Charities',
        'McDonald’s APA',
        'McDonald’s International',
        'Black & Positively Golden'
    ]
    const ContactUsOptions = [
        'Contact Us Page',
        'Arch Card',
        'Donations',
        'Employment',
        'Restaurant Feedback',
        'Frequently Asked Questions'
    ]

    return (
        <>
            <div className="font-medium text-lg text-gray-700 py-12 px-6 space-y-4 md:hidden">
                <div className="flex justify-between">
                    <div className="flex-col justify-between items-center">
                        <p>About Us</p>


                        {AboutUsState && (AboutUsOptions.map((option) => (

                            <motion.div animate={{ y: 10, stiffness: 2000, delay: 2000 }} className="flex-col">
                                <motion.div className="py-3 font-normal text-sm cursor-pointer ">
                                    {option}
                                </motion.div>
                            </motion.div>)
                        ))}


                    </div>
                    <div className="flex">
                        {AboutUsState ?
                            <RemoveIcon className="cursor-pointer" onClick={() =>
                                setAboutUsState(false)

                            } />
                            :
                            <AddIcon className="cursor-pointer" onClick={() => setAboutUsState(true)} />
                        }
                    </div>
                </div>


                <div className="flex justify-between">
                    <div className="flex-col justify-between items-center">
                        <p>Careers</p>


                        {CareersState && (CareersOptions.map((option) => (

                            <motion.div animate={{ y: 10, stiffness: 2000, delay: 2000 }} className="flex-col">
                                <motion.div className="py-3 font-normal text-sm cursor-pointer ">
                                    {option}
                                </motion.div>
                            </motion.div>)
                        ))}


                    </div>
                    <div className="flex">
                        {CareersState ?
                            <RemoveIcon className="cursor-pointer" onClick={() =>
                                setCareersState(false)

                            } />
                            :
                            <AddIcon className="cursor-pointer" onClick={() => setCareersState(true)} />
                        }
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex-col justify-between items-center">
                        <p>Services</p>


                        {ServicesState && (ServicesOptions.map((option) => (

                            <motion.div animate={{ y: 10, stiffness: 2000, delay: 2000 }} className="flex-col">
                                <motion.div className="py-3 font-normal text-sm cursor-pointer ">
                                    {option}
                                </motion.div>
                            </motion.div>)
                        ))}


                    </div>
                    <div className="flex">
                        {ServicesState ?
                            <RemoveIcon className="cursor-pointer" onClick={() =>
                                setServicesState(false)

                            } />
                            :
                            <AddIcon className="cursor-pointer" onClick={() => setServicesState(true)} />
                        }
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex-col justify-between items-center">
                        <p>Community</p>


                        {CommunityState && (CommunityOptions.map((option) => (

                            <motion.div animate={{ y: 10, stiffness: 2000, delay: 2000 }} className="flex-col">
                                <motion.div className="py-3 font-normal text-sm cursor-pointer ">
                                    {option}
                                </motion.div>
                            </motion.div>)
                        ))}


                    </div>
                    <div className="flex">
                        {CommunityState ?
                            <RemoveIcon className="cursor-pointer" onClick={() =>
                                setCommunityState(false)

                            } />
                            :
                            <AddIcon className="cursor-pointer" onClick={() => setCommunityState(true)} />
                        }
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex-col justify-between items-center">
                        <p>Contact Us</p>


                        {ContactUsState && (ContactUsOptions.map((option) => (

                            <motion.div animate={{ y: 10, stiffness: 2000, delay: 2000 }} className="flex-col">
                                <motion.div className="py-3 font-normal text-sm cursor-pointer ">
                                    {option}
                                </motion.div>
                            </motion.div>)
                        ))}


                    </div>
                    <div className="flex">
                        {ContactUsState ?
                            <RemoveIcon className="cursor-pointer" onClick={() =>
                                setContactUsState(false)

                            } />
                            :
                            <AddIcon className="cursor-pointer" onClick={() => setContactUsState(true)} />
                        }
                    </div>
                </div>
            </div>

            <div className="hidden ml-52 mr-44 justify-evenly py-32 md:inline-flex">
                <div className="mr-6 items-center justify-center">
                    <p className="cursor-pointer">About Us</p>
                    <div className="">
                        {AboutUsOptions.map((option) => (
                            <div className="">
                                <div className="mt-2">
                                    {option}
                                </div>

                            </div>
                        )
                        )}
                    </div>
                </div>
                <div className="w-56 ml-3 items-center justify-center">
                    <p className="cursor-pointer">Careers</p>
                    <div className="">
                        {CareersOptions.map((option) => (
                            <div className="">
                                <div className="mt-2">
                                    {option}
                                </div>

                            </div>
                        )
                        )}
                    </div>
                </div>
                <div className="w-56 ml-3 items-center justify-center">
                    <p className="cursor-pointer">Services</p>
                    <div className="">
                        {ServicesOptions.map((option) => (
                            <div className="">
                                <div className="mt-2">
                                    {option}
                                </div>

                            </div>
                        )
                        )}
                    </div>
                </div>

                <div className="w-56 ml-3 items-center justify-center">
                    <p className="cursor-pointer">Community</p>
                    <div className="">
                        {CommunityOptions.map((option) => (
                            <div className="">
                                <div className="mt-2">
                                    {option}
                                </div>

                            </div>
                        )
                        )}
                    </div>
                </div>
                <div className="w-56 ml-3 items-center justify-center">
                    <p className="cursor-pointer">Contact Us</p>
                    <div className="">
                        {ContactUsOptions.map((option) => (
                            <div className="">
                                <div className="mt-2">
                                    {option}
                                </div>

                            </div>
                        )
                        )}
                    </div>
                </div>

            </div>


            <div className="mb-10 md:flex md:items-center md:mb-10 md:justify-between md:ml-52 md:mr-56 md:space-x-52">
                <div className="flex mx-auto justify-center space-x-10 mb-10 md:mb-0 md:mx-0">
                    <TwitterIcon className="rounded-full bg-white h-10 cursor-pointer transition 
                duration-700 transform hover:scale-150  hover:text-blue-600" />
                    <InstagramIcon className="rounded-full h-10 cursor-pointer transition 
                duration-700 transform hover:scale-150 hover:text-pink-500" />
                    <FacebookIcon className="rounded-full h-10 cursor-pointer transition 
                duration-700 transform hover:scale-150 hover:text-blue-500" />
                    <YouTubeIcon className="rounded-full h-10 cursor-pointer transition 
                duration-700 transform hover:scale-150 hover:text-red-700" />

                </div>
                <div className="flex justify-center items-center">
                    <img src="https://www.mcdonalds.com/content/dam/usa/nfl/logo/app_store_badge.png" alt="download on app store" />
                    <img src="https://www.mcdonalds.com/content/dam/usa/nfl/logo/google_play_badge.png" alt="download from play store" />
                </div>

            </div>


            <hr className="text-gray-900 mr-52" />


            <div className="py-10 md:ml-52 md:mr-40 ">
                <div className="space-y-4 mb-10 text-xs md:hidden">

                    <div className="flex justify-center items-center mt-6 mb-6 md:mt-4 md:mb-0">
                        <p>Privacy(Updated)</p>
                    </div>

                    <div className="flex space-x-6 justify-center items-center md:space-x-5 ">
                        <p>Terms & Conditions</p>
                        <p>Accessibility</p>
                        <p>Do Not Sell My Personal Information</p>
                        <p>Cookie Settings</p>
                    </div>

                    <div className="flex justify-center items-center">
                        <img className="h-8" src="https://www.mcdonalds.com/content/dam/usa/nfl/assets/nav/arches-logo_108x108.jpg" alt="logo" />
                        <p> © 2017 - 2021 McDonald's. All Rights Reserved</p>
                    </div>
                </div>
            </div>

            <div className= "hidden md:inline-flex md:justify-center md:items-center md:ml-52 md:mr-48 md:mb-10 md:space-x-14 md:justify-between md:items-center">
                <div className="flex justify-between text-base flex-wrap">

                    <p className="cursor-pointer">Privacy(Updated)</p>
                    <p className="cursor-pointer">Terms & Conditions</p>
                    <p className="cursor-pointer">Accessibility</p>
                    <p className="cursor-pointer">Do Not Sell My Personal Information</p>
                    <p className="mt-10 cursor-pointer">Cookie Settings</p>

                </div>
                <div className="flex justify-center items-center">
                    <img className="h-8" src="https://www.mcdonalds.com/content/dam/usa/nfl/assets/nav/arches-logo_108x108.jpg" alt="logo" />
                    <p> © 2017 - 2021 McDonald's. All Rights Reserved</p>
                </div>

            </div>




        </>
    )
}

export default Footer
