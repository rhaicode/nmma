import React from 'react'
import { Flex, Text, Box, Button } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import { startCase } from 'lodash'
import { FiEdit2 } from 'react-icons/fi'

import { CompanyForm } from '../../components/partials'

const Profile: React.FC = () => {
  const location = useLocation()
  const split = location.pathname.split('/')
  const name = split[2]
  return (
    <Flex w="full" pb="171px">
      <Box mx="auto" mt="54px">
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <Text as="span" fontSize="32px" fontWeight="600">
              {startCase(name)}
            </Text>
            <Text as="span" display="block" fontSize="13px" color="darkGray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Text>
          </Box>
          <Button
            leftIcon={<FiEdit2 />}
            variant="outline"
            color="violet"
            borderColor="violet"
            h="55px"
            w="131px"
            borderRadius="10px"
          >
            <Text as="span" fontWeight="400" fontSize="16px" ml="8px">
              Edit
            </Text>
          </Button>
        </Flex>
        <CompanyForm />
      </Box>
    </Flex>
  )
}

export default Profile
