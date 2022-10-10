import styled from 'styled-components';

export const PostContainer = styled.div`
    background: #ebebeb;
    text-align: left;
    margin: 1rem 6rem;
    padding: 1rem;
    border-radius: 20px;
    @media screen and (max-width: 768px) {
        margin: 1rem 1rem;
    }
`

export const Title = styled.h1`
    background: #ebebeb;
`

export const EditButton = styled.button`
    margin-right: 0;
    text-align: right;
    height: 80%;
`
export const UserName = styled.p`
    font-size: 12px;
    margin-top: -1rem;
    margin-right: 5rem;
`

export const TitleContainer = styled.span`
    display: flex;
`
export const ButtonContainer = styled.div`
    margin-left: auto;
    margin-right: 0;
    height: 80%;
    @media screen and (max-width: 768px) {
        height: 4rem;
        width: 2rem;
    }
`

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