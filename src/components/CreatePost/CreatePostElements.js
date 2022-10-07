import styled from 'styled-components';

export const InputField = styled.input`
    width: 40%;
    @media screen and (max-width: 768px) {
        width: 80%;
    }
`

export const BodyInput = styled.textarea`
    width: 40%;
    height: 5rem;
    @media screen and (max-width: 768px) {
        width: 80%
    }
`

export const SubmitPost = styled.input`
    margin-top: 1rem;
    border-radius: 50px;
    background: #0180e7;
    font-weight: bold;
    white-space: nowrap;
    padding: 16px 64px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #ebebeb;
        color: #0180e7;
    }
`