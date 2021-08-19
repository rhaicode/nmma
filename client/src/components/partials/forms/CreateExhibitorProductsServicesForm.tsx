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

type CreateExhibitorProductsServicesFormProps = {
  isOpen: boolean
  onClose: () => void
}

const options = {
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

const CreateExhibitorProductsServicesForm: React.FC<CreateExhibitorProductsServicesFormProps> =
  ({ isOpen, onClose }) => (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p="0px" minW="750px">
        <form>
          <ModalHeader textAlign="center" pt="50px">
            <Text as="span" fontWeight="600" fontSize="32px" display="block">
              Exhibitor Products
            </Text>
            <Text
              as="span"
              fontWeight="600"
              fontSize="32px"
              mt="-0.5rem"
              display="block"
            >
              &amp; Services
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
                <ThemedLabel htmlFor="status">Status</ThemedLabel>
                <ThemedSelect
                  id="status"
                  options={options.status}
                  isSearchable={false}
                  defaultValue={options.status[0]}
                  maxWidthOptions={299}
                />
              </Box>
              <Box gridColumn="1/3">
                <ThemedLabel htmlFor="uploadFiles">Upload Files</ThemedLabel>
                <ThemedInput id="uploadFiles" />
              </Box>
              <Box gridColumn="1/3">
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

export default CreateExhibitorProductsServicesForm
