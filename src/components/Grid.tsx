import styled from 'styled-components'

interface IRow {
  wrap?: boolean
  align?: 'center' | 'top' | 'bottom' | 'middle' | 'baseline' | 'stretch'
  direction?: 'column' | 'row'
}

interface IColumn {
  offset?: 10 | 20 | 25 | 33.33 | 50 | 66.66 | 75 | 80 | 90
  column: 10 | 20 | 25 | 33.33 | 40 | 50 | 60 | 66.66 | 75 | 80 | 90
}

export default styled.div`
  margin: 0 auto;
  max-width: 112.0rem;
  padding: 0 2.0rem;
  position: relative;
  width: 100%;
`

export const Row = styled.div<IRow>`
  display: flex;
  flex-direction: ${props => props.direction || 'column'};
  padding: 0;
  width: 100%;
  align-items: ${props => props.align};
  flex-wrap: ${props => props.wrap ? 'wrap' : 'no-wrap'};
`

export const Column = styled.div<IColumn>`
  display: block;
  flex: 1 1 auto;
  padding: 0 12px;
  margin-left: ${props => `${props.offset ? props.offset + '%' : 0}`};
  flex: ${props => `0 0 ${props.column}%`};
  max-width: ${props => `${props.column}%`};
  max-width: 100%;
  width: 100%;
`
