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
        <nav class="navbar">

                        

            <Link to='/HomeSection'>HOME</Link>
                    <div class='dropDown'>
                        <button class="dropDownButton">BOOKS</button>
                        <div class="dropDownElements">
                            
                            {/* <a href='/Page1'>DEPARTMENT</a> */}
                            <div class="branch">
                                <ul>

                            <button class="DepartmentDropDownButton">DEPARTMENT</button>
                                <div className='departmentChildren'>
                                <li>
                                <a href='./page1'>CSIT</a>
                                <a href='./page1'>IT</a>
                                <a href='./page1'>CSE</a>
                                <a href='./page1'>CIVIL</a>
                                <a href='./page1'>MECHANICAL</a>
                                <a href='./page1'>ELECTRICAL</a>
                                <a href='./page1'>CS-IOT</a>
                                <a href='./page1'>CS-DS</a>
                                <a href='./page1'>CS-AIML</a>
                                </li>
                            </div>
                                </ul>
                            </div>
                            <a href='/Page1'>YEAR</a>
                            <div class="year">

                                <a href='./page2'>I</a>
                                <a href='./page2'>II</a>
                                <a href='./page2'>III</a>
                                <a href='./page2'>IV</a>
                                

                            </div>
                            <a href='/Page3'>SUBJECT</a>   
                        </div>
                    </div>
            <a href="#NOTES">NOTES</a>
            <a href='./Material'>MATERIALS</a>
            
            <div class='dropDown1'>
                <button class="dropDownButton1">QUESTION PAPERS</button>
                <div class="dropDownElements1">
                            <a href='/Rgpv'>RGPV QUESTIONS PAPER</a>
                            <a href='/Page2'>GATE QUESTIONS PAPER</a>  
                        </div>
                </div>
            {/* <a href="#QUESTIONPAPERS">QUESTION PAPERS</a> */}
            <Link to='/SignIn'>SIGN IN</Link>
        </nav>
    </div>
</header>
</container>
  )
}

export default NavBar