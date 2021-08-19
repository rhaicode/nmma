import React from 'react'
import { Flex, Text, Box, useDisclosure } from '@chakra-ui/react'
import { FiPlus } from 'react-icons/fi'

import { ContactForm, CreateContactForm } from '../../components/partials'
import { ThemedButton } from '../../components/shared'

const Contact: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Flex w="full" pb="171px">
        <Box mx="auto" mt="54px">
          <Flex justifyContent="space-between" alignItems="center">
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
          <ContactForm />
        </Box>
      </Flex>
      <CreateContactForm isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default Contact
