import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'
import { NewTransactionModal } from './components/NewTransactionModal'
import { useState } from 'react'
import { TransactionsProvider } from './hooks/useTransactions'

export function App() {
  const [isNewTransactionModalOpen, setNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setNewTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <GlobalStyle />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}
      />
    </TransactionsProvider>
  );
}