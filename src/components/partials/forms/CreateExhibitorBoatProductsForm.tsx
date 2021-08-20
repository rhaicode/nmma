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
import { StatusName } from '../../shared/Status'

type CreateExhibitorBoatProductsFormProps = {
  isOpen: boolean
  onClose: () => void
}

const options = {
  exhibitor: [
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
  boatProduct: [
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
  brand: [
    { value: 'alumaCraft', label: 'Aluma Craft' },
    { value: 'aquila', label: 'Aquila' },
    { value: 'beneteau', label: 'Beneteau' },
    { value: 'bennington', label: 'Bennington' },
    { value: 'carolinaSkriff', label: 'Carolina Skriff' },
  ],
  status: [
    {
      value: StatusName.Active.toLowerCase(),
      label: StatusName.Active,
    },
    {
      value: StatusName.Pending.toLowerCase(),
      label: StatusName.Pending,
    },
    {
      value: StatusName.Cancelled.toLowerCase(),
      label: StatusName.Cancelled,
    },
  ],
  yesOrNo: [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' },
  ],
}

const CreateExhibitorBoatProductsForm: React.FC<CreateExhibitorBoatProductsFormProps> =
  ({ isOpen, onClose }) => (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p="0px" minW="400px">
        <form>
          <ModalHeader textAlign="center" pt="50px">
            <Text as="span" fontWeight="600" fontSize="32px" display="block">
              Exhibitor
            </Text>
            <Text
              as="span"
              fontWeight="600"
              fontSize="32px"
              mt="-0.5rem"
              display="block"
            >
              Boat Products
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
              templateColumns="1fr"
              autoColumns="max-content"
              autoRows="auto"
              rowGap="18px"
              columnGap="16px"
            >
              <Box>
                <ThemedLabel htmlFor="exhibitor">Exhibitor</ThemedLabel>
                <ThemedSelect
                  id="exhibitor"
                  options={options.exhibitor}
                  isSearchable={false}
                  defaultValue={options.exhibitor[0]}
                  maxWidthOptions={372}
                />
              </Box>
              <Box>
                <ThemedLabel htmlFor="brand">Brand</ThemedLabel>
                <ThemedSelect
                  id="brand"
                  options={options.brand}
                  isSearchable={false}
                  defaultValue={options.brand[0]}
                  maxWidthOptions={372}
                />
              </Box>
              <Box>
                <ThemedLabel htmlFor="boatProduct">Boat Product</ThemedLabel>
                <ThemedSelect
                  id="boatProduct"
                  options={options.boatProduct}
                  isSearchable={false}
                  defaultValue={options.boatProduct[0]}
                  maxWidthOptions={372}
                  isMulti
                />
              </Box>
              <Box>
                <ThemedLabel htmlFor="booth">Booth</ThemedLabel>
                <ThemedInput id="booth" />
              </Box>
              <Box>
                <ThemedLabel htmlFor="status">Status</ThemedLabel>
                <ThemedSelect
                  id="status"
                  options={options.status}
                  isSearchable={false}
                  defaultValue={options.status[0]}
                  maxWidthOptions={372}
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

export default CreateExhibitorBoatProductsForm
