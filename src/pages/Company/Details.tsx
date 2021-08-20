import { Route, Switch, useHistory, useLocation } from 'react-router-dom'
import { Flex, Box } from '@chakra-ui/react'

import { CompanySidebar } from '../../components/shared'
import { companyLinks } from '../../config/links'
import DefaultLayout from '../../layouts/DefaultLayout'
import PublicLayout from '../../layouts/PublicLayout'

import Profile from './Profile'
import Contact from './Contact'
import BoatProduct from './BoatProduct'
import ProductsServices from './ProductsServices'
import Exhibitor from './Exhibitor'
import ExhibitorBoatProducts from './ExhibitorBoatProducts'
import ExhibitorProductsServices from './ExhibitorProductsServices'

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

  const Container: React.FC = ({ children }) =>
    isPrivate ? (
      <DefaultLayout noXPadding noYPadding>
        {children}
      </DefaultLayout>
    ) : (
      <PublicLayout>{children}</PublicLayout>
    )

  return (
    <Container>
      <Flex>
        <CompanySidebar />
        <Box w="100%">
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
            <Route exact path="/company/:id/products-services">
              <ProductsServices />
            </Route>
            <Route exact path="/company/:id/exhibitor">
              <Exhibitor />
            </Route>
            <Route exact path="/company/:id/exhibitor-boat-products">
              <ExhibitorBoatProducts />
            </Route>
            <Route exact path="/company/:id/exhibitor-products-services">
              <ExhibitorProductsServices />
            </Route>
          </Switch>
        </Box>
      </Flex>
    </Container>
  )
}

export default Details
