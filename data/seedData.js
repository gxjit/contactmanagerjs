export const seedEmployees = [
  {
    id: 101,
    jobDescription: 'Chief Executive Officer',
    type: 'Salaried',
    payRate: 30000,
    contact: {
      firstName: 'Babbu',
      lastName: 'Maan',
      middleInit: 'S',
      phoneNo: '(639)555-1282',
    },
    address: {
      province: 'Saskatchewan',
      city: 'Regina',
      postalCode: 'S6H 1P4',
      street: '301 Main St.',
    },
    payroll: {
      '2023-01-02': {
        monday: 8,
        tuesday: 7,
        wednesday: 8,
        thursday: 10,
        friday: 8,
        saturday: 12,
        sunday: 8,
      },
      '2023-01-09': {
        monday: 6,
        tuesday: 8,
        wednesday: 9,
        thursday: 10,
        friday: 9,
        saturday: 12,
        sunday: 8,
      },
    },
  },
  {
    id: 102,
    jobDescription: 'Chief Technology Officer',
    type: 'Salaried',
    payRate: 40000,
    contact: {
      firstName: 'Gurjit',
      lastName: 'Singh',
      middleInit: 'S',
      phoneNo: '(306)999-1232',
    },
    address: {
      province: 'Saskatchewan',
      city: 'Saskatoon',
      postalCode: 'S4N 1P4',
      street: '69 Cavendish St.',
    },
    payroll: {
      '2023-01-16': {
        monday: 6,
        tuesday: 12,
        wednesday: 8,
        thursday: 12,
        friday: 8,
        saturday: 12,
        sunday: 8,
      },
      '2023-01-23': {
        monday: 6,
        tuesday: 12,
        wednesday: 5,
        thursday: 12,
        friday: 9,
        saturday: 12,
        sunday: 8,
      },
    },
  },
  {
    id: 103,
    jobDescription: 'Private Investigator',
    type: 'Hourly',
    payRate: 40,
    contact: {
      firstName: 'Harry',
      lastName: 'Dresden',
      middleInit: 'B',
      phoneNo: '(306)444-1222',
    },
    address: {
      province: 'Saskatchewan',
      city: 'Swif Current',
      postalCode: 'SSS 0P4',
      street: '555 Demonreach St.',
    },
    payroll: {
      '2023-01-02': {
        monday: 8,
        tuesday: 6,
        wednesday: 4,
        thursday: 10,
        friday: 9,
        saturday: 10,
        sunday: 8,
      },
    },
  },
]
