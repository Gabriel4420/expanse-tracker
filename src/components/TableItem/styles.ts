import styled from 'styled-components'

export const Tableline = styled.tr``
export const Tablecolumn = styled.td`
  background-color: ${(props) => props.color};
  padding: ${(props) => (props.color ? '5px 10px' : '10px 0')};
  border-radius: ${(props) => props.color && '10px'};
  color: ${(props) => (props.color ? '#fff' : 'black')};
  text-align: ${(props) => props.color && 'center'};
`
export const Category = styled.div<{ color: string }>`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
  background-color: ${(props) => props.color};
`
export const ValueColumn = styled.span<{ colorExpensive?: boolean }>`
  color: ${(props) => (props.colorExpensive ? '#FF0501' : '#00A333')};
  font-weight: bold;
`
