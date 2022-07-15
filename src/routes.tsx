import {
  BrowserRouter as Router,
  Route,
  Routes as Switch
} from 'react-router-dom'
import { CreateProduct } from './pages/CreateProduct'
import { Home } from './pages/home'

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route path='/' element={<Home />} />
        <Route path='/novoproduto' element={<CreateProduct />} />
      </Switch>
    </Router>
  )
}