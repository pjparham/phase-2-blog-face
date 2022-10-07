import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
    background: #ebebeb;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;   
    border: 3.5px solid #0180e7;
    border-radius: 20px;
    // width: 80%;
`

export const NavLink = styled(Link)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height 100%;
    cursor: pointer;
    font-size: 20px;

    &.active {
        color: #0180e7
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: #0180e7;
    margin-top: 1rem;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -7rem;
    // /*margin-right: -24px;*/
    // margin-right: 30px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(Link)`
    border-radius: 6px;
    background: #0180e7;
    padding: 10px 22px;
    margin-right: 100px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;


    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #0180e7;
        border: 1.5px solid black;
    }
`

export const WebTitle = styled.img`
    height: 15rem;
    padding-bottom: 4rem;
    @media screen and (max-width: 768px) {
        height: 12rem;
        margin-top: 1rem;
    }
`

