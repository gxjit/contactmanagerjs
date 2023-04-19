import { inputHookReg } from '@/src/compFactory'
import { Box, Stack } from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'

export default function Contact({ employee }) {
  const { register } = useFormContext()
  const contactComps = (name, defVal, key, type) =>
    inputHookReg(name, defVal, key, register, type)

  return (
    <Box>
      <Stack spacing={2}>
        {[
          [
            'First Name',
            employee.contact.firstName,
            'contact.firstName',
            'text',
          ],
          ['Last Name', employee.contact.lastName, 'contact.lastName', 'text'],
          [
            'Middle Init',
            employee.contact.middleInit,
            'contact.middleInit',
            'text',
          ],
          ['Phone Number', employee.contact.phoneNo, 'contact.phoneNo', 'tel'],
          ['Job Title', employee.jobDescription, 'jobDescription', 'text'],
        ].map((x) => contactComps(...x))}
        {/* Emp type switch */}
      </Stack>
    </Box>
  )
}
