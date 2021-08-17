import { forwardRef } from 'react'
import { Input, InputProps } from '@chakra-ui/react'

const ThemedInput: React.FC<InputProps> = forwardRef(
  ({ onChange, onBlur, name, children, ...props }, ref: any) => (
    <Input
      height="50px"
      onBlur={onBlur}
      onChange={onChange}
      name={name}
      ref={ref}
      backgroundColor="transparent"
      border="1px solid"
      borderColor="mediumGray"
      borderRadius="10px"
      _autofill={{
        WebkitTextFillColor: 'transparent !important',
      }}
      color="#989da9"
      fontSize="14px"
      {...props}
    >
      {children}
    </Input>
  )
)
export default ThemedInput
