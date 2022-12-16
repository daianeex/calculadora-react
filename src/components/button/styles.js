import styled, {css} from "styled-components";

export const ButtonContainer = styled.button`
    padding: 20px;
    border: 1px solid #1B191C;
    background-color: #E0E1E6;
    color: #1B191C;
    font-size: 24px;
    font-weight: 700;
    flex: 1;

    &:hover {
        opacity: 0.6;
    }

    ${({ variant }) => variant === "operation" && css`
    background-color: #FA9716;
    color: #FFFFFF;

    `}
    ${({ variant }) => variant === "special" && css`
    background-color: #C7C6CC;
    `}

    ${({ variant }) => variant === "zero" && css`
    flex: 50%;
    `}
`