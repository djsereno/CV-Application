export const formProps = [
  {
    id: 'general',
    icon: 'fa-user',
    label: 'General',
    formFields: [
      {
        id: 'firstName',
        label: 'First Name',
        placeholder: 'John',
        type: 'text',
        icon: 'fa-user'
      },
      {
        id: 'lastName',
        label: 'Last Name',
        placeholder: 'Smith',
        type: 'text',
        icon: 'fa-user'
      },
      {
        id: 'email',
        label: 'Email',
        placeholder: 'johnsmith123@gmail.com',
        type: 'email',
        icon: 'fa-envelope'
      },
      {
        id: 'phone',
        label: 'Phone',
        placeholder: '(555) 123-4567',
        type: 'tel',
        icon: 'fa-phone'
      },
      {
        id: 'location',
        label: 'Location',
        placeholder: 'Springfield, IL',
        type: 'text',
        icon: 'fa-location-dot'
      }
    ]
  },
  {
    id: 'education',
    icon: 'fa-graduation-cap',
    label: 'Education',
    formFields: [
      {
        id: 'schoolName',
        label: 'School Name',
        placeholder: 'Harvard',
        type: 'text',
        icon: 'fa-school'
      },
      {
        id: 'degree',
        label: 'Degree',
        placeholder: 'Culinary Arts',
        type: 'text',
        icon: 'fa-graduation-cap'
      },
      {
        id: 'location',
        label: 'Location',
        placeholder: 'Cambridge, MA',
        type: 'text',
        icon: 'fa-location-dot'
      },
      {
        id: 'startDate',
        label: 'Start Date',
        placeholder: '2010',
        type: 'date',
        icon: 'fa-calendar-plus'
      },
      {
        id: 'endDate',
        label: 'End Date',
        placeholder: '2014',
        type: 'date',
        icon: 'fa-calendar-check'
      }
    ]
  },
  {
    id: 'workExperience',
    icon: 'fa-building',
    label: 'Work Experience',
    formFields: [
      {
        id: 'companyName',
        label: 'Company Name',
        placeholder: 'Burger King',
        type: 'text',
        icon: 'fa-building'
      },
      {
        id: 'jobTitle',
        label: 'Job Title',
        placeholder: 'Head Chef',
        type: 'text',
        icon: 'fa-id-badge'
      },
      {
        id: 'location',
        label: 'Location',
        placeholder: 'Boston, MA',
        type: 'text',
        icon: 'fa-location-dot'
      },
      {
        id: 'startDate',
        label: 'Start Date',
        placeholder: '2014',
        type: 'date',
        icon: 'fa-calendar-plus'
      },
      {
        id: 'endDate',
        label: 'End Date',
        placeholder: '2020',
        type: 'date',
        icon: 'fa-calendar-check'
      },
      {
        id: 'duties',
        label: 'Responsibilities',
        placeholder: 'Use the fryer',
        type: 'textarea',
        icon: 'fa-list-check'
      }
    ]
  }
];