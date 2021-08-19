import { Flex, Button } from '@chakra-ui/react'
import React from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import uuid from 'react-uuid'

const Pagination: React.FC = () => (
  <Flex
    backgroundColor="white"
    boxShadow="0px 4px 5px rgba(0, 0, 0, 0.05)"
    borderRadius="10px"
    alignItems="center"
    justifyContent="center"
    h="50px"
  >
    <Button
      fontWeight="normal"
      fontSize="17px"
      size="xs"
      key={uuid()}
      borderRadius="3px"
      backgroundColor="transparent"
      color="darkGray"
      leftIcon={<FiChevronLeft color="#989DA9" />}
      pr="0px"
      width="21px"
    />
    <Flex mx="8px">
      {Array.from({ length: 5 }).map((_, i) => (
        <Button
          fontWeight="normal"
          fontSize="11px"
          size="xs"
          key={uuid()}
          borderRadius="3px"
          width="21px !important"
          {...(i === 0
            ? { backgroundColor: 'violet', color: 'white' }
            : {
                backgroundColor: 'transparent',
                color: 'darkGray',
              })}
          mr="5px"
        >
          {i + 1}
        </Button>
      ))}
      <Button
        fontWeight="normal"
        fontSize="11px"
        size="xs"
        key={uuid()}
        borderRadius="3px"
        width="21px"
        backgroundColor="transparent"
        color="darkGray"
        mr="5px"
        _hover={{
          background: 'transparent',
        }}
        _active={{
          background: 'transparent',
        }}
        cursor="auto"
      >
        ...
      </Button>
      <Button
        fontWeight="normal"
        fontSize="11px"
        size="xs"
        key={uuid()}
        borderRadius="3px"
        width="21px"
        backgroundColor="transparent"
        color="darkGray"
      >
        10
      </Button>
    </Flex>
    <Button
      fontWeight="normal"
      fontSize="17px"
      size="xs"
      key={uuid()}
      borderRadius="3px"
      backgroundColor="transparent"
      color="darkGray"
      leftIcon={<FiChevronRight color="#989DA9" />}
      pr="0px"
      width="21px"
    />
  </Flex>
)

export default Pagination
