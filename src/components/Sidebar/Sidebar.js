import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideButtonWrap, SidebarRoute} from "./SidebarElements"

function Sidebar() {

    // <SidebarContainer>
    //     <Icon>
    //         <CloseIcon />
    //     </Icon>
    // </SidebarContainer>

  return (
    <SidebarContainer>
        <p>hello</p>
        <Icon> 
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="/about">  About </SidebarLink>
            </SidebarMenu>
            <SideButtonWrap>
                <SidebarRoute>Sign In</SidebarRoute>
            </SideButtonWrap>
        </SidebarWrapper>
    </SidebarContainer>

  )
}

export default Sidebar

