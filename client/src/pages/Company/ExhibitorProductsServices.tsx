import { Flex, Box, Text, useDisclosure, Image } from '@chakra-ui/react'
import { sample } from 'lodash'
import React from 'react'
import { FiPlus } from 'react-icons/fi'

import uuid from 'react-uuid'

import { CreateExhibitorProductsServicesForm } from '../../components/partials'
import { ThemedButton, ThemedTable } from '../../components/shared'
import { StatusName } from '../../components/shared/Status'

const columns = ['Exhibitor ID', 'Image', 'Description', 'Status']
const list = Array.from({ length: 7 }).map(() => ({
  uuid: uuid(),
  exhibitorId: 'Product Name',
  image: <Image src="/assets/png/boat.png" alt="boat" />,
  description: 'Lorem ipsum dolor sit',
  status: sample([
    StatusName.Pending,
    StatusName.Approved,
    StatusName.Declined,
  ]),
}))

const ExhibitorProductsServices: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box pb="171px" maxW="min-content" mx="auto">
      <Flex
        justifyContent="space-between"
        mt="54px"
        w="calc(100% - 100px)"
        ml="51px"
      >
        <Box>
          <Text as="span" fontSize="32px" fontWeight="600">
            Exhibitor Products &amp; Services
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
      <ThemedTable columns={columns} rows={list} mt="47px" w="100%" />
      <CreateExhibitorProductsServicesForm isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}

export default ExhibitorProductsServices
