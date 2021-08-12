import {
  Box,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Avatar,
} from '@chakra-ui/react'
import { FiSearch, FiBell, FiMail } from 'react-icons/fi'

const Topbar: React.FC = () => (
  <Flex
    height="80px"
    boxShadow="0px 4px 9px rgba(0, 0, 0, 0.05)"
    p="20px 50px"
    justifyContent="space-between"
    position="relative"
    zIndex="2"
  >
    <InputGroup maxW="331px" border="1px solid transparent">
      <InputLeftElement pointerEvents="none">
        <FiSearch color="#BDC6D9" fontSize="18px" />
      </InputLeftElement>
      <Input
        type="text"
        placeholder="Search query"
        backgroundColor="lightGray"
        _placeholder={{
          fontSize: '12px',
          letterSpacing: '0.02em',
          color: 'darkGray',
        }}
      />
    </InputGroup>
    <HStack spacing="36px">
      <Box cursor="pointer">
        <FiBell fontSize="18px" color="#BDC6D9" />
      </Box>
      <Box cursor="pointer">
        <FiMail fontSize="18px" color="#BDC6D9" />
      </Box>

      <Avatar
        src="/assets/png/avatar.png"
        width="40px"
        height="40px"
        cursor="pointer"
      />
    </HStack>
  </Flex>
)

export default Topbar
