import styled from '@emotion/styled'
import { Table } from '@chakra-ui/react'

const ThemedTable = styled(Table)`
  & {
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
        }
      }
    }
  }
`

export default ThemedTable
