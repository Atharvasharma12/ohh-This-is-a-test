import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {Link} from 'react-router-dom';



function NavBar() {
  return (
    <container>
    <header class="header">
    <div class="header-1">
        <Link to={"logo"} class="logo"> <img src='logo1.gif' alt = "logo"></img> </Link>
<       form action="" class="search-form">
            <input type="search" name="" placeholder="search here..." id="search-box"/>
            <label ><SearchIcon/></label>
        </form>
        <form action="" class="signInHeader">
            <input type ="email" placeholder="Login" id = "signInHeader"/>
            <label><PersonIcon/></label>
        </form>
        <div class="header_icons">
            
            <label><ShoppingCartIcon/></label>
            <label><FavoriteBorderIcon/></label>
        </div>
    </div>

    <div class="header-2">
        <nav class="navbar2">

                  <ul className='menu' >
    <li><Link to="/HomeSection">HOME</Link></li>
                 <li><Link to="page1">BOOKS</Link>
                            <ul className='submenuOfBooks'>
                                <li><Link to='/page1'>DEPARTMENT</Link>
                                    <ul className='submenuOfDepartment'>
                                        <li><Link to="/page1">CSIT</Link></li>
                                        <li><Link to="/page1">IT</Link></li>
                                        <li><Link to="/page1">CSE</Link></li>
                                        <li><Link to="/page1">CIVIL</Link></li>
                                        <li><Link to="/page1">MECHANICAL</Link></li>
                                        <li><Link to="/page1">ELECTRICAL</Link></li>
                                    </ul>
                                </li>
                                <li><Link to='/page2'>YEAR</Link>
                                    <ul className='submenuOfYear'>
                                        <li><Link to="/page2">I</Link></li>
                                        <li><Link to="/page2">II</Link></li>
                                        <li><Link to="/page2">III</Link></li>
                                        <li><Link to="/page2">IV</Link></li>
                                    </ul>
                                </li>
                             </ul>
                 </li>
    <li><Link to="#">NOTES</Link></li>
    <li><Link to="./Material">MATERIAL</Link></li>
    <li><Link to='/SignIn'>REGISTER</Link></li>
    

  </ul>

    </nav>
    </div>
</header>
</container>
  )
}

export default NavBar