import React from 'react'
import { menu } from "./Header"

function Main() {
    return (
        <>


            <div>
                <div className="md:flex md:justify-center md:pl-48 md:pr-44">
                    <div className="mt-32 mb-24 pl-4 pr-4 mx-auto md:mt-24 md:w-full md:mr-4 ">
                        <img
                            className="object-contain"
                            src="https://www.mcdonalds.com/is/image/content/dam/usa/nfl/assets/images/1PUB_MMR_FFNFML_1168x520.jpg?$Publication_One_Column_Desktop$" alt="image1"
                        />
                    </div>

                    <div className="md:mt-24 md:w-2/5">
                        <h1 className="text-3xl px-5 font-bold md:px-0">Free Fries Now. Free McDonald’s Later.*</h1>
                        <h6 className="flex px-5 pr-10 mt-4 flex-wrap font-normal md:px-0 md:pr-0 md:py-2">Get free large Fries when you download the McDonald’s app and join MyMcDonald’s Rewards. Get your choice of Hash Browns, Vanilla Cone, McChicken® or a Cheeseburger free after your first purchase.</h6>
                        <p className="text-xs py-3 px-5 md:px-0 md:py-0">*Free large Fries valid 1x thru 12/31/21 for first time app users at participating McDonald’s. May take up to 48 hours to appear in your deals. Free Loyalty Reward Points valid 1x thru 12/31/21 for first time MyMcDonald’s Rewards users. Program available only at participating McDonald’s. Excludes delivery.  McD app download and registration required.</p>
                        <button className="cursor-pointer h-12 mt-2 ml-4 space-x-4 items-center font-normal justify-center bg-yellow-400 w-40 text-center text-black rounded-lg md:mt-8">Download the App</button>

                    </div>

                </div>

                <div className="md:flex md:justify-center md:pl-48 md:pr-44">
                    <div className="py-24 p-7 md:p-0 md:w-full md:ml-4 md:mr-9">
                        <img src="https://www.mcdonalds.com/is/image/content/dam/usa/nfl/assets/images/1_Pub_Desktop_McDeliveryGeneric_HomePage_1168x520.jpg?$Publication_One_Column_Desktop$" alt="image2" />
                    </div>
                    <div className="md:py-2 md:w-2/5 ">
                        <h1 className="text-3xl px-9 font-bold md:px-0">Order McDelivery® Now*</h1>
                        <p className="py-5 px-9 md:px-0">Get all your McDonald’s favorites delivered right to your doorstep with McDelivery® on Uber Eats or DoorDash.</p>
                        <p className="text-xs px-9 mb-2 md:px-0">*At participating McDonald’s. Prices may be higher than at restaurants. Delivery/service fees apply</p>
                        <button className="cursor-pointer h-12 mt-2 ml-9 md:ml-3 space-x-4 items-center font-normal justify-center bg-yellow-400 w-48 text-center text-black rounded-lg md:mt-8">Order McDelivery® Now</button>
                    </div>
                </div>

                <div className="md:flex md:justify-center md:pl-48 md:pr-44 md:py-24">
                    <div className="py-24 p-7 md:p-0 md:w-full md:ml-4 md:mr-9">
                        <img src="https://www.mcdonalds.com/is/image/content/dam/usa/nfl/assets/images/HomePage_1PUB_1168x520.jpg?$Publication_One_Column_Desktop$" alt="image3" />
                    </div>
                    <div className="md:py-2 md:w-2/5" >
                        <h1 className="text-3xl px-9 font-bold md:px-0">Try the New Crispy Chicken Sandwiches*</h1>
                        <p className="py-5 px-9 md:px-0">Take a bite and you’ll find out what CrispyJuicyTender means. Whether it’s Crispy, Spicy or Deluxe, there’s a new sandwich for everyone.</p>
                        <p className="text-xs px-9 mb-2 md:px-0">*At participating McDonald’s</p>
                        <button className="cursor-pointer h-10 mt-2 ml-9 md:ml-3 space-x-4 items-center font-normal justify-center bg-yellow-400 w-40 text-center text-black rounded-lg md:mt-8">Order in the App</button>
                    </div>

                </div>
                <div className="md:flex md:justify-center md:pl-48 md:pr-44 ">
                    <div className="py-24 p-7 md:p-0 md:w-full md:ml-4 md:mr-9">
                        <img src="https://www.mcdonalds.com/is/image/content/dam/usa/nfl/assets/images/1PUB_Desktop_Deals_1168x520%20(1).jpg?$Publication_One_Column_Desktop$" alt="image3" />
                    </div>
                    <div className="md:py-2 md:w-2/5" >
                        <h1 className="text-3xl px-9 font-bold md:px-0">Delicious Deals for Delicious Meals</h1>
                        <p className="py-5 px-9 md:px-0">Get exclusive deals on your McDonald’s favorites in the app with contactless Mobile Order & Pay* and convenient Drive Thru or Curbside pickup.</p>
                        <p className="text-xs px-9 mb-2 md:px-0">*Mobile Order & Pay at participating McDonald’s.</p>
                        <button className="cursor-pointer h-10 mt-2 ml-9 md:ml-3 space-x-4 items-center font-normal justify-center bg-yellow-400 w-40 text-center text-black rounded-lg md:mt-8">Get App Deals</button>
                    </div>

                </div>
            </div>
            :
            <div> </div>
        </>
    )
}

export default Main
