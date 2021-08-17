import { Button, ButtonProps } from '@chakra-ui/react'

const ThemedButton: React.FC<ButtonProps> = ({ children, ...props }) => (
  <Button
    backgroundColor="violet"
    _hover={{ backgroundColor: '#2e02b4' }}
    _active={{
      backgroundColor: 'violet',
    }}
    height="55px"
    width="158px"
    borderRadius="10px"
    color="white"
    fontSize="16px"
    fontWeight="normal"
    {...props}
  >
    {children}
  </Button>
)

export default ThemedButton
