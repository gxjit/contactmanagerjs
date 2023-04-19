import { Box, Stack } from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'
import { inputHookReg } from '@/src/compFactory'

export default function Address({ address }) {
  const { register } = useFormContext()

  const addressComps = (name, defVal, key) =>
    inputHookReg(name, defVal, key, register)

  return (
    <Box>
      <Stack spacing={2}>
        {[
          ['Province', address.province, 'address.province'],
          ['City', address.city, 'address.city'],
          ['Street', address.street, 'address.street'],
          ['Postal Code', address.postalCode, 'address.postalCode'],
        ].map((x) => addressComps(...x))}
      </Stack>
    </Box>
  )
}
