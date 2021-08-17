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
import { StatusName } from '../../shared/Status'

type CreateShowFormFormProps = {
  isOpen: boolean
  onClose: () => void
}

const options = {
  status: [
    {
      value: StatusName.Pending.toLowerCase(),
      label: StatusName.Pending,
    },
    {
      value: StatusName.Active.toLowerCase(),
      label: StatusName.Active,
    },
    {
      value: StatusName.Cancelled.toLowerCase(),
      label: StatusName.Cancelled,
    },
    {
      value: StatusName.Closed.toLowerCase(),
      label: StatusName.Closed,
    },
  ],
}

const CreateShowFormForm: React.FC<CreateShowFormFormProps> = ({
  isOpen,
  onClose,
}) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent p="0px" minW="700px">
      <form>
        <ModalHeader textAlign="center" pt="50px">
          <Text as="span" fontWeight="600" fontSize="32px">
            Shows
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
              <ThemedLabel htmlFor="producerEventCode">
                Producer Event Code
              </ThemedLabel>
              <ThemedInput id="producerEventCode" />
            </Box>
            <Box>
              <ThemedLabel htmlFor="eventFamily">Event Family</ThemedLabel>
              <ThemedInput id="eventFamily" />
            </Box>
            <Box gridColumn="1 / 3">
              <ThemedLabel htmlFor="description">Description</ThemedLabel>
              <ThemedTextarea id="description" />
            </Box>
            <Box>
              <ThemedLabel htmlFor="location">Location</ThemedLabel>
              <ThemedInput id="location" />
            </Box>
            <Box>
              <ThemedLabel htmlFor="venue">Venue</ThemedLabel>
              <ThemedInput id="venue" />
            </Box>
            <Box>
              <ThemedLabel htmlFor="startDate">Start Date</ThemedLabel>
              <ThemedInput id="startDate" type="date" cursor="pointer" />
            </Box>
            <Box>
              <ThemedLabel htmlFor="endDate">End Date</ThemedLabel>
              <ThemedInput id="endDate" type="date" cursor="pointer" />
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
              <ThemedLabel htmlFor="website">Website</ThemedLabel>
              <ThemedInput id="website" />
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

export default CreateShowFormForm
