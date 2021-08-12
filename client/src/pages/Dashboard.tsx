import { Text, Grid } from '@chakra-ui/react'
import { CompanyCard } from '../components/partials'
import DefaultLayout from '../layouts/DefaultLayout'

const Dashboard: React.FC = () => {
  const list = Array.from({ length: 10 })

  return (
    <DefaultLayout>
      <Text as="span" fontSize="32px" fontWeight="600">
        Dashboard
      </Text>
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
