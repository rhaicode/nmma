import { Box, Grid } from '@chakra-ui/react'
import React from 'react'
import { ThemedLabel, ThemedInput, ThemedSelect } from '../../shared'

const options = {
  companyTypeOptions: [
    {
      value: 'brand',
      label: 'Brand',
    },
    { value: 'dealer', label: 'Dealer' },
  ],
  yesOrNo: [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' },
  ],
}

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
          <ThemedInput
            id="sourceCompanyCode"
            defaultValue="CBS2021"
            color="black"
          />
        </Box>
        <Box>
          <ThemedLabel htmlFor="parentCompanyId">Parent Company ID</ThemedLabel>
          <ThemedInput
            id="parentCompanyId"
            defaultValue="CD12312"
            color="black"
          />
        </Box>
        <Box>
          <ThemedLabel htmlFor="name">Name</ThemedLabel>
          <ThemedInput id="name" defaultValue="Yamaha" color="black" />
        </Box>
        <Box>
          <ThemedLabel htmlFor="address">Address</ThemedLabel>
          <ThemedInput id="name" defaultValue="123 Street Name" color="black" />
        </Box>
        <Box>
          <ThemedLabel htmlFor="phone">Phone</ThemedLabel>
          <ThemedInput id="phone" defaultValue="214-4560" color="black" />
        </Box>
        <Box>
          <ThemedLabel htmlFor="website">Website</ThemedLabel>
          <ThemedInput
            id="website"
            defaultValue="www.yamaha.com"
            color="black"
          />
        </Box>
        <Box>
          <ThemedLabel htmlFor="facebook">Facebook</ThemedLabel>
          <ThemedInput
            id="facebook"
            defaultValue="facebook.com/yamaha"
            color="black"
          />
        </Box>
        <Box>
          <ThemedLabel htmlFor="linkedin">Linkedin</ThemedLabel>
          <ThemedInput
            id="linkedin"
            defaultValue="linkedin.com/yamaha"
            color="black"
          />
        </Box>
        <Box>
          <ThemedLabel htmlFor="companyType">Company Type</ThemedLabel>
          <ThemedSelect
            id="companyType"
            options={options.companyTypeOptions}
            isSearchable={false}
            defaultValue={options.companyTypeOptions[0]}
            maxWidthOptions={299}
            color="black"
          />
        </Box>
        <Box>
          <ThemedLabel htmlFor="nmmaMembershipStatus">
            NMMA Membership Status
          </ThemedLabel>
          <ThemedInput
            id="nmmaMembershipStatus"
            defaultValue="Dealer"
            color="black"
          />
        </Box>
      </Grid>
      <Grid
        templateColumns="repeat(3,1fr)"
        autoColumns="max-content"
        autoRows="auto"
        columnGap="19px"
        mt="18px"
      >
        <Box>
          <ThemedLabel htmlFor="nmmaDivision">NMMA Division</ThemedLabel>
          <ThemedInput id="nmmaDivision" defaultValue="Dealer" color="black" />
        </Box>
        <Box>
          <ThemedLabel htmlFor="isNmmaCertified">Is NMMA Certified</ThemedLabel>
          <ThemedSelect
            id="isNmmaCertified"
            options={options.yesOrNo}
            isSearchable={false}
            defaultValue={options.yesOrNo[0]}
            maxWidthOptions={188}
            color="black"
          />
        </Box>
        <Box>
          <ThemedLabel htmlFor="isMraaDealerCertified">
            Is MRAA Dealer Certified
          </ThemedLabel>
          <ThemedSelect
            id="isMraaDealerCertified"
            options={options.yesOrNo}
            isSearchable={false}
            defaultValue={options.yesOrNo[0]}
            maxWidthOptions={188}
            color="black"
          />
        </Box>
      </Grid>
    </Box>
  </form>
)

export default CompanyForm
