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
import { ThemedButton, ThemedInput, ThemedLabel } from '../../shared'

type CreateContactFormProps = {
  isOpen: boolean
  onClose: () => void
}

const CreateContactForm: React.FC<CreateContactFormProps> = ({
  isOpen,
  onClose,
}) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent p="0px" minW="700px">
      <form>
        <ModalHeader textAlign="center" pt="50px">
          <Text as="span" fontWeight="600" fontSize="32px">
            Contact
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
            templateColumns="repeat(2, 1fr)"
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

export default CreateContactForm
