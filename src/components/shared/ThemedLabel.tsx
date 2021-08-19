import { Text, TextProps } from '@chakra-ui/react'

const ThemedLabel: React.FC<TextProps & { htmlFor?: string }> = ({
  children,
  htmlFor,
  ...props
}) => (
  <Text
    as="label"
    fontWeight="600"
    fontSize="13px"
    color="darkGray"
    display="block"
    mb="0.25rem"
    htmlFor={htmlFor}
    {...props}
  >
    {children}
  </Text>
)

export default ThemedLabel
