export const EmployeeSchema = {
  name: 'Employee',
  primaryKey: 'id',
  properties: {
    id: 'int',
    type: 'string',
    payRate: 'int', // Monthly Salary or Hourly Rate
    jobDescription: 'string',
    contact: 'Contact',
    address: 'Address',
    payroll: 'Payroll{}',
    //  { type: 'list', objectType: 'Payroll', optional: false },
  },
}

export const ContactSchema = {
  name: 'Contact',
  embedded: true,
  properties: {
    firstName: 'string',
    lastName: 'string',
    middleInit: 'string',
    phoneNo: 'string',
  },
}

export const AddressSchema = {
  name: 'Address',
  embedded: true,
  properties: {
    province: 'string',
    city: 'string',
    postalCode: 'string',
    street: 'string',
  },
}

export const PayrollSchema = {
  name: 'Payroll',
  embedded: true,
  properties: {
    // week: 'string', // ISO week start date
    monday: 'int',
    tuesday: 'int',
    wednesday: 'int',
    thursday: 'int',
    friday: 'int',
    saturday: 'int',
    sunday: 'int',
  },
}

// const HourlySchema = {
//   name: 'HourlyEmployee',
//   primaryKey: 'id',
//   properties: {
//     id: 'int',
//     hourlyRate: 'string',
//   },
// }

// const SalariedSchema = {
//   name: 'SalariedEmployee',
//   primaryKey: 'id',
//   properties: {
//     id: 'int',
//     monthlySalary: 'string',
//   },
// }
