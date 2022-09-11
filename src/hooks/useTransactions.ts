import { useContext } from 'react'

import { TransactionContext } from '../contexts/TransactionsContext'

export const useTransactions = () => useContext(TransactionContext)
