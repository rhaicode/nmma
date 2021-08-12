import { Box, Flex } from '@chakra-ui/react'
import { Sidebar, Topbar } from '../components/shared'

const DefaultLayout: React.FC = ({ children }) => (
  <Flex>
    <Sidebar />
    <Box w="calc(100vw - 245px)" position="relative">
      <Topbar />
      <Box
        minH="calc(100vh - 80px)"
        backgroundColor="lightGray"
        padding="67px 49px"
      >
        {children}
      </Box>
    </Box>
  </Flex>
)

export default DefaultLayout
