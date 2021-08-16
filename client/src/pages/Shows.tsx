import { Button, Flex, Text } from '@chakra-ui/react'
import uuid from 'react-uuid'
import { FiPlus } from 'react-icons/fi'

import { ThemedTable } from '../components/shared'
import DefaultLayout from '../layouts/DefaultLayout'
import { StatusName } from '../components/shared/Status'

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

const Shows: React.FC = () => (
  <DefaultLayout noXPadding>
    <Flex justifyContent="space-between" alignItems="center" px="49px">
      <Text as="span" fontSize="32px" fontWeight="600">
        Shows
      </Text>
      <Button
        leftIcon={<FiPlus color="white" fontSize="22px" />}
        backgroundColor="violet"
        _hover={{ backgroundColor: '#2e02b4' }}
        _active={{
          backgroundColor: 'violet',
        }}
        height="55px"
        width="158px"
        borderRadius="10px"
        color="white"
        fontSize="16px"
        fontWeight="normal"
      >
        <Text as="span" ml="8px">
          Create
        </Text>
      </Button>
    </Flex>
    <ThemedTable columns={columns} rows={list} />
  </DefaultLayout>
)

export default Shows
