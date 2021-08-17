import { Box, Grid } from '@chakra-ui/react'
import React from 'react'
import { ThemedLabel, ThemedInput } from '../../shared'

const CompanyForm: React.FC = () => (
  <form>
    <Box backgroundColor="white" p="32px 29px" borderRadius="10px" mt="49px">
      <Grid
        templateColumns="repeat(2,minmax(360px, 1fr))"
        autoColumns="max-content"
        autoRows="auto"
        rowGap="18px"
        columnGap="16px"
      >
        <Box>
          <ThemedLabel htmlFor="sourceCompanyCode">
            Source Company Code
          </ThemedLabel>
          <ThemedInput id="sourceCompanyCode" color="black" />
        </Box>
        <Box>
          <ThemedLabel htmlFor="parentCompanyId">Company</ThemedLabel>
          <ThemedInput id="parentCompanyId" color="black" />
        </Box>
        <Box>
          <ThemedLabel htmlFor="firstName">First Name</ThemedLabel>
          <ThemedInput id="firstName" color="black" />
        </Box>
        <Box>
          <ThemedLabel htmlFor="lastName">Last Name</ThemedLabel>
          <ThemedInput id="lastName" color="black" />
        </Box>
        <Box>
          <ThemedLabel htmlFor="prefix">Prefix</ThemedLabel>
          <ThemedInput id="prefix" color="black" />
        </Box>
        <Box>
          <ThemedLabel htmlFor="address">Address</ThemedLabel>
          <ThemedInput id="address" color="black" />
        </Box>
        <Box>
          <ThemedLabel htmlFor="email">Email</ThemedLabel>
          <ThemedInput id="email" color="black" />
        </Box>
        <Box>
          <ThemedLabel htmlFor="phone">Phone</ThemedLabel>
          <ThemedInput id="phone" color="black" />
        </Box>
        <Box>
          <ThemedLabel htmlFor="facebook">Facebook</ThemedLabel>
          <ThemedInput id="facebook" color="black" />
        </Box>
        <Box>
          <ThemedLabel htmlFor="linkedin">Linkedin</ThemedLabel>
          <ThemedInput id="linkedin" color="black" />
        </Box>
        <Box gridColumn="1/3">
          <ThemedLabel htmlFor="title">Title</ThemedLabel>
          <ThemedInput id="title" color="black" />
        </Box>
      </Grid>
    </Box>
  </form>
)

export default CompanyForm
