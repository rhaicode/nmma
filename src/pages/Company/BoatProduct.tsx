import { Flex, Box, Text, useDisclosure, Grid, Image } from '@chakra-ui/react'
import React from 'react'
import { FiPlus } from 'react-icons/fi'

import uuid from 'react-uuid'

import { CreateBoatProductForm } from '../../components/partials'
import {
  ThemedButton,
  ThemedSelect,
  ThemedTable,
} from '../../components/shared'

const columns = [
  'ID',
  'Image',
  'Name',
  'Brand Company',
  'Source Product Code',
  'Boat Type',
  'Model Year',
  'Length',
  'Propulsion Type',
  'Certified Flag',
  'Starting Price',
  'Description',
]
const list = Array.from({ length: 7 }).map(() => ({
  uuid: uuid(),
  id: '001',
  image: <Image src="/assets/png/boat.png" alt="boat" />,
  name: 'Sample Boat Name',
  brandCompany: 'Company Name',
  sourceProductCode: 'CBS2021',
  boatType: '-',
  modelYear: '2008',
  length: `19'6"`,
  propulsionType: 'Outboard',
  certifiedFlag: '-',
  startingPrice: '-',
  description: '-',
}))

const options = {
  filters: [{ value: 'all', label: 'All' }],
}

const BoatProduct: React.FC = () => {
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
      <Grid
        w="414px"
        templateColumns="repeat(2, 1fr)"
        columnGap="14px"
        ml="51px"
        mt="47px"
      >
        <ThemedSelect
          id=""
          options={options.filters}
          isSearchable={false}
          defaultValue={options.filters[0]}
          maxWidthOptions={188}
          hasShadow
        />
        <ThemedSelect
          id=""
          options={options.filters}
          isSearchable={false}
          defaultValue={options.filters[0]}
          maxWidthOptions={188}
          hasShadow
        />
      </Grid>
      <ThemedTable
        columns={columns}
        rows={list}
        w="calc(100% - 200px)"
        mt="24px"
      />
      <CreateBoatProductForm isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}

export default BoatProduct
