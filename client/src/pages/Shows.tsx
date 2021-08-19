import { Flex, Text, useDisclosure } from '@chakra-ui/react'
import uuid from 'react-uuid'
import { FiPlus } from 'react-icons/fi'

import { ThemedButton, ThemedTable } from '../components/shared'
import DefaultLayout from '../layouts/DefaultLayout'
import { StatusName } from '../components/shared/Status'
import { CreateShowForm } from '../components/partials'

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

const Shows: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <DefaultLayout noXPadding>
        <Flex justifyContent="space-between" alignItems="center" px="49px">
          <Text as="span" fontSize="32px" fontWeight="600">
            Shows
          </Text>
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
        <ThemedTable columns={columns} rows={list} mt="60px" />
      </DefaultLayout>
      <CreateShowForm isOpen={isOpen} onClose={onClose} />
    </>
  )
}
export default Shows
