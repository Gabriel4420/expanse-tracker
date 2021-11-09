import styled from 'styled-components'

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  display: flex;
  align-items: center;
`
export const InputLabel = styled.label`
  flex: 1;
  margin: 10px;
`
export const InputTitle = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`
export const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 1px solid lightblue;
  border-radius: 5px;
`
export const Select = styled.select`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 1px solid lightblue;
  border-radius: 5px;
`
export const Button = styled.button`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 2px solid #00a333;
  border-radius: 5px;
  background-color: transparent;
  color: #00a333;
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: #00a333;
    color: white;
  }
`
