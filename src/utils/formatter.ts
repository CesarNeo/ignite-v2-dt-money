export const dateFormatter = (date: string | Date) =>
  new Intl.DateTimeFormat('pt-BR').format(new Date(date))

export const priceFormatter = (price: number | string) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Number(price))
