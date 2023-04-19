import {
  inputComp,
  selectComp,
  inputHookReg,
  selectHookReg,
} from '@/src/compFactory'
import { sumArray } from '@/src/utils'
import {
  Box,
  Stack,
  HStack,
  Grid,
  GridItem,
  FormLabel,
  Spinner,
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
} from '@chakra-ui/react'
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
  const router = useRouter()
  const weekStart = router.query.week
    ? router.query.week
    : Object.keys(employee.payroll)[0]
  // const weekStart = router.query.week

  const employeeWeeks = weekStart && Object.keys(employee.payroll)

  const gotoWeek = (week) =>
    router.push({
      pathname: router.pathname,
      query:
        week === '' ? { ...router.query } : { ...router.query, week: week },
    })

  const clearWeek = () =>
    router.push({
      pathname: router.pathname,
      query: { ...router.query },
    })

  useEffect(() => {
    reset()
  }, [router.query])

  useEffect(() => {
    if (employee.hasOwnProperty('id')) {
      // !router.query.hasOwnProperty('week') &&
      //   gotoWeek(Object.keys(employee.payroll)[0])
      router.query.hasOwnProperty('week') &&
        gotoWeek(Object.keys(employee.payroll)[0])
    }
    // gotoWeek(Object.keys(employee.payroll)[0])
    // clearWeek()
  }, [router.isReady, router.query.id])

  const payrollComps = (name, defVal, key, type = 'number') =>
    inputHookReg(name, defVal, key, register, type)

  if (!employee || !employee.id) {
    return <Spinner></Spinner>
  }

  if (!(employee.type === 'Hourly')) {
    return (
      <>
        <Alert status='info'>
          <AlertIcon />
          <AlertTitle>N/A for Salaried Employees!</AlertTitle>
        </Alert>
      </>
    )
  }

  return (
    <Box>
      <Stack>
        <HStack>
          <FormLabel>Week </FormLabel>
          {selectComp(weekStart, employeeWeeks, (e) =>
            gotoWeek(e.target.value)
          )}
        </HStack>
        <Grid
          templateRows={{ sm: 'repeat(8, 1fr)', md: 'repeat(4, 1fr)' }}
          templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
          gap={2}
        >
          {inputComp(
            'Total Hours',
            totalHoursPerWeek(employee.payroll[weekStart]),
            'number'
          )}
          {Object.entries(employee.payroll[weekStart]).map(([k, v]) => (
            <GridItem key={k}>
              {payrollComps(
                `${k.charAt(0).toUpperCase()}${k.slice(1)}`,
                v,
                `payroll.${weekStart}.${k}`
              )}
            </GridItem>
          ))}
        </Grid>
      </Stack>
    </Box>
  )
}
