import { Button, Flex, Text } from '@chakra-ui/react'
import { FiPlus } from 'react-icons/fi'
import uuid from 'react-uuid'

import { ThemedTable } from '../components/shared'
import DefaultLayout from '../layouts/DefaultLayout'

const columns = [
  'ID',
  'Source Code',
  'Parent ID',
  'Name',
  'Address',
  'Phone',
  'Website',
  'Facebook',
  'Linkedin',
  'Company type',
  'NMMA Membership Status',
  'NMMA Division',
  'Is NMMA Certified',
  'Is MRRA Dealer Certified',
]
const list = Array.from({ length: 7 }).map(() => ({
  uuid: uuid(),
  id: '001',
  sourceCode: 'CBS2021',
  parentId: 'CID12321',
  name: 'Yamaha',
  address: '123 Street Name...',
  phone: '214-4560',
  website: 'www.website...',
  facebook: 'facebook...',
  linkedin: 'linkedin...',
  companyType: 'Dealer',
  nmmaMembershipStatus: 'Dealer',
  nmmaDivision: 'NMMA specific',
  isNmmaCertified: 'Yes',
  isMrraDealerCertified: 'Yes',
}))

const Company: React.FC = () => (
  <DefaultLayout noXPadding>
    <Flex justifyContent="space-between" alignItems="center" px="49px">
      <Text as="span" fontSize="32px" fontWeight="600">
        Company
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

export default Company
