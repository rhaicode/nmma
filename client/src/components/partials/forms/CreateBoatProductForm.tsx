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
  ThemedTextarea,
} from '../../shared'

type CreateBoatProductFormProps = {
  isOpen: boolean
  onClose: () => void
}

const options = {
  boatType: [
    {
      value: 'allPurposeFishingBoats',
      label: 'All Purpose Fishing Boats',
    },
    {
      value: 'aluminumFishingBoats',
      label: 'Aluminum  Fishing Boats',
    },
    {
      value: 'bassBoats',
      label: 'Bass Boats',
    },
    {
      value: 'bayBoatsOrFiatBoats',
      label: 'Bay Boats / Fiat Boats',
    },
    {
      value: 'bowriders',
      label: 'Bowriders',
    },
  ],
  propulsionType: [
    {
      value: 'outboard',
      label: 'Outboard',
    },
    {
      value: 'inboard',
      label: 'Inboard',
    },
    {
      value: 'sternDrive',
      label: 'Stern Drive',
    },
    {
      value: 'outboardOrSternDrive',
      label: 'Outboard or Stern Drive',
    },
    {
      value: 'jet',
      label: 'Jet',
    },
  ],
  yesOrNo: [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' },
  ],
}

const CreateBoatProductForm: React.FC<CreateBoatProductFormProps> = ({
  isOpen,
  onClose,
}) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent p="0px" minW="700px">
      <form>
        <ModalHeader textAlign="center" pt="50px">
          <Text as="span" fontWeight="600" fontSize="32px">
            Boat Product
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
              <ThemedLabel htmlFor="brandCompany">Brand Company</ThemedLabel>
              <ThemedInput id="brandCompany" />
            </Box>
            <Box>
              <ThemedLabel htmlFor="sourceProductCode">
                Source Product Code
              </ThemedLabel>
              <ThemedInput id="sourceProductCode" />
            </Box>
            <Box gridColumn="1/3">
              <ThemedLabel htmlFor="uploadFiles">Upload Files</ThemedLabel>
              <ThemedInput id="uploadFiles" />
            </Box>
            <Box gridColumn="1/3">
              <Text as="span" fontWeight="600" color="black" fontSize="18px">
                Options
              </Text>
            </Box>
            <Box>
              <ThemedLabel htmlFor="boatType">Boat Type</ThemedLabel>
              <ThemedSelect
                id="boatType"
                options={options.boatType}
                isSearchable={false}
                defaultValue={options.boatType[0]}
                maxWidthOptions={299}
              />
            </Box>
            <Box>
              <ThemedLabel htmlFor="modelType">Model Type</ThemedLabel>
              <ThemedInput id="modelType" />
            </Box>
            <Box>
              <ThemedLabel htmlFor="length">Length</ThemedLabel>
              <ThemedInput id="length" />
            </Box>
            <Box>
              <ThemedLabel htmlFor="propulsionType">
                Propulsion Type
              </ThemedLabel>
              <ThemedSelect
                id="propulsionType"
                options={options.propulsionType}
                isSearchable={false}
                defaultValue={options.propulsionType[0]}
                maxWidthOptions={299}
              />
            </Box>
            <Box>
              <ThemedLabel htmlFor="certifiedFlag">Certified Flag</ThemedLabel>
              <ThemedInput id="certifiedFlag" />
            </Box>
            <Box>
              <ThemedLabel htmlFor="startingPrice">Starting Price</ThemedLabel>
              <ThemedInput id="startingPrice" />
            </Box>
            <Box gridColumn="1 / 3">
              <ThemedLabel htmlFor="description">Description</ThemedLabel>
              <ThemedTextarea id="description" />
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

export default CreateBoatProductForm
