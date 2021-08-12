import { Box, Flex, Text } from '@chakra-ui/react'
import { useHistory, useLocation } from 'react-router-dom'

import links from '../../config/links'
import { ReactComponent as DiscoverBoatingLogo } from '../../assets/svg/discover-boating.svg'

const Sidebar: React.FC = () => {
  const location = useLocation()
  const history = useHistory()

  return (
    <Box minH="100vh" w="245px" backgroundColor="black" flex="none">
      <Box padding="30px">
        <DiscoverBoatingLogo />
      </Box>
      <Box as="ul" mt="50px">
        {links.map(l => {
          const path = location.pathname.split('/')[1]
          const isActive = `/${path}` === l.url

          return (
            <Flex
              as="li"
              key={l.label}
              padding="16px 30px"
              cursor="pointer"
              {...(isActive && {
                backgroundColor: ' rgba(255, 255, 255, 0.25)',
              })}
              onClick={() => {
                history.push(l.url)
              }}
              mb="4px"
            >
              <Text as="span" mr="20px" mt="1px">
                {l.icon}
              </Text>

              <Text as="span" color="white" fontWeight="300" fontSize="16px">
                {l.label}
              </Text>
            </Flex>
          )
        })}
      </Box>
    </Box>
  )
}

export default Sidebar
