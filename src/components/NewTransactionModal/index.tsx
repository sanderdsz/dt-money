import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox } from './styles'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { FormEvent, useState } from 'react'
import { useTransactions } from '../../hooks/useTransactions'

Modal.setAppElement('#root')

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const  { createTransaction } = useTransactions()

  const [type, setType] = useState('deposit')
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    createTransaction({
      title,
      amount,
      category,
      type
    });
    setType('deposit');
    setTitle('');
    setAmount(0);
    setCategory('');
    onRequestClose();
  }

  return(
      <Modal 
          isOpen={isOpen} 
          onRequestClose={onRequestClose}
          overlayClassName='react-modal-overlay'
          className='react-modal-content'
        >
          <button 
            className='react-modal-close' 
            type="button" 
            onClick={onRequestClose}
          >
            <img 
              src={closeImg} 
              alt="Close" 
            />
          </button>
          <Container onSubmit={handleCreateNewTransaction}>
            <h2>Register Transaction</h2>
            <input 
              type="text" 
              placeholder="Title"
              value={title}
              onChange={event => setTitle(event.target.value)} 
            />
            <input 
              type="number" 
              placeholder="Value" 
              value={amount}
              onChange={event => setAmount(Number(event.target.value))} 
            />
            <TransactionTypeContainer>
              <RadioBox 
                type="button"
                onClick={() => {setType('deposit')}}
                isActive={type === 'deposit'}
                activeColor="green"
              >
                <img 
                  src={incomeImg} 
                  alt="Income" 
                />
                <span>Income</span>
              </RadioBox>
              <RadioBox 
                type="button"
                onClick={() => {setType('withdraw')}}
                isActive={type === 'withdraw'}
                activeColor="red"
              >
                <img 
                  src={outcomeImg} 
                  alt="Outcome" 
                />
                <span>Outcome</span>
              </RadioBox>
            </TransactionTypeContainer>
            <input 
              type="text" 
              placeholder="Category"
              value={category}
              onChange={event => setCategory(event.target.value)} 
            />
            <button type="submit">
              Register
            </button>
          </Container>
      </Modal>
  )
}