import { Flex, Text, useDisclosure } from '@chakra-ui/react'
import { FiPlus } from 'react-icons/fi'
import uuid from 'react-uuid'
import { CreateCompanyForm } from '../components/partials'

import { ThemedButton, ThemedTable } from '../components/shared'
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

const Company: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <DefaultLayout noXPadding>
        <Flex justifyContent="space-between" alignItems="center" px="49px">
          <Text as="span" fontSize="32px" fontWeight="600">
            Company
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
        <ThemedTable columns={columns} rows={list} />
      </DefaultLayout>
      <CreateCompanyForm isOpen={isOpen} onClose={onClose} />
    </>
  )
}
export default Company
