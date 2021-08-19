import { Box, Flex } from '@chakra-ui/react'
import { Sidebar, Topbar } from '../components/shared'

type DefaultLayoutProps = {
  noXPadding?: boolean
  noYPadding?: boolean
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  children,
  noXPadding,
  noYPadding,
}) => (
  <Flex overflow="hidden">
    <Sidebar />
    <Box w="calc(100vw - 245px)" position="relative">
      <Topbar />
      <Box
        minH="calc(100vh - 80px)"
        backgroundColor="lightGray"
        padding={`${noYPadding ? '0px' : '67px'} ${
          noXPadding ? '0px' : '49px'
        }`}
      >
        {children}
      </Box>
    </Box>
  </Flex>
)

export default DefaultLayout
