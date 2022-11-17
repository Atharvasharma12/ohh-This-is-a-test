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
    <li><a href="/HomeSection">HOME</a></li>
                 <li><a href="page1">BOOKS</a>
                            <ul className='submenuOfBooks'>
                                <li><a href='/page1'>DEPARTMENT</a>
                                    <ul className='submenuOfDepartment'>
                                        <li><a href="/page1">CSIT</a></li>
                                        <li><a href="/page1">IT</a></li>
                                        <li><a href="/page1">CSE</a></li>
                                        <li><a href="/page1">CIVIL</a></li>
                                        <li><a href="/page1">MECHANICAL</a></li>
                                        <li><a href="/page1">ELECTRICAL</a></li>
                                    </ul>
                                </li>
                                <li><a href='/page2'>YEAR</a>
                                    <ul className='submenuOfYear'>
                                        <li><a href="/page2">I</a></li>
                                        <li><a href="/page2">II</a></li>
                                        <li><a href="/page2">III</a></li>
                                        <li><a href="/page2">IV</a></li>
                                    </ul>
                                </li>
                             </ul>
                 </li>
    <li><a href="#">NOTES</a></li>
    <li><a href="./Material">MATERIAL</a></li>
    <li><Link to='/SignIn'>REGISTER</Link></li>
    

  </ul>


      

          
        </nav>
    </div>
</header>
</container>
  )
}

export default NavBar