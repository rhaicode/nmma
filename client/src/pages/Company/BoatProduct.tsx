import { Flex, Box, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { FiPlus } from 'react-icons/fi'
import uuid from 'react-uuid'

import { CreateContactForm } from '../../components/partials'
import { ThemedButton, ThemedTable } from '../../components/shared'
import { StatusName } from '../../components/shared/Status'

const columns = [
  'ID',
  'Producer Event Code',
  'Event Family',
  'Description',
  'Location',
  'Venue',
  'Start Date',
  'End Date',
  'Status',
  'Website',
]
const list = Array.from({ length: 7 }).map(() => ({
  uuid: uuid(),
  id: '001',
  producerEventCode: 'CBS2021',
  eventFamily: 'All iterations of the...',
  description: 'Lorem ipsum dolor...',
  location: '123 Street Name...',
  venue: '123 Street Name...',
  startDate: 'Aug 10 2021',
  endDate: 'Aug 10 2021',
  status: StatusName.Pending,
  website: 'www.example....',
}))

const BoatProduct: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Flex w="full" pb="171px">
        <Box mx="auto" mt="54px">
          <Flex
            justifyContent="space-between"
            alignItems="center"
            ml="51px"
            w="46.25%"
          >
            <Box>
              <Text as="span" fontSize="32px" fontWeight="600">
                Boat Product
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
          <Box position="relative">
            <ThemedTable columns={columns} rows={list} />
          </Box>
        </Box>
      </Flex>

      <CreateContactForm isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default BoatProduct
