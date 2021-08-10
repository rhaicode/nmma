import { Box, Flex } from '@chakra-ui/react'
import { Sidebar } from '../components/shared'

const DefaultLayout: React.FC = ({ children }) => (
  <Flex>
    <Sidebar />
    <Box w="calc(100vw - 245px)">{children}</Box>
  </Flex>
)

export default DefaultLayout
