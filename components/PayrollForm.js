import {
  inputComp,
  selectComp,
  inputHookReg,
  selectHookReg,
} from '@/src/compFactory'
import { sumArray } from '@/src/utils'
import { Box, Stack, HStack, Grid, GridItem, FormLabel } from '@chakra-ui/react'
import { useFormContext, useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const numComp = (x, y) => inputComp(x, y, 'number')

const extractTypeFrmObj = (obj, type) =>
  Object.values(obj).filter((y) => typeof y === type)

const totalHoursPerWeek = (x) =>
  sumArray(Object.values(x).filter((y) => typeof y === 'number'))

const totalHoursWorked = (arr) =>
  sumArray(
    arr.map((x) =>
      sumArray(Object.values(x).filter((y) => typeof y === 'number'))
    )
  )

export default function PayrollForm({ employee }) {
  const { register, reset } = useFormContext() // fx
  const { query, push, pathname } = useRouter()
  const weekStart = query.hasOwnProperty('week')
    ? query.week
    : Object.keys(employee.payroll)[0]

  const employeeWeeks = Object.keys(employee.payroll)

  useEffect(() => {
    reset()
  }, [query])

  const payrollComps = (name, defVal, key, type = 'number') =>
    inputHookReg(name, defVal, key, register, type)

  return (
    <Box>
      <Stack>
        <HStack>
          <FormLabel>Week </FormLabel>
          {selectComp(weekStart, employeeWeeks, (e) => {
            push({
              pathname: pathname,
              query: { ...query, week: e.target.value },
            })
          })}
        </HStack>
        <Grid
          templateRows='repeat(4, 1fr)'
          templateColumns='repeat(2, 1fr)'
          gap={2}
        >
          {inputComp(
            'Total Hours',
            totalHoursPerWeek(employee.payroll[weekStart]),
            'number'
          )}
          {Object.entries(employee.payroll[weekStart]).map(([k, v]) => (
            <GridItem key={k}>
              {payrollComps(k, v, `payroll.${weekStart}.${k}`)}
            </GridItem>
          ))}
        </Grid>
      </Stack>
    </Box>
  )
}
