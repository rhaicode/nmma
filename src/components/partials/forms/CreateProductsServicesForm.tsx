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

type CreateProductsServicesFormProps = {
  isOpen: boolean
  onClose: () => void
}

const options = {
  category: [
    {
      value: 'boats',
      label: 'Boats',
    },
    { value: 'marineAccessories', label: 'Marine Accessories' },
    {
      value: 'fishingHuntingOutdoorGear',
      label: 'Fishing, Hunting & Outdoor Gear',
    },
    { value: 'waterSportsEquipment', label: 'Water Sports Equipment' },
    {
      value: 'marineElectronicsAndNavigation',
      label: 'Marine Electronics & Navigation',
    },
  ],
  subCategory: [
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
  yesOrNo: [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' },
  ],
}

const CreateProductsServicesForm: React.FC<CreateProductsServicesFormProps> = ({
  isOpen,
  onClose,
}) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent p="0px" minW="700px">
      <form>
        <ModalHeader textAlign="center" pt="50px">
          <Text as="span" fontWeight="600" fontSize="32px">
            Products &amp; Services
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
              <ThemedLabel htmlFor="name">Name</ThemedLabel>
              <ThemedInput id="name" />
            </Box>
            <Box>
              <ThemedLabel htmlFor="brandName">Brand Name</ThemedLabel>
              <ThemedInput id="brandName" />
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
              <ThemedLabel htmlFor="category">Category</ThemedLabel>
              <ThemedSelect
                id="category"
                options={options.category}
                isSearchable={false}
                defaultValue={options.category[0]}
                maxWidthOptions={299}
              />
            </Box>
            <Box>
              <ThemedLabel htmlFor="subCategory">Sub Category</ThemedLabel>
              <ThemedSelect
                id="subCategory"
                options={options.subCategory}
                isSearchable={false}
                defaultValue={options.subCategory[0]}
                maxWidthOptions={299}
              />
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

export default CreateProductsServicesForm
