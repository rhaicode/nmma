import { Box, Text, Flex } from '@chakra-ui/react'
import { FiMoreHorizontal } from 'react-icons/fi'

const CompanyCard: React.FC = () => (
  <Box
    boxShadow="0px 4px 5px rgba(0, 0, 0, 0.05)"
    backgroundColor="white"
    borderRadius="10px"
    minHeight="256px"
    minW="256px"
    p="22px"
    position="relative"
  >
    <Box position="absolute" right="22px" top="18px" cursor="pointer">
      <FiMoreHorizontal color="#BDC6D9" fontSize="22px" />
    </Box>
    <Box
      height="56px"
      width="56px"
      backgroundColor="gray6"
      mt="6px"
      borderRadius="10px"
    />
    <Text as="span" display="block" fontWeight="600" fontSize="18px" mt="18px">
      Company
    </Text>
    <Text
      as="span"
      display="block"
      fontWeight="400"
      fontSize="11px"
      color="darkGray"
    >
      www.company.com
    </Text>
    <Box as="ul" mt="30px">
      <Flex as="li" listStyleType="none">
        <Text
          as="span"
          color="violet"
          fontSize="13px"
          fontWeight="700"
          width="30px"
          display="block"
        >
          2
        </Text>
        <Text as="span" color="darkGray" fontSize="13px">
          Events
        </Text>
      </Flex>
      <Flex as="li" listStyleType="none" my="4px">
        <Text
          as="span"
          color="violet"
          fontSize="13px"
          fontWeight="700"
          width="30px"
          display="block"
        >
          23
        </Text>
        <Text as="span" color="darkGray" fontSize="13px">
          Boat Products
        </Text>
      </Flex>
      <Flex as="li" listStyleType="none">
        <Text
          as="span"
          color="violet"
          fontSize="13px"
          fontWeight="700"
          width="30px"
          display="block"
        >
          56
        </Text>
        <Text as="span" color="darkGray" fontSize="13px">
          Exhibitors
        </Text>
      </Flex>
    </Box>
  </Box>
)

export default CompanyCard
