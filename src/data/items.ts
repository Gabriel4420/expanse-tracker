import { Item } from '../types/Item'

const m = (n: number) => {
  return n - 1
}
export const items: Item[] = [
  {
    date: new Date(2020, m(12), 1),
    category: 'food',
    title: 'McDonalds',
    value: 50.6,
  },
  {
    date: new Date(2021, m(4), 25),
    category: 'food',
    title: 'Burguer King',
    value: 50.6,
  },
  {
    date: new Date(2021, m(11), 8),
    category: 'rent',
    title: 'Aluguel apt',
    value: 2900.6,
  },
  {
    date: new Date(2021, m(11), 15),
    category: 'salary',
    title: 'NHT',
    value: 6000,
  },
]
