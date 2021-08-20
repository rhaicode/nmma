import { Flex, Box, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { FiPlus } from 'react-icons/fi'

import uuid from 'react-uuid'

import { CreateContactForm } from '../../components/partials'
import { ThemedButton, ThemedTable } from '../../components/shared'

const columns = [
  'ID',
  'Source Contact Code',
  'Company',
  'First Name',
  'Last Name',
  'Prefix',
  'Address',
  'Email',
  'Phone',
  'Facebook',
  'Linkedin',
  'Title',
]
const list = Array.from({ length: 7 }).map(() => ({
  uuid: uuid(),
  id: '001',
  sourceContactCode: 'CCSC1',
  company: 'Company A',
  firstName: 'John',
  lastName: 'Doe',
  prefix: 'Mr.',
  address: 'Oregon',
  email: 'sampleemail@getnada.com',
  phone: '123456',
  facebook: 'facebook...',
  linkedin: 'linkedin...',
  title: 'Sample title.',
}))

const Contact: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box pb="171px">
      <Flex
        justifyContent="space-between"
        mt="54px"
        w="calc(calc(100vw - 245px) - 302px)"
        ml="51px"
      >
        <Box>
          <Text as="span" fontSize="32px" fontWeight="600">
            Contact
          </Text>
          <Text as="span" display="block" fontSize="13px" color="darkGray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Text>
        </Box>
        <ThemedButton
          type="button"
          onClick={onOpen}
          leftIcon={<FiPlus color="white" fontSize="22px" />}
        >
          <Text as="span" ml="8px">
            Create
          </Text>
        </ThemedButton>
      </Flex>
      <ThemedTable
        columns={columns}
        rows={list}
        w="calc(100% - 200px)"
        mt="47px"
      />
      <CreateContactForm isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}

export default Contact
