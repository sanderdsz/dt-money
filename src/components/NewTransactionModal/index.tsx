import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox } from './styles'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { FormEvent, useState } from 'react'
import { api } from '../../services/api'

Modal.setAppElement('#root')

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [type, setType] = useState('deposit')
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()
    const data = {type, title, value, category}
    api.post('transactions', data)
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
              value={value}
              onChange={event => setValue(Number(event.target.value))} 
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