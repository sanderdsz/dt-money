import incomeImg from '../../assets/income.svg'
import expenseImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { Container } from './styles'

export function Summary() {
  return (
    <>
      <Container>
        <div>
          <header>
            <p>Incomes</p>
            <img src={incomeImg} alt="Incomes" />
          </header>
          <strong>
            R$ 1000,00
          </strong>
        </div>
        <div>
          <header>
            <p>Expenses</p>
            <img src={expenseImg} alt="Expenses" />
          </header>
          <strong>
           R$ 1000,00
          </strong>
        </div>
        <div className='highlight-background'>
          <header>
            <p>Total</p>
            <img src={totalImg} alt="Total" />
          </header>
          <strong>
            R$ 0,00
          </strong>
        </div>
      </Container>
    </>
  )
}