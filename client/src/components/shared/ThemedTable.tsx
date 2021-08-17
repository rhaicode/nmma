import styled from '@emotion/styled'
import {
  Box,
  Checkbox,
  Flex,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { useRef } from 'react'
import { FiMoreHorizontal } from 'react-icons/fi'
import { camelCase } from 'lodash'

import useTableEvents from '../../utils/useTableEvents'
import Status, { StatusName } from './Status'
import { Pagination } from '../partials'

const StyledTable = styled(Table)`
  & {
    user-select: 'none';
    thead {
      border-color: transparent;
      tr {
        border-color: transparent;

        th {
          border-color: transparent;
        }
      }
    }
    tbody {
      border-color: transparent;
      tr {
        border-color: transparent;

        td {
          border-color: transparent;
          font-weight: 400;
          font-size: 14px;
          white-space: nowrap;
        }
      }
    }
  }
`
const StyledFlex = styled(Flex)`
  &::-webkit-scrollbar {
    /* WebKit */
    width: 0;
    height: 0;
  }
`

type ThemedTableProps = {
  columns?: string[]
  rows?: Record<string, any>[]
}

const ThemedTable: React.FC<ThemedTableProps> = ({ columns, rows }) => {
  const ref = useRef<HTMLDivElement>(null)
  const { mouseDownHandler } = useTableEvents({ ref })

  return (
    <>
      <StyledFlex
        pl="49px"
        mt="60px"
        mb="35px"
        overflow="auto"
        ref={ref}
        onMouseDown={mouseDownHandler}
        id="tableEvent"
        _hover={{
          cursor: 'grab',
        }}
      >
        <StyledTable variant="simple">
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
                <Checkbox cursor="pointer" />
              </Th>

              {columns?.length ? (
                columns.map(c => (
                  <Th
                    textTransform="capitalize"
                    key={c}
                    color="darkGray"
                    fontSize="13px"
                    fontWeight="600"
                    whiteSpace="nowrap"
                  >
                    {c}
                  </Th>
                ))
              ) : (
                <></>
              )}
              <Th borderTopRightRadius="10px" borderBottomRightRadius="10px" />
            </Tr>
          </Thead>
          <Tbody
            border="1px solid"
            borderColor="transparent"
            backgroundColor="transparent"
            borderRadius="10px"
          >
            <Tr height="30px" />
            {rows?.length ? (
              rows.map((r, i) => (
                <>
                  <Tr
                    key={r.uuid}
                    h="70px"
                    backgroundColor="white"
                    boxShadow="0px 4px 5px rgba(0, 0, 0, 0.05)"
                    borderRadius="10px"
                    color="darkGray"
                  >
                    <Td
                      borderTopLeftRadius="10px"
                      borderBottomLeftRadius="10px"
                    >
                      <Checkbox />
                    </Td>
                    {columns?.length ? (
                      columns?.map(c => {
                        const column = camelCase(c)
                        const isStatus = column === 'status'

                        if (isStatus) {
                          return (
                            <Td>
                              <Status name={r[column] as StatusName} />
                            </Td>
                          )
                        }

                        return <Td>{`${r[column]}`}</Td>
                      })
                    ) : (
                      <></>
                    )}
                    <Td
                      borderTopRightRadius="10px"
                      borderBottomRightRadius="10px"
                      minW="80px"
                    >
                      <Box cursor="pointer">
                        <FiMoreHorizontal fontSize="18px" />
                      </Box>
                    </Td>
                  </Tr>
                  {i < rows.length - 1 && <Tr height="11px" />}
                </>
              ))
            ) : (
              <></>
            )}
          </Tbody>
        </StyledTable>
        <Box minWidth="49px" height="20px" />
      </StyledFlex>
      <Box ml="49px" maxW="290px">
        <Pagination />
      </Box>
    </>
  )
}

export default ThemedTable
