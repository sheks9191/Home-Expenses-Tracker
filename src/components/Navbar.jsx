import { NavbarWrapper } from "../styledComponents/NavbarStyles"
import Logo from "./Logo"
import MenuIcon from "./MenuIcon"
import { MdAccountCircle } from "react-icons/md";
import { FaAngleDown,FaAngleUp } from "react-icons/fa";
import { IoIosSunny,IoMdPartlySunny  } from "react-icons/io";
import { MdNightlight } from "react-icons/md";
import { GiNightSky } from "react-icons/gi";
// import { IoPartlySunnyOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, setToggleLogout } from "../features/ui/uiSlice";
import { useNavigate } from "react-router-dom";
import useDateUpdate from "./useDateUpdate";




const Navbar = () => {
   const {timeText,hour} = useDateUpdate();

   const navigate = useNavigate()
   
    const{toggleLogout,user} = useSelector(store => store.ui)
    const dispatch = useDispatch()
    const userInitials = user.name.substring(0,2)

    const handleLogout = () => {
      dispatch(logoutUser())
      navigate('/landing')
    }
   
   
    
  return (
    <NavbarWrapper>



        <div className="nav-content">
            <div className="logo-content">
              <MenuIcon/>
              <Logo/>
            </div>
            
            <div className="nav-center">
              <span className="icon">{timeText === 'PM' ? ((parseInt(hour) === 12 || (parseInt(hour) <= 5))?<IoIosSunny/>:<GiNightSky/>): ((parseInt(hour) === 12 || (parseInt(hour) <= 6))?<MdNightlight/>:<IoMdPartlySunny/>)}</span>
              <span className="text">{timeText === 'PM' ? ((parseInt(hour) === 12 || (parseInt(hour) <= 5))? 'Good Afternoon':'Good Evening'  ): ('Good Morning')}</span>
              <span className="name">{user.name}</span>
            </div>
            <div className="user" onClick={() => dispatch(setToggleLogout())}>
              <MdAccountCircle/>Hello, <span>{userInitials}</span>{toggleLogout? <FaAngleUp/> :<FaAngleDown/>}
              {toggleLogout&&<button type="button" className="logout-btn" onClick={handleLogout}>Logout</button>}
            </div>
        </div>
    </NavbarWrapper>
  )
}

export default Navbar