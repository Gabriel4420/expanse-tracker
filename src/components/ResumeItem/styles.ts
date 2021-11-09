import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
`
export const Title = styled.h2`
  text-align: center;
  font-weight: 300;
  color: #817b7b;
  margin-bottom: 5px;
  font-size: 20px;
`
export const Info = styled.h4<{ colorText: string }>`
  text-align: center;
  font-weight: bold;
  color: ${(props) => props.colorText};
  font-size: 18px;
`
