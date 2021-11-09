import * as C from './styles'

interface ResumeItemProps {
  title: string
  value: number
  colorText: string
}

const ResumeItem = ({ title, value, colorText }: ResumeItemProps) => {
  return (
    <C.Container>
      <C.Title >{title}</C.Title>
      <C.Info colorText={colorText}>R$ {value}</C.Info>
    </C.Container>
  )
}

export default ResumeItem
