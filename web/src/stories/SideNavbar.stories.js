import Navbar from '../components/Navbar'
import * as BoxIcons from 'react-icons/bi'
import { Link } from '@redwoodjs/router'

export default {
  title: 'Components/Navbar',
  component: Navbar,
}

export const Default = () => {
  return (
    <>
      <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
        <div className="px-2 mx-2 navbar-start">
          <span className="text-lg font-bold">OurCompany</span>
        </div>
        <div className="hidden px-2 mx-2 navbar-center lg:flex">
          <div className="flex items-stretch">
            <Link className="btn btn-ghost btn-sm rounded-btn" to="#">
              Home
            </Link>
            <Link className="btn btn-ghost btn-sm rounded-btn" to="#">
              Portfolio
            </Link>
            <Link className="btn btn-ghost btn-sm rounded-btn" to="#">
              About
            </Link>
            <Link className="btn btn-ghost btn-sm rounded-btn" to="#">
              Contact
            </Link>
          </div>
        </div>
        <div className="navbar-end">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              ></path>
            </svg>
          </button>
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}
export const SideNavbar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="logo_content">
          <div className="logo">
            <BoxIcons.BiAnalyse size={28} />
            <div className="logo_name">Our Company</div>
          </div>
          <BoxIcons.BiMenu id="btn" />
        </div>
        <ul className="nav_list">
          <li>
            <Link to="#">
              <BoxIcons.BiGridAlt size={26} />
              <span className="links_name">DashBoard</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <BoxIcons.BiUserPin size={26} />
              <span className="links_name">User</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <BoxIcons.BiMessage size={26} />
              <span className="links_name">Message</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <BoxIcons.BiBookHeart size={26} />
              <span className="links_name">User List</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <BoxIcons.BiCog size={26} />
              <span className="links_name">Setting</span>
            </Link>
          </li>
        </ul>
        <div className="profile_content">
          <div className="profile">
            <div className="profile_details">
              <div className="avatar">
                <div className="rounded-full w-12 h-12">
                  <img
                    src="http://daisyui.com/tailwind-css-component-profile-2@56w.png"
                    alt="profile_image"
                  />
                </div>
              </div>
              <div className="name_job">
                <div className="name">Login as</div>
                <div className="job">Samuel Konzeky</div>
              </div>
              <BoxIcons.BiLogOut size={26} id="log_out" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const MobileResponsive = () => {
  return (
    <>
      <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
        <div className="flex-none px-2 mx-2">
          <span className="text-lg font-bold">OurCompany</span>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="items-stretch hidden lg:flex">
            <Link className="btn btn-ghost btn-sm rounded-btn" to="#">
              Home
            </Link>
            <Link className="btn btn-ghost btn-sm rounded-btn" to="#">
              Portfolio
            </Link>
            <Link className="btn btn-ghost btn-sm rounded-btn" to="#">
              About
            </Link>
            <Link className="btn btn-ghost btn-sm rounded-btn" to="#">
              Contact
            </Link>
          </div>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}
