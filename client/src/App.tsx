import { Switch, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Shows from './pages/Shows'
import Company from './pages/Company'

const App: React.FC = () => (
  <Switch>
    <Route exact path="/">
      <Dashboard />
    </Route>
    <Route exact path="/shows">
      <Shows />
    </Route>
    <Route exact path="/company">
      <Company />
    </Route>
  </Switch>
)

export default App
