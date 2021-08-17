import { Route, Switch, useHistory, useLocation } from 'react-router-dom'
import { Flex } from '@chakra-ui/react'

import { CompanySidebar } from '../../components/shared'
import { companyLinks } from '../../config/links'
import DefaultLayout from '../../layouts/DefaultLayout'
import PublicLayout from '../../layouts/PublicLayout'

import Profile from './Profile'
import Contact from './Contact'
import BoatProduct from './BoatProduct'

const Details: React.FC = () => {
  const location = useLocation()
  const { push } = useHistory()
  const split = location.pathname.split('/')

  const isValidName = true
  const isPrivate = localStorage.getItem('accessToken')

  const isValidSubroute =
    (split.length === 3 && isValidName) ||
    (split.length === 4 && !!companyLinks.find(c => c.url === `/${split[3]}`))

  if (!isValidSubroute) {
    push('/404')
  }

  return isPrivate ? (
    <DefaultLayout noXPadding noYPadding>
      <Flex>
        <CompanySidebar />
        <Switch>
          <Route exact path="/company/:id">
            <Profile />
          </Route>
          <Route exact path="/company/:id/contact">
            <Contact />
          </Route>
          <Route exact path="/company/:id/boat-product">
            <BoatProduct />
          </Route>
          <Route exact path="/company/:id/non-boat-product">
            <div />
          </Route>
          <Route exact path="/company/:id/exhibitor">
            <div />
          </Route>
          <Route exact path="/company/:id/exhibitor-boat-products">
            <div />
          </Route>
          <Route exact path="/company/:id/exhibitor-products-services">
            <div />
          </Route>
        </Switch>
      </Flex>
    </DefaultLayout>
  ) : (
    <PublicLayout>
      <Flex>
        <CompanySidebar />
        <Switch>
          <Route exact path="/company/:id">
            <Profile />
          </Route>
          <Route exact path="/company/:id/contact">
            <Contact />
          </Route>
          <Route exact path="/company/:id/boat-product">
            <BoatProduct />
          </Route>
          <Route exact path="/company/:id/non-boat-product">
            <div />
          </Route>
          <Route exact path="/company/:id/exhibitor">
            <div />
          </Route>
          <Route exact path="/company/:id/exhibitor-boat-products">
            <div />
          </Route>
          <Route exact path="/company/:id/exhibitor-products-services">
            <div />
          </Route>
        </Switch>
      </Flex>
    </PublicLayout>
  )
}

export default Details
