import React from 'react'
import { categories } from '../../data/categories'
import { formatDate } from '../../helpers/dateFilter'
import { Item } from '../../types/Item'
import * as C from './styles'

type Props = {
  item: Item
}
const TableItem = ({ item }: Props) => {
  return (
    <C.Tableline>
      <C.Tablecolumn>{formatDate(item.date)}</C.Tablecolumn>
      <C.Tablecolumn>
        <C.Category color={categories[item.category].color}>
          {categories[item.category].title}
        </C.Category>
      </C.Tablecolumn>
      <C.Tablecolumn>{item.title}</C.Tablecolumn>
      <C.Tablecolumn>
        <C.ValueColumn
          className="value"
          colorExpensive={categories[item.category].expense}
        >
          R$ {item.value.toFixed(2)}
        </C.ValueColumn>
      </C.Tablecolumn>
    </C.Tableline>
  )
}

export default TableItem
