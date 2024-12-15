import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <div>
      <nav className='shadow-md'>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3  ">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center md:text-4xl text-2xl font-semibold whitespace-nowrap ">TextUtilz</span>
            <div className=" w-full md:block md:w-auto" id="navbar-default">
              <ul className="font-medium flex flex-row space-x-3 text-l md:p-0 mt-[4] md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0 ">
                <li>
                  <Link to="/home" className="  rounded md:bg-transparent md:p-0" aria-current="page">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="   hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">About</Link>
                </li>
              </ul>
            </div>
          </Link>


          <label className="inline-flex  items-center  cursor-pointer">
            <input onClick={props.changeMode} type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-blue-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all peer-checked:bg-blue-600"></div>
            <span className="ms-3 md:text-l md:font-bold font-semibold">{props.mode}</span>
          </label>
        </div>

      </nav>

    </div>
  )
}
