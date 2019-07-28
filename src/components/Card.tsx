import styled from 'styled-components'

export const CardContainer = styled.div`
  color: rgba(0, 0, 0, 0.87);
  width: 100%;
  border: 0;
  display: flex;
  position: relative;
  font-size: 1em;
  min-width: 0;
  word-wrap: break-word;
  background: #FFF;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  margin-top: 30px;
  border-radius: 6px;
  margin-bottom: 30px;
  flex-direction: column;
  transition: .2s ease-in;
  cursor: pointer;

  :hover {
    transition: .2s ease-in;
    box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }
`

interface ICardImage {
  imageUrl: string
}
export const CardImage = styled.div<ICardImage>`
  width: 100%;
  height: 336px;
  box-shadow: 0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  pointer-events: none;
  z-index: 1;
  background: url(${props => props.imageUrl}) no-repeat center center;
  background-size: cover;
`

export const CardBody = styled.div`
  padding: 14px;
  min-height: 150px;
`
