import { Box, Text } from '@chakra-ui/react'
import { startCase } from 'lodash'
import { useHistory, useLocation } from 'react-router-dom'

import { companyLinks } from '../../config/links'

const CompanySidebar: React.FC = () => {
  const location = useLocation()
  const { push } = useHistory()
  const split = location.pathname.split('/')
  const isValidName = true.valueOf
  const name = split[2]

  return (
    <Box minH="100vh" w="200px" backgroundColor="white" flex="none" pt="23px">
      <Box as="ul">
        <Box as="li" listStyleType="none">
          <Text
            as="span"
            color="darkGray"
            fontSize="16px"
            pl="23px"
            display="block"
            maxW="17ch"
            cursor="pointer"
            onClick={() => {
              push(`/company/${name}`)
            }}
            {...(split.length === 3 && isValidName && { color: 'violet' })}
          >
            {startCase(name)}
          </Text>
        </Box>
        {companyLinks.map(c => {
          const isActive = split.length === 4 && `/${split[3]}` === c.url
          return (
            <Box
              as="li"
              listStyleType="none"
              key={c.label}
              cursor="pointer"
              onClick={() => {
                push(`/company/${name}${c.url}`)
              }}
            >
              <Text
                as="span"
                color="darkGray"
                fontSize="16px"
                pl="23px"
                display="block"
                maxW="17ch"
                mt="48px"
                {...(isActive && { color: 'violet' })}
              >
                {c.label}
              </Text>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default CompanySidebar
