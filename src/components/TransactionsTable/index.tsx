import { useEffect } from 'react'
import { Container } from './styles'
import { api } from '../../services/api'

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions')
    .then(response => console.log(response.data))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Foo Bar</td>
            <td className='deposit'>RS 50,00</td>
            <td>Food</td>
            <td>25/12/2021</td>
          </tr>
          <tr>
            <td>Lorem Ipsum</td>
            <td className='withdraw'>- RS 25,00</td>
            <td>Personal</td>
            <td>31/12/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}