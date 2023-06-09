import { Box, SimpleGrid, Stack } from '@chakra-ui/react'
import Contact from './Contact'
import Address from './Address'
import Earnings from './Earnings'

export default function EmployeeForm({ employee }) {
  return (
    <Box>
      <SimpleGrid
        // direction={{
        //   sm: 'row',
        //   md: 'row',
        //   xl: 'row',
        // }}
        columns={{ sm: 1, md: 2 }}
        spacing={2}
      >
        <Contact employee={employee}></Contact>
        <Stack>
          <Address address={employee.address}></Address>
          <Earnings employee={employee}></Earnings>
        </Stack>
      </SimpleGrid>
    </Box>
  )
}
