import { inputComp } from '../src/compFactory'

export default function Earnings({ employee }) {
  const salaryComp = (x) => inputComp(x, employee.payRate, 'number')

  return (
    <>
      {employee.type === 'Salaried'
        ? salaryComp('Monthly Salary')
        : salaryComp('Hourly Rate')}
    </>
  )
}
