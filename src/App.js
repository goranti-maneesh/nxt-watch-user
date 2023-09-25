import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'
import User from './components/User'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/user" component={User} />
      <Route exact path="/products" component={Products} />
    </Switch>
  </>
)
export default App
