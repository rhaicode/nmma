import { Text } from '@chakra-ui/react'

/* eslint-disable-line */
export enum StatusName {
  Active = 'Active',
  Approved = 'Approved',
  Cancelled = 'Cancelled',
  Closed = 'Closed',
  Declined = 'Declined',
  Pending = 'Pending',
}

type StatusProps = {
  name: StatusName
}

const colors = {
  [StatusName.Active]: '#00CB00',
  [StatusName.Approved]: '#00CB00',
  [StatusName.Cancelled]: '#FF4144',
  [StatusName.Closed]: '#FF4144',
  [StatusName.Declined]: '#FF4144',
  [StatusName.Pending]: '#FDB713',
}

const Status: React.FC<StatusProps> = ({ name }) => (
  <Text
    as="span"
    display="block"
    py="4px"
    backgroundColor={colors[name]}
    fontSize="14px"
    color="white"
    borderRadius="25px"
    w="110px !important"
    textAlign="center"
  >
    {name}
  </Text>
)

export default Status
