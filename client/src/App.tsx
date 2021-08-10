import { Switch, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'

const App: React.FC = () => (
  <Switch>
    <Route exact path="/">
      <Dashboard />
    </Route>
    <Route exact path="/event">
      <Dashboard />
    </Route>
    <Route exact path="/company">
      <Dashboard />
    </Route>
  </Switch>
)

export default App
