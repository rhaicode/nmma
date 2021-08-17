import { Text, Grid, Flex, useDisclosure } from '@chakra-ui/react'
import { FiPlus } from 'react-icons/fi'

import { CreateCompanyForm } from '../components/partials'
import { CompanyCard, ThemedButton } from '../components/shared'
import DefaultLayout from '../layouts/DefaultLayout'

const Dashboard: React.FC = () => {
  const list = Array.from({ length: 10 })
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <DefaultLayout>
        <Flex justifyContent="space-between" alignItems="center">
          <Text as="span" fontSize="32px" fontWeight="600">
            Dashboard
          </Text>
          <ThemedButton
            type="button"
            onClick={onOpen}
            leftIcon={<FiPlus color="white" fontSize="22px" />}
          >
            <Text as="span" ml="8px">
              Create
            </Text>
          </ThemedButton>
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
      <CreateCompanyForm isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default Dashboard
