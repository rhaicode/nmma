import { Box, Flex, Text } from '@chakra-ui/react'
import { useHistory, useLocation } from 'react-router-dom'

import links from '../../config/links'
import { ReactComponent as DiscoverBoatingLogo } from '../../assets/discover-boating.svg'

const Sidebar: React.FC = () => {
  const location = useLocation()
  const history = useHistory()

  return (
    <Box minH="100vh" w="245px" backgroundColor="black">
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
              alignItems="center"
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
              <Box width="48px" height="20px">
                {l.icon}
              </Box>

              <Text
                as="span"
                color="white"
                fontWeight="300"
                fontSize="16px"
                display="block"
                lineHeight="26px"
                mt="8px"
              >
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
