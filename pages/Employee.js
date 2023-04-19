import {
  Box,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Tabs,
  Icon,
  useColorMode,
  Center,
  HStack,
  Stack,
  Container,
  useToast,
  Spinner,
} from '@chakra-ui/react'
import {
  FaSave,
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaBusinessTime,
  FaMoon,
  FaSun,
  FaUserEdit,
} from 'react-icons/fa'
import { useRouter } from 'next/router'
import { useForm, FormProvider } from 'react-hook-form'
import { useEffect, useState } from 'react'
import merge from 'deepmerge'
import localforage from 'localforage'
import { iconButton, selectComp } from '@/src/compFactory'
import { seedEmployees } from '../data/seedData'
import { findNext, findPrev } from '@/src/utils'
import EmployeeForm from '@/components/EmployeeForm'
import PayrollForm from '@/components/PayrollForm'

// import Layout from '@/components/Layout'

export default function Employee() {
  const [allKeys, setAllKeys] = useState(null)
  const [employee, setEmployee] = useState(null)
  const { colorMode, toggleColorMode } = useColorMode()
  const methods = useForm({ employee })
  const router = useRouter()
  const toast = useToast()

  const gotoID = (id) =>
    router.push({
      pathname: router.pathname,
      query: { id: id },
    })
  // const id = router.query.hasOwnProperty('id') ? query.id : allKeys[0] && 101

  useEffect(() => {
    ;(async () => {
      ;(await localforage.length()) ||
        (await Promise.all(
          seedEmployees.map(
            async (x) =>
              await localforage
                .setItem(String(x.id), x)
                .then((x) => setEmployee(x))
            // .then((x) => console.log(`DB Seeding Done: ${x.id}`))
            // .catch((x) => console.log(`DB Seeding Errors: ${x.id}`))
          )
        ))
    })()
  }, [])

  useEffect(() => {
    if (!router.isReady) {
      return
    }

    localforage
      .keys()
      .then((x) => setAllKeys(x))
      .then(
        () =>
          router.query.hasOwnProperty('id') ||
          gotoID(allKeys ? allKeys[0] : '101')
      )
    localforage.getItem(router.query.id).then((x) => setEmployee(x))
  }, [router.isReady, router.query.id])

  useEffect(() => {
    methods.reset()
  }, [employee])

  const formSubmit = async (data) => {
    // console.log(data.payroll)

    const payrollInts = {
      payroll: Object.entries(data.payroll).map(([k, v]) => ({
        [k]: Object.fromEntries(
          Object.entries(v).map(([x, y]) => [x, Number(y)])
        ),
      }))[0],
    }
    // console.log(payrollInts)
    const updatedData = merge(merge(employee, data), payrollInts)
    // console.log(updatedData.payroll)
    await localforage.setItem(String(updatedData.id), updatedData)
    await localforage.getItem(router.query.id).then((x) => setEmployee(x))
    toast({
      title: 'Data Updated.',
      // description: "Data Updated.",
      status: 'success',
      position: 'top',
      duration: 9000,
      isClosable: true,
    })
    // setEmployee(null)
  }

  if (!employee || !employee.id || !allKeys) {
    return <Spinner></Spinner>
  }

  return (
    <Container maxW='container.md'>
      <Box>
        <FormProvider {...methods}>
          <form>
            <Tabs>
              <Center>
                <Stack spacing={3}>
                  <TabList>
                    <Tab>
                      <Icon as={FaUserEdit}></Icon> &nbsp; Employee Contact
                    </Tab>
                    <Tab>
                      <Icon as={FaBusinessTime}></Icon> &nbsp; Employee Payroll
                    </Tab>
                  </TabList>
                  {selectComp(String(employee.id), allKeys, (e) =>
                    gotoID(e.target.value)
                  )}
                </Stack>
              </Center>
              <TabPanels>
                <TabPanel>
                  <Stack>
                    <EmployeeForm employee={employee}></EmployeeForm>
                  </Stack>
                </TabPanel>
                <TabPanel>
                  <PayrollForm employee={employee}></PayrollForm>
                </TabPanel>
              </TabPanels>
            </Tabs>
            <Center>
              <HStack spacing={2}>
                {[
                  [
                    FaChevronCircleLeft,
                    `/?id=${findPrev(allKeys, router.query.id)}`,
                  ],
                  [
                    FaChevronCircleRight,
                    `/?id=${findNext(allKeys, router.query.id)}`,
                  ],
                  [FaSave, methods.handleSubmit(formSubmit)],
                  [colorMode === 'light' ? FaMoon : FaSun, toggleColorMode],
                ].map((x) => iconButton(...x))}
              </HStack>
            </Center>
          </form>
        </FormProvider>
      </Box>
    </Container>
  )
}
