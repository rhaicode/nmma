import { Text, Grid, Flex, Button } from '@chakra-ui/react'
import { FiPlus } from 'react-icons/fi'

import { CompanyCard } from '../components/partials'
import DefaultLayout from '../layouts/DefaultLayout'

const Dashboard: React.FC = () => {
  const list = Array.from({ length: 10 })

  return (
    <DefaultLayout>
      <Flex justifyContent="space-between" alignItems="center">
        <Text as="span" fontSize="32px" fontWeight="600">
          Dashboard
        </Text>
        <Button
          leftIcon={<FiPlus color="white" fontSize="22px" />}
          backgroundColor="violet"
          _hover={{ backgroundColor: '#2e02b4' }}
          _active={{
            backgroundColor: 'violet',
          }}
          height="55px"
          width="158px"
          borderRadius="10px"
          color="white"
          fontSize="16px"
          fontWeight="normal"
        >
          <Text as="span" ml="8px">
            Create
          </Text>
        </Button>
      </Flex>
      <Grid
        templateColumns="repeat(auto-fit,minmax(256px,1fr))"
        autoColumns="max-content"
        autoRows="auto"
        gap="24px"
        mt="58px"
        {...(list.length <= 8 && { maxW: 272 * list.length })}
      >
        {list.map(d => (
          <CompanyCard key={`${d}`} />
        ))}
      </Grid>
    </DefaultLayout>
  )
}

export default Dashboard
