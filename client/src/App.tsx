import { Switch, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Shows from './pages/Shows'
import Company from './pages/Company/index'
import CompanyDetails from './pages/Company/Details'

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
    <Route path="/company/:id">
      <CompanyDetails />
    </Route>
  </Switch>
)

export default App
