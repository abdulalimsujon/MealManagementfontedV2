import { Container, Navbar } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import {AiOutlineCheckCircle, AiOutlineEdit, AiOutlineLogout, AiOutlineMenuUnfold, AiOutlineUser} from "react-icons/ai";

import {CiSearch,CiDatabase} from "react-icons/ci";
import {SiDailymotion} from "react-icons/si";
import React, { Fragment, useRef } from 'react';
import { getMemberDetails, removeSession } from "../helper/SessionHelper";

const MasterLayout = (props) => {

    let contentRef,sideNavRef=useRef();
    const member= getMemberDetails();

    const MenuBarClickHandler = () => {
        let sideNav = sideNavRef;
        let content = contentRef;

        

        if (sideNav.classList.contains("side-nav-open")) {
            sideNav.classList.add("side-nav-close");
            sideNav.classList.remove("side-nav-open");
            content.classList.add("content-expand");
            content.classList.remove("content");
        } else {
            sideNav.classList.remove("side-nav-close");
            sideNav.classList.add("side-nav-open");
            content.classList.remove("content-expand");
            content.classList.add("content");
        }
    };

    const logout =()=>{
        removeSession();
    }



    return (
        <Fragment>

<Navbar  className="fixed-top px-0 shadow-sm ">
                <Container fluid={true}>
                    <Navbar.Brand >
                        <a className="icon-nav m-0 h5" onClick={MenuBarClickHandler} ><AiOutlineMenuUnfold/></a> 
                        {member.email}
                       

                    </Navbar.Brand>


                    
                    <div className="float-right h-auto d-flex">
                        <div className="user-dropdown">
                            <img className="icon-nav-img icon-nav" src="" alt="no"/>
                            <div className="user-dropdown-content ">
                                <div className="mt-4 text-center">
                                    <img className="icon-nav-img" src="" alt="no"/>
                                  
                                    <hr className="user-dropdown-divider  p-0"/>
                                </div>
                                <NavLink to="/profile" className="side-bar-item">
                                    <AiOutlineUser className="side-bar-item-icon" />
                                    <span className="side-bar-item-caption">Profile</span>
                                </NavLink>
                                <a className="side-bar-item">
                                    <AiOutlineLogout className="side-bar-item-icon" />
                                    <span onClick={logout} className="side-bar-item-caption">Logout</span>
                                </a>
                            </div>
                        </div>
                    </div>

              
                </Container>
            </Navbar>

            
<div ref={(div) =>{sideNavRef=div}} className="side-nav-open">

<NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2" }  to="/"  end>
    {/* <RiDashboardLine className="side-bar-item-icon" /> */}
    <span className="side-bar-item-caption">Dashboard</span>
</NavLink>

<NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2" } to="/allMemberPage" >
    <CiDatabase className="side-bar-item-icon" />
    <span className="side-bar-item-caption">All Members</span>
</NavLink>

<NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2" } to="/searchPage" >
    <CiSearch className="side-bar-item-icon" />
    <span className="side-bar-item-caption">Search</span>
</NavLink>


<NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2" } to="/mealInformation" >
    <SiDailymotion className="side-bar-item-icon" />
    <span className="side-bar-item-caption">Meal Information</span>
</NavLink>
<NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2" } to="/regularCost" >
    <SiDailymotion className="side-bar-item-icon" />
    <span className="side-bar-item-caption">RegularCost</span>
</NavLink>



</div>

<div ref={(div) => contentRef = div} className="content">

    {props.children}

</div>

        </Fragment>
            
       
    );
};

export default MasterLayout;