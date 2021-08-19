import { Flex, Box, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { FiPlus } from 'react-icons/fi'

import uuid from 'react-uuid'

import { CreateExhibitorForm } from '../../components/partials'
import { ThemedButton, ThemedTable } from '../../components/shared'
import { StatusName } from '../../components/shared/Status'

const columns = [
  'ID',
  'Source Exhibitor ID',
  'Parent Exhibitor ID',
  'Event',
  'Contact',
  'Exhibitor Type',
  'Status',
  'Booths',
  'Order',
  'Boat Products',
  'Products Services',
]
const list = Array.from({ length: 7 }).map(() => ({
  uuid: uuid(),
  id: '001',
  sourceExhibitorId: 'Company Name',
  parentExhibitorId: 'CBS2021',
  event: 'Sportfisher',
  contact: '123-456789',
  exhibitorType: 'Dealer',
  status: StatusName.Active,
  booths: '-',
  order: '-',
  boatProducts: 'All Purpose Fishing Boats',
  productsServices: '-',
}))

const Exhibitor: React.FC = () => {
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
            Exhibitor
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
      <CreateExhibitorForm isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}

export default Exhibitor
