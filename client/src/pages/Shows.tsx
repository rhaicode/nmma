import { Checkbox, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'

import { ThemedTable } from '../components/shared'
import DefaultLayout from '../layouts/DefaultLayout'

const columns = [
  'ID',
  'Producer Event Code',
  'Event Family',
  'Description',
  'Location',
  'Venue',
  'Start Date',
]

const Shows: React.FC = () => {
  const list = Array.from({ length: 7 })

  return (
    <DefaultLayout>
      <Text as="span" fontSize="32px" fontWeight="600">
        Shows
      </Text>

      <ThemedTable variant="simple" mt="60px">
        <Thead
          border="1px solid"
          borderColor="transparent"
          backgroundColor="transparent"
          borderRadius="10px"
        >
          <Tr
            h="60px"
            backgroundColor="white"
            boxShadow="0px 4px 5px rgba(0, 0, 0, 0.05)"
            borderRadius="10px"
          >
            <Th borderTopLeftRadius="10px" borderBottomLeftRadius="10px">
              <Checkbox />
            </Th>

            {columns.map((c, i) => (
              <Th
                textTransform="capitalize"
                key={c}
                color="darkGray"
                fontSize="13px"
                fontWeight="600"
                {...(i === columns.length - 1 && {
                  borderTopRightRadius: '10px',
                  borderBottomRightRadius: '10px',
                })}
              >
                {c}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody
          border="1px solid"
          borderColor="transparent"
          backgroundColor="transparent"
          borderRadius="10px"
        >
          <Tr height="30px" />
          {list.map((l, i) => (
            <>
              <Tr
                h="70px"
                backgroundColor="white"
                boxShadow="0px 4px 5px rgba(0, 0, 0, 0.05)"
                borderRadius="10px"
                color="darkGray"
              >
                <Td borderTopLeftRadius="10px" borderBottomLeftRadius="10px">
                  <Checkbox />
                </Td>
                <Td>001</Td>
                <Td>CBS2021</Td>
                <Td>All iterations of the...</Td>
                <Td>Lorem ipsum dolor...</Td>
                <Td>123 Street Name...</Td>
                <Td>123 Street Name...</Td>
                <Td borderTopRightRadius="10px" borderBottomRightRadius="10px">
                  10 Aug 2021
                </Td>
              </Tr>
              {i < list.length - 1 && <Tr height="11px" />}
            </>
          ))}
        </Tbody>
      </ThemedTable>
    </DefaultLayout>
  )
}

export default Shows
