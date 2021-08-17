import { forwardRef } from 'react'
import { Textarea, TextareaProps } from '@chakra-ui/react'

const ThemedTextarea: React.FC<TextareaProps> = forwardRef(
  ({ onChange, onBlur, name, children, ...props }, ref: any) => (
    <Textarea
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
    </Textarea>
  )
)
export default ThemedTextarea
