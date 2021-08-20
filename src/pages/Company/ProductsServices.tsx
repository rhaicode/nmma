import { Flex, Box, Text, useDisclosure, Grid, Image } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { sample } from 'lodash'
import React from 'react'
import { FiPlus } from 'react-icons/fi'
import uuid from 'react-uuid'

import { CreateProductsServicesForm } from '../../components/partials'
import {
  ThemedButton,
  ThemedSelect,
  ThemedTable,
} from '../../components/shared'

const columns = [
  'ID',
  'Image',
  'Name',
  'Brand Name',
  'Description',
  'Product',
  'Category',
  'Sub Category',
]

const list = Array.from({ length: 7 }).map(() => ({
  uuid: uuid(),
  id: '001',
  image: <Image src="/assets/png/boat.png" alt="boat" />,
  name: sample(['Product A', 'Product B', 'Product C']),
  brandName: 'Company Name',
  description: 'CBS2021',
  product: 'Product Name',
  category: 'Boats',
  subCategory: 'All Purpose Fishing Boats',
}))

const options = {
  filters: [{ value: 'all', label: 'All' }],
}

const StyledThemedTable = styled(ThemedTable)`
  & {
    width: calc(100% - 200px);

    @media (min-width: 1560px) {
      width: calc(100% - 50px);
    }
  }
`

const ProductsServices: React.FC = () => {
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
            Products &amp; Services
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
      <StyledThemedTable columns={columns} rows={list} mt="24px" />
      <CreateProductsServicesForm isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}

export default ProductsServices
