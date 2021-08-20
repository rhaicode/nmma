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

type CreateExhibitorFormProps = {
  isOpen: boolean
  onClose: () => void
}

const options = {
  exhibitorType: [
    { value: 'brand', label: 'Brand' },
    { value: 'dealer', label: 'Dealer' },
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
  boatProducts: [
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
  contact: [
    {
      value: 'contactA',
      label: 'Contact A',
    },
    {
      value: 'contactB',
      label: 'Contact B',
    },
  ],
  yesOrNo: [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' },
  ],
}

const CreateExhibitorForm: React.FC<CreateExhibitorFormProps> = ({
  isOpen,
  onClose,
}) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent p="0px" minW="700px">
      <form>
        <ModalHeader textAlign="center" pt="50px">
          <Text as="span" fontWeight="600" fontSize="32px">
            Exhibitor
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
              <ThemedLabel htmlFor="sourceExhibitorId">
                Source Exhibitor ID
              </ThemedLabel>
              <ThemedInput id="sourceExhibitorId" />
            </Box>
            <Box>
              <ThemedLabel htmlFor="parentExhibitorId">
                Parent Exhibitor ID
              </ThemedLabel>
              <ThemedInput id="parentExhibitorId" />
            </Box>
            <Box>
              <ThemedLabel htmlFor="event">Event</ThemedLabel>
              <ThemedInput id="event" />
            </Box>
            <Box>
              <ThemedLabel htmlFor="contact">Contact</ThemedLabel>
              <ThemedSelect
                id="contact"
                options={options.contact}
                isSearchable={false}
                defaultValue={options.contact[0]}
                maxWidthOptions={299}
              />
            </Box>
            <Box>
              <ThemedLabel htmlFor="exhibitorType">Exhibitor Type</ThemedLabel>
              <ThemedSelect
                id="exhibitorType"
                options={options.exhibitorType}
                isSearchable={false}
                defaultValue={options.exhibitorType[0]}
                maxWidthOptions={299}
              />
            </Box>
            <Box>
              <ThemedLabel htmlFor="status">Status</ThemedLabel>
              <ThemedSelect
                id="status"
                options={options.status}
                isSearchable={false}
                defaultValue={options.status[0]}
                maxWidthOptions={299}
              />
            </Box>
            <Box>
              <ThemedLabel htmlFor="booths">Booth(s)</ThemedLabel>
              <ThemedInput id="booths" />
            </Box>
            <Box>
              <ThemedLabel htmlFor="order">Order</ThemedLabel>
              <ThemedInput id="order" />
            </Box>
            <Box>
              <ThemedLabel htmlFor="boatProducts">Boat Products</ThemedLabel>
              <ThemedSelect
                id="boatProducts"
                options={options.boatProducts}
                isSearchable={false}
                defaultValue={options.boatProducts[0]}
                maxWidthOptions={299}
              />
            </Box>
            <Box>
              <ThemedLabel htmlFor="productsServices">
                Products Services
              </ThemedLabel>
              <ThemedInput id="productsServices" />
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

export default CreateExhibitorForm
