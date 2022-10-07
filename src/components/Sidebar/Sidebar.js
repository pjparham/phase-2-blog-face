import React, { useEffect } from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideButtonWrap, SidebarRoute} from "./SidebarElements"
import { useAuth0 } from '@auth0/auth0-react'

function Sidebar({isOpen, toggleSidebar, setUser}) {

    const { loginWithRedirect, logout, user } = useAuth0();

    let activeUser = user

    useEffect(() => {
        setUser(activeUser)
    }, [activeUser])

    // <SidebarContainer>
    //     <Icon>
    //         <CloseIcon />
    //     </Icon>
    // </SidebarContainer>

  return (
    <SidebarContainer onClick={toggleSidebar} isOpen={isOpen}>
        <Icon onClick={toggleSidebar}> 
            <CloseIcon />
        </Icon>
        <div class="logoContainer">
            <img className="sidebarLogo" src={require('../../images/blogface_logo.png')} alt='logo' />
        </div>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="/about">About</SidebarLink>
                { user ? <><SidebarLink to="/profile">My Profile</SidebarLink>
                <SidebarLink to="/new-post">Create a post</SidebarLink></> : null}
            </SidebarMenu>
            <SideButtonWrap>
                {user ? <SidebarRoute onClick={() => logout()}>Sign Out</SidebarRoute> : <SidebarRoute onClick={() => loginWithRedirect()}>Sign In</SidebarRoute>}
            </SideButtonWrap>
        </SidebarWrapper>
    </SidebarContainer>

  )
}



export default Sidebar

