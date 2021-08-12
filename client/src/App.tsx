import { Switch, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Event from './pages/Event'
import Company from './pages/Company'

const App: React.FC = () => (
  <Switch>
    <Route exact path="/">
      <Dashboard />
    </Route>
    <Route exact path="/event">
      <Event />
    </Route>
    <Route exact path="/company">
      <Company />
    </Route>
  </Switch>
)

export default App
