import { Text } from '@chakra-ui/react'

/* eslint-disable-line */
export enum StatusName {
  Pending = 'Pending',
  Approved = 'Approved',
  Declined = 'Declined',
}

type StatusProps = {
  name: StatusName
}

const colors = {
  [StatusName.Pending]: '#FDB713',
  [StatusName.Approved]: '#00CB00',
  [StatusName.Declined]: '##FF4144',
}

const Status: React.FC<StatusProps> = ({ name }) => (
  <Text
    as="span"
    display="block"
    px="22px"
    py="4px"
    backgroundColor={colors[name]}
    fontSize="14px"
    color="white"
    borderRadius="25px"
  >
    {name}
  </Text>
)

export default Status
