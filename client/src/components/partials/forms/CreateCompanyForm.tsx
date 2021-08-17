import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Box,
  Grid,
} from '@chakra-ui/react'
import {
  ThemedButton,
  ThemedInput,
  ThemedLabel,
  ThemedSelect,
} from '../../shared'

type CreateCompanyFormProps = {
  isOpen: boolean
  onClose: () => void
}

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

const CreateCompanyForm: React.FC<CreateCompanyFormProps> = ({
  isOpen,
  onClose,
}) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent p="0px" minW="700px">
      <form>
        <ModalHeader textAlign="center" pt="50px">
          <Text as="span" fontWeight="600" fontSize="32px">
            Company
          </Text>
        </ModalHeader>
        <ModalCloseButton
          color="mediumGray"
          marginTop="15px"
          marginRight="10px"
        />
        <ModalBody paddingLeft="32px" paddingRight="32px">
          <Grid
            mt="20px"
            templateColumns="repeat(2,1fr)"
            autoColumns="max-content"
            autoRows="auto"
            rowGap="18px"
            columnGap="16px"
          >
            <Box>
              <ThemedLabel htmlFor="sourceCompanyCode">
                Source Company Code
              </ThemedLabel>
              <ThemedInput id="sourceCompanyCode" />
            </Box>
            <Box>
              <ThemedLabel htmlFor="parentCompanyId">
                Parent Company ID
              </ThemedLabel>
              <ThemedInput id="parentCompanyId" />
            </Box>
            <Box>
              <ThemedLabel htmlFor="name">Name</ThemedLabel>
              <ThemedInput id="name" />
            </Box>
            <Box>
              <ThemedLabel htmlFor="address">Address</ThemedLabel>
              <ThemedInput id="name" />
            </Box>
            <Box>
              <ThemedLabel htmlFor="phone">Phone</ThemedLabel>
              <ThemedInput id="phone" />
            </Box>
            <Box>
              <ThemedLabel htmlFor="website">Website</ThemedLabel>
              <ThemedInput id="website" />
            </Box>
            <Box>
              <ThemedLabel htmlFor="facebook">Facebook</ThemedLabel>
              <ThemedInput id="facebook" />
            </Box>
            <Box>
              <ThemedLabel htmlFor="linkedin">Linkedin</ThemedLabel>
              <ThemedInput id="linkedin" />
            </Box>
            <Box>
              <ThemedLabel htmlFor="companyType">Company Type</ThemedLabel>
              <ThemedSelect
                id="companyType"
                options={options.companyTypeOptions}
                isSearchable={false}
                defaultValue={options.companyTypeOptions[0]}
                maxWidthOptions={299}
              />
            </Box>
            <Box>
              <ThemedLabel htmlFor="nmmaMembershipStatus">
                NMMA Membership Status
              </ThemedLabel>
              <ThemedInput id="nmmaMembershipStatus" />
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
              <ThemedInput id="nmmaDivision" />
            </Box>
            <Box>
              <ThemedLabel htmlFor="isNmmaCertified">
                Is NMMA Certified
              </ThemedLabel>
              <ThemedSelect
                id="isNmmaCertified"
                options={options.yesOrNo}
                isSearchable={false}
                defaultValue={options.yesOrNo[0]}
                maxWidthOptions={188}
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
              />
            </Box>
          </Grid>
        </ModalBody>
        <ModalFooter justifyContent="center" pt="46px" pb="48px">
          <ThemedButton
            type="button"
            onClick={onClose}
            height="55px"
            width="158px"
          >
            <Text as="span">Submit</Text>
          </ThemedButton>
        </ModalFooter>
      </form>
    </ModalContent>
  </Modal>
)

export default CreateCompanyForm
