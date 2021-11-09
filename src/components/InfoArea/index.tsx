import { formatCurrentMonth } from '../../helpers/dateFilter'
import ResumeItem from '../ResumeItem'
import * as C from './styles'

interface InfoAreaProps {
  currentMonth: string
  onMonthChange: (newMonth: string) => void
  income: number
  expense: number
}

const InfoArea = ({
  currentMonth,
  onMonthChange,
  income,
  expense,
}: InfoAreaProps) => {
  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split('-')
    let crtDate = new Date(parseInt(year), parseInt(month) - 1, 1)
    crtDate.setMonth(crtDate.getMonth() - 1)
    onMonthChange(`${crtDate.getFullYear()} - ${crtDate.getMonth() + 1}`)
  }

  const handleNextMonth = () => {
    let [year, month] = currentMonth.split('-')
    let crtDate = new Date(parseInt(year), parseInt(month) - 1, 1)
    crtDate.setMonth(crtDate.getMonth() + 1)
    onMonthChange(`${crtDate.getFullYear()} - ${crtDate.getMonth() + 1}`)
  }

  return (
    <C.Container>
      <C.MonthArea>
        <C.MonthArrow onClick={handlePrevMonth}>⬅️</C.MonthArrow>
        <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
        <C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>
      </C.MonthArea>
      <C.ResumeArea>
        <ResumeItem title="Receitas" value={income} colorText="#00A333" />
        <ResumeItem title="Despesas" value={expense} colorText="#FF0501" />
        <ResumeItem
          title="Balanço"
          value={income - expense}
          colorText={(income - expense) < 0 ? "#FF0501": "#00A333"}
        />
      </C.ResumeArea>
    </C.Container>
  )
}

export default InfoArea
