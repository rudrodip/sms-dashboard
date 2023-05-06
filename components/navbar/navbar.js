// renderd in every page as navbar


// necessary dependencies
import Link from "next/link"
import { useAuth } from "../../context/AuthContext"
import { MdDensityMedium } from 'react-icons/md'
import { useRouter } from "next/router";
import AdminProfile from "../profile/adminProfile";

// the component
const Navbar = ({ toggleSidebar }) => {
  const { user, userInfo, logout } = useAuth()
  const router = useRouter()
  const handleLogout = () => user ? logout() : router.push('/login')

  return (
    <div className='sticky top-0 z-50'>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <AdminProfile userInfo={userInfo} />
      <nav className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <MdDensityMedium onClick={toggleSidebar} className="w-6 h-6 cursor-pointer mx-3 lg:hidden" />
              <Link href="/">
                <div className="flex cursor-pointer items-center">
                  <img src="/logo/dashboard.png" className="rounded-full w-8 h-8" />
                  <p className="text-xl lg:text-2xl block px-3 py-2 rounded-md font-medium">Dashboard</p>
                </div>
              </Link>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} />
                </div>
              </label>
              <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <label htmlFor="my-modal" className="justify-between">Profile</label>
                </li>
                <li><a>Settings</a></li>
                <li><a onClick={handleLogout}>{user ? "Logout" : "Login"}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};


export default Navbar