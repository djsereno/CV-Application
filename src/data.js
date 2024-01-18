export const data = [
  {
    id: 0,
    heading: 'General',
    inputs: [
      {
        label: 'First Name',
        placeholder: 'John',
        type: 'text',
      },
      {
        label: 'Last Name',
        placeholder: 'Smith',
        type: 'text',
      },
      {
        label: 'Email',
        placeholder: 'johnsmith123@gmail.com',
        type: 'email',
      },
      {
        label: 'Phone',
        placeholder: '(555) 123-4567',
        type: 'tel',
      },
      {
        label: 'Location',
        placeholder: 'Springfield, IL',
        type: 'text',
      },
    ],
    isSubmitted: false,
  },
  {
    id: 1,
    heading: 'Education',
    inputs: [
      {
        label: 'School Name',
        placeholder: 'Harvard',
        type: 'text',
      },
      {
        label: 'Location',
        placeholder: 'Cambridge, MA',
        type: 'text',
      },
      {
        label: 'Degree',
        placeholder: 'Culinary Arts',
        type: 'text',
      },
      {
        label: 'Start Date',
        placeholder: '2010',
        type: 'number',
      },
      {
        label: 'End Date',
        placeholder: '2014',
        type: 'number',
      },
    ],
    isSubmitted: false,
  },
  {
    id: 2,
    heading: 'Work Experience',
    inputs: [
      {
        label: 'Company Name',
        placeholder: 'Burger King',
        type: 'text',
      },
      {
        label: 'Location',
        placeholder: 'Boston, MA',
        type: 'text',
      },
      {
        label: 'Position',
        placeholder: 'Head Chef',
        type: 'text',
      },
      {
        label: 'Start Date',
        placeholder: '2014',
        type: 'number',
      },
      {
        label: 'End Date',
        placeholder: '2020',
        type: 'number',
      },
      {
        label: 'Responsibilities',
        placeholder: 'Use the fryer',
        type: 'textarea',
      },
    ],
    isSubmitted: false,
  },
];
