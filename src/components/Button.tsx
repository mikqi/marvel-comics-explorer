import styled from 'styled-components'

interface IButtonProps {
  outline?: boolean
}

export default styled.button<IButtonProps>`
  background-color: ${(props) => props.outline ? 'transparent' : '#5191FD'};
  border: 0.1rem solid #5191FD;
  border-radius: .4rem;
  color: ${(props: any) => props.outline ? '#5191FD' : '#fff'};
  cursor: pointer;
  display: inline-block;
  font-size: 1.1rem;
  font-weight: 700;
  height: 3.8rem;
  letter-spacing: .1rem;
  line-height: 3.8rem;
  padding: 0 3.0rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;

  :hover,
  :focus {
    background-color: ${(props: any) => props.outline ? 'transparent' : '#1647E9'};
    border-color: #1647E9;
    color: ${(props: any) => props.outline ? '#1647E9' : '#fff'};
    outline: 0;
  }

  :disabled {
    cursor: default;
    opacity: .5;
  }
`
