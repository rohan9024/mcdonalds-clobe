import React from 'react'
import DehazeIcon from '@material-ui/icons/Dehaze';
import HeaderOptions from './HeaderOptions';
import { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

function Header() {
    const [dehaze, setDehaze] = useState(false);
    const [menu, setMenu] = useState(false);
    
    return (
        <>
            <header className="flex items-center w-full p-0 space-x-4 justify-between md:p-2 md:justify-center lg:justify-center">
                <div className="flex space-x-4 items-center cursor-pointer ">
                    <div className="md:mt-2 lg:mt-2 cursor-pointer md:pr-10">
                        {!dehaze &&
                            <img
                                className="w-2/3 mx-auto md:w-full "
                                src="https://www.mcdonalds.com/content/dam/usa/nfl/assets/nav/arches-logo_108x108.jpg" alt="logo"
                            />}
                    </div>

                    {!dehaze && <div className="md:hidden lg:hidden ">
                        <DehazeIcon onClick={() => {
                            if (dehaze) {
                                setDehaze(false)
                            }
                            else {
                                setDehaze(true)
                            }
                        }
                        } />
                    </div>}
                </div>
                {dehaze && (
                    <div className="h-screen w-screen md:hidden">

                        <div className="flex justify-between">
                            <img
                                className="h-10 "
                                src="https://www.mcdonalds.com/content/dam/usa/nfl/assets/nav/arches-logo_108x108.jpg" alt="logo"
                            />
                            <CloseIcon className="cursor-pointer mr-3 mt-2" onClick={() => setDehaze(false)} />
                        </div>
                        <div className="flex-col space-y-10">
                            <div className="flex-col space-y-5 ml-10 mt-10">
                                <p className="cursor-pointer">Sign Up for Email</p>
                                <p className="cursor-pointer">Careers</p>
                            </div>
                            <hr />
                            <div className="flex-col space-y-12 ml-10">
                                <p className="cursor-pointer">Home</p>
                                <div className="flex justify-between mr-3">
                                    <p className="cursor-pointer">Our Menu</p>
                                    {menu ?

                                        <AddIcon className="cursor-pointer" onClick={() => {
                                            if (menu) {
                                                setMenu(false)
                                            }
                                            else {
                                                setMenu(true)
                                            }
                                        }}

                                        />

                                        :
                                        
                                        <RemoveIcon className="cursor-pointer" onClick={() => {
                                            if (menu) {
                                                setMenu(false)
                                            }
                                            else {
                                                setMenu(true)
                                            }
                                        }} />
                                    }
                                </div>

                                {menu && <div>
                                    <div className="">
                                        <button>View Full Menu</button>
                                    </div>

                                    <div>
                                        <div>
                                            <img src="https://www.mcdonalds.com/is/image/content/dam/usa/nfl/assets/nav/nav_drinks_160x160_.jpg?$Category_Mobile$" alt="" />
                                            <h4>Beverages</h4>
                                        </div>
                                        <div>
                                            <img src="https://www.mcdonalds.com/is/image/content/dam/usa/nfl/assets/nav/nav_breakfast_160x160.jpg?$Category_Mobile$" alt="" />
                                            <h4>Breakfast</h4>
                                        </div>
                                        <div>
                                            <img src="https://www.mcdonalds.com/is/image/content/dam/usa/nfl/assets/nav/nav_burgers_160x160_.jpg?$Category_Mobile$" alt="" />
                                            <h4>Burgers</h4>
                                        </div>
                                        <div>
                                            <img src="https://www.mcdonalds.com/is/image/content/dam/usa/nfl/assets/nav/category-chicken-n-sandwiches.jpg?$Category_Mobile$" alt="" />
                                            <h4>Chicken & Sandwiches</h4>
                                        </div>
                                        <div>
                                            <img src="https://www.mcdonalds.com/is/image/content/dam/usa/nfl/assets/nav/nav_combo_meal_160x160_.jpg?$Category_Mobile$" alt="" />
                                            <h4>Combo Meal</h4>
                                        </div>
                                        <div>
                                            <img src="https://www.mcdonalds.com/is/image/content/dam/usa/nfl/assets/nav/nav_desserts_&_shakes_160x160_.jpg?$Category_Mobile$" alt="" />
                                            <h4>Desserts & Shakes</h4>
                                        </div>
                                        <div>
                                            <img src="https://www.mcdonalds.com/is/image/content/dam/usa/nfl/assets/nav/nav_happy_meal_160x160.jpg?$Category_Mobile$" alt="" />
                                            <h4>Happy Meal</h4>
                                        </div>
                                        <div>
                                            <img src="https://www.mcdonalds.com/is/image/content/dam/usa/nfl/assets/nav/nav_mccafe_160x160.jpg?$Category_Mobile$" alt="" />
                                            <h4>McCafé® Drinks</h4>
                                        </div>
                                        <div>
                                            <img src="https://www.mcdonalds.com/is/image/content/dam/usa/nfl/assets/nav/nav_Mcbakery_160x160.jpg?$Category_Mobile$" alt="" />
                                            <h4>McCafé® Bakery</h4>
                                        </div>
                                        <div>
                                            <img src="https://www.mcdonalds.com/is/image/content/dam/usa/nfl/assets/nav/nav_snacks_sides_160x160.jpg?$Category_Mobile$" alt="" />
                                            <h4>Snacks & Sides</h4>
                                        </div>
                                        <div>
                                            <img src="https://www.mcdonalds.com/is/image/content/dam/usa/nfl/assets/nav/D123_160x160.jpg?$Category_Mobile$" alt="" />
                                            <h4>$1 $2 $3 Dollar Menu</h4>
                                        </div>

                                    </div>
                                </div>}

                                <p className="cursor-pointer">McCafé</p>
                                <p className="cursor-pointer">About Our Food</p>
                                <p className="cursor-pointer">Exclusive Deals</p>
                                <p className="cursor-pointer">Download App</p>
                                <p className="cursor-pointer">Locate</p>

                                <div className="space-y-5">
                                    <div className="flex justify-between mr-3">
                                        <p className="cursor-pointer">Search</p>
                                        <SearchOutlinedIcon className="cursor-pointer" />
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="cursor-pointer">Change your location</p>
                                        <LocationOnIcon className="text-red-600 mr-3 cursor-pointer" />
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                )}
                <HeaderOptions />

                {!dehaze &&
                    <div className="flex cursor-pointer h-10 mt-2 space-x-4 md:mb-16 items-center font-normal justify-center bg-yellow-400 w-32 text-center text-black rounded-lg ">
                        Order Now
                    </div>
                }


            </header>
            {
                dehaze ?
                    <hr className="mt-10" />
                    :
                    <hr />
            }
        </>
    )
}

export default Header

