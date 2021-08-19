import { Box, Flex } from '@chakra-ui/react'
import { Sidebar, Topbar } from '../components/shared'

const PublicLayout: React.FC = ({ children }) => (
  <Flex overflow="hidden">
    <Sidebar isPublic />
    <Box w="calc(100vw - 245px)" position="relative">
      <Topbar isPublic />
      <Box minH="calc(100vh - 80px)" backgroundColor="lightGray">
        {children}
      </Box>
    </Box>
  </Flex>
)

export default PublicLayout
