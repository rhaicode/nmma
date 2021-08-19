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
import { useHistory, useLocation } from 'react-router-dom'

type TopbarProps = {
  isPublic?: boolean
}

const Topbar: React.FC<TopbarProps> = ({ isPublic }) => {
  const location = useLocation()
  const history = useHistory()

  const toggleAuthentication = () => {
    if (!localStorage.getItem('accessToken')) {
      localStorage.setItem('accessToken', 'hey')
    } else {
      localStorage.removeItem('accessToken')
    }
    history.push(location.pathname)
  }

  return (
    <Flex
      height="80px"
      boxShadow="0px 4px 9px rgba(0, 0, 0, 0.05)"
      p="20px 50px"
      justifyContent={!isPublic ? 'space-between' : 'flex-end'}
      position="relative"
      zIndex="2"
    >
      {!isPublic && (
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
      )}
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
          onClick={toggleAuthentication}
        />
      </HStack>
    </Flex>
  )
}

export default Topbar
