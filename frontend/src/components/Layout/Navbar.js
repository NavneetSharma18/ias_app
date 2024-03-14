import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from 'react-redux'
import {checkLogout} from '../../redux/userApi/';

axios.defaults.withCredentials = true


const Navbar = ()=>{

	const auth     = useSelector((state) => state.loginRes.isUserLogin);
	const userData = useSelector((state) => state.loginRes.authData);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	
	const logoutUser = ()=>{

		 dispatch(checkLogout());
		 navigate('/login');
	   
	}


   let checkout = document.getElementById("checkout");
  let checdiv = document.getElementById("chec-div");
  let flag3 = false;
  const checkoutHandler = () => {
    if (!flag3) {
      checkout.classNameList.add("translate-x-full");
      checkout.classNameList.remove("translate-x-0");
      setTimeout(function () {
        checdiv.classNameList.add("hidden");
      }, 1000);
      flag3 = true;
    } else {
      setTimeout(function () {
        checkout.classNameList.remove("translate-x-full");
        checkout.classNameList.add("translate-x-0");
      }, 1000);
      checdiv.classNameList.remove("hidden");
      flag3 = false;
    }
  };
 


	return (
		     <div >
			      { auth?
			    	<ul className="navbar_ul">
					    <li><Link to="/">Product</Link></li>
					    <li><Link to="/add">Add Product</Link></li>
					    <li><Link to="/signup" onClick={logoutUser}>Logout ({(userData)?userData.name:'-'})</Link></li>   
					</ul>
			      :
				    <ul className="navbar_ul">
					    <li><Link to="/signup">Sign Up</Link></li>  
					     <li><Link to="/login">Login</Link></li> 
					     <li><Link to="/shop">Shop</Link></li> 
					     <li className='cart_icon' onClick={checkoutHandler(false)}>
					        <div className="relative py-2">
							  <div className="t-0 absolute left-3">
							    <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">3</p>
							  </div>
							  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="file: mt-4 h-6 w-6 bg-white-500 text-white">
							    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
							  </svg>
							</div>
						</li>
					</ul>


			     }


			       <div className="w-full h-full bg-black dark:bg-gray-900 bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0" id="chec-div">

                  <div className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">

                    <div className="flex items-end lg:flex-row flex-col justify-end" id="cart">
                      <div className="lg:w-1/2 md:w-8/12 w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white dark:bg-gray-800 overflow-y-hidden overflow-x-hidden lg:h-screen h-auto" id="scroll">
                        <div className="flex items-center text-gray-500 hover:text-gray-600 dark:text-white cursor-pointer" onClick={checkoutHandler(false)}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <polyline points="15 6 9 12 15 18" />
                          </svg>
                          <p className="text-sm pl-2 leading-none dark:hover:text-gray-200">Back</p>
                        </div>
                        <p className="lg:text-4xl text-3xl font-black leading-10 text-gray-800 dark:text-white pt-3">Bag</p>
                        
                        <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
                          <div className="md:w-4/12 2xl:w-1/4 w-full">
                            <img src="https://i.ibb.co/SX762kX/Rectangle-36-1.png" alt="Black Leather Bag" className="h-full object-center object-cover md:block hidden" />
                            <img src="https://i.ibb.co/g9xsdCM/Rectangle-37.pngg" alt="Black Leather Bag" className="md:hidden w-full h-full object-center object-cover" />
                          </div>
                          <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                            <p className="text-xs leading-3 text-gray-800 dark:text-white md:pt-0 pt-4">RF293</p>
                            <div className="flex items-center justify-between w-full pt-1">
                              <p className="text-base font-black leading-none text-gray-800 dark:text-white">North wolf bag</p>
                              <select aria-label="Select quantity" className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
                                <option>01</option>
                                <option>02</option>
                                <option>03</option>
                              </select>
                            </div>
                            <p className="text-xs leading-3 text-gray-600 dark:text-white pt-2">Height: 10 inches</p>
                            <p className="text-xs leading-3 text-gray-600 dark:text-white py-4">Color: Black</p>
                            <p className="w-96 text-xs leading-3 text-gray-600 dark:text-white">Composition: 100% calf leather</p>
                            <div className="flex items-center justify-between pt-5">
                              <div className="flex itemms-center">
                                <p className="text-xs leading-3 underline text-gray-800 dark:text-white cursor-pointer">Add to favorites</p>
                                <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
                              </div>
                              <p className="text-base font-black leading-none text-gray-800 dark:text-white">,000</p>
                            </div>
                          </div>
                        </div>
                      
                      </div>


                      <div className="lg:w-96 md:w-8/12 w-full bg-gray-100 dark:bg-gray-900 h-full">
                        <div className="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto">
                          <div>
                            <p className="lg:text-4xl text-3xl font-black leading-9 text-gray-800 dark:text-white">Summary</p>
                            <div className="flex items-center justify-between pt-16">
                              <p className="text-base leading-none text-gray-800 dark:text-white">Subtotal</p>
                              <p className="text-base leading-none text-gray-800 dark:text-white">,000</p>
                            </div>
                            <div className="flex items-center justify-between pt-5">
                              <p className="text-base leading-none text-gray-800 dark:text-white">Shipping</p>
                              <p className="text-base leading-none text-gray-800 dark:text-white"></p>
                            </div>
                            <div className="flex items-center justify-between pt-5">
                              <p className="text-base leading-none text-gray-800 dark:text-white">Tax</p>
                              <p className="text-base leading-none text-gray-800 dark:text-white"></p>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                              <p className="text-2xl leading-normal text-gray-800 dark:text-white">Total</p>
                              <p className="text-2xl font-bold leading-normal text-right text-gray-800 dark:text-white">,240</p>
                            </div>
                            <button onClick={checkoutHandler(true)} className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white dark:hover:bg-gray-700">Checkout</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
			
		
		     </div>
		)
    
	

}

export default Navbar