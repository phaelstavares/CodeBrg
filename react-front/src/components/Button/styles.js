import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link) `
    width: 342px;
    height: 74px;
    margin-top: 40px;
    border-radius: 14px;
    background: rgba(217, 56, 86, 1);
    border: none;
    cursor: pointer;

    font-style: normal;
    font-size: 17px;
    font-weight: bold;
    line-height: 28px;
    color: #ffffff;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    &:hover {
        opacity: 0.9;
    }

    &:active {
        opacity: 0.6;
    }

    ${props => props.isBack && `
        background: transparent;
        border: 1px solid #ffffff;
    `}
`