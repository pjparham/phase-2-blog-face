import styled from 'styled-components';

export const LikeButton = styled.button`
    margin-left: .5rem;
    color: #0180e7;
    background: #fff;
    border: 2px solid #0180e7;
    border-radius: 20px;

    transition: all 0.2s ease-in-out;
    text-decoration: none;


    &:hover {
        transition: all 0.2s ease-in-out;
        background: #0180e7;
        color: #fff;
        border: 2px solid #0180e7;
    }
`