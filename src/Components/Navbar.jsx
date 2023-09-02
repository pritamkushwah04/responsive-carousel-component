import React from 'react'
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [breakPoint, setBreakPoint] = useState(7);
    const navItems = ["HOME", "ELECTRONICS", "BOOKS", "MUSIC", "MOVIES", "CLOTHINGS", "GAMES", "FURNITURE", "ELECTROINICS", "TREVEL", "BOTANICAL", "CATEGORY NAME"];
    var navItemsHor = navItems.filter((value, index) => (index < breakPoint));
    var navItemsMore = navItems.filter((value, index) => (index >= breakPoint));


    function toggleMore() {
        const ele = document.getElementById('dropdownMenu');
        if (ele.className == 'hidden absolute top-[70px] -ml-12 bg-[#2f302c] text-white rounded-md ') {
            ele.className = 'hidden sm:block absolute top-[70px] -ml-12 bg-[#2f302c] text-white rounded-md ';
        } else {
            ele.className = 'hidden absolute top-[70px] -ml-12 bg-[#2f302c] text-white rounded-md ';
        }

    }

    function toggleHam() {
        const hamMenuBtn = document.getElementById('hamMenuBtn');
        const hamMenuCancleBtn = document.getElementById('hamMenuCancleBtn');
        const hamDropdownMenu =document.getElementById('hamDropdownMenu');

        if (hamMenuBtn.className == '') {
            hamMenuBtn.className = 'hidden';
            hamMenuCancleBtn.className='';
            hamDropdownMenu.className='absolute top-[70px] left-0 min-w-full bg-[#2f302c] text-white '
        }else {
            hamMenuBtn.className = '';
            hamMenuCancleBtn.className='hidden';
            hamDropdownMenu.className='hidden absolute top-[70px] left-0 min-w-full bg-[#2f302c] text-white '
        }

    }

    useEffect(() => {
        function handleResize() {
            if (window.matchMedia("(min-width: 1250px)").matches) {
                setBreakPoint(7);
            } else if (window.matchMedia("(min-width: 1000px)").matches) {
                setBreakPoint(6);
            } else if (window.matchMedia("(min-width: 850px)").matches) {
                setBreakPoint(5);
            } else if (window.matchMedia("(min-width: 730px)").matches) {
                setBreakPoint(4);
            } else if (window.matchMedia("(min-width: 710px)").matches) {
                setBreakPoint(3);
            } else if (window.matchMedia("(min-width: 640px)").matches) {
                setBreakPoint(2);
            } else {
                setBreakPoint(0);
            }
        }

        handleResize();

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Remove event listener when component unmounts
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [setBreakPoint]);

    return (
        <nav className='flex justify-between  items-center p-4 bg-[#2f302c] text-white '>
            <h1 className=''>E-COMM</h1>
            <ul className='flex '>
                {navItemsHor.map((items, index) => (
                    <li className="mx-4 " key={index}>
                        {items}
                    </li>
                ))}
                <li>
                    <li id='moreBtn' onClick={toggleMore} className='hidden sm:block ' >MORE</li>
                    <div id='dropdownMenu' className='hidden absolute top-[70px] -ml-12 bg-[#2f302c] text-white rounded-md '>
                        <ul>
                            {navItemsMore.map((items, index) => (
                                <li className="px-4 py-2 hover:bg-[#eeeeee] hover:text-black" key={index}>
                                    {items}
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>
            </ul>
            <div class="h-fit border-b">
                <div className='absolute m-3'>
                    <svg class="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input type="text" id="email-adress-icon" class="  bg-[#2f302c] text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2" placeholder="Search Something..." />
            </div>
            <div className='sm:hidden z-10'>
                <div onClick={toggleHam} id='hamMenuBtn' className=''>
                    O
                </div>
                <div onClick={toggleHam} id='hamMenuCancleBtn' className='hidden'>
                    X
                </div>
                <div id='hamDropdownMenu' className='absolute top-[70px] left-0 min-w-full bg-[#2f302c] text-white '>
                    <ul>
                        {navItemsMore.map((items, index) => (
                            <li className="px-4 py-2 hover:bg-[#eeeeee] hover:text-black" key={index}>
                                {items}
                            </li>
                        ))}
                    </ul>
                </div>
                
            </div>

        </nav>
    )
}

export default Navbar
