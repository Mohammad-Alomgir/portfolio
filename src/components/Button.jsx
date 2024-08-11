import styled from "styled-components";

const Button = ({className,children }) => {
  return <ButtonWrapper className={className}>{children}</ButtonWrapper>;
};
const ButtonWrapper = styled.button`
  background-color: ${({theme}) => theme.colors.btnColorPrimary};
  padding: 10px 20px;
  color: ${({theme}) => theme.colors.textPrimary};
  text-transform: uppercase;
  border: 1px solid ${({theme}) => theme.colors.borderColorPrimary};
  border-radius: 6px;
  transition: all 0.5s ease-out;
  &:hover {
    background-color: transparent;
    color: #4d4d4d;
  }
`;
export default Button;
