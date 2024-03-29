import {
  faBuilding,
  faCalendarCheck,
  faCalendarPlus,
  faEnvelope,
  faIdBadge,
  faGraduationCap,
  faListCheck,
  faLocationDot,
  faPhone,
  faSchool,
  faUser
} from '@fortawesome/free-solid-svg-icons';

export const formProps = [
  {
    id: 'general',
    icon: faUser,
    label: 'General',
    formFields: [
      {
        id: 'firstName',
        label: 'First Name',
        placeholder: 'John',
        type: 'text',
        icon: faUser
      },
      {
        id: 'lastName',
        label: 'Last Name',
        placeholder: 'Smith',
        type: 'text',
        icon: faUser
      },
      {
        id: 'email',
        label: 'Email',
        placeholder: 'johnsmith123@gmail.com',
        type: 'email',
        icon: faEnvelope
      },
      {
        id: 'phone',
        label: 'Phone',
        placeholder: '(555) 123-4567',
        type: 'tel',
        icon: faPhone
      },
      {
        id: 'location',
        label: 'Location',
        placeholder: 'Springfield, IL',
        type: 'text',
        icon: faLocationDot
      }
    ]
  },
  {
    id: 'education',
    icon: faGraduationCap,
    label: 'Education',
    formFields: [
      {
        id: 'schoolName',
        label: 'School Name',
        placeholder: 'Harvard',
        type: 'text',
        icon: faSchool
      },
      {
        id: 'degree',
        label: 'Degree',
        placeholder: 'Culinary Arts',
        type: 'text',
        icon: faGraduationCap
      },
      {
        id: 'location',
        label: 'Location',
        placeholder: 'Cambridge, MA',
        type: 'text',
        icon: faLocationDot
      },
      {
        id: 'startDate',
        label: 'Start Date',
        placeholder: '2010',
        type: 'date',
        icon: faCalendarPlus
      },
      {
        id: 'endDate',
        label: 'End Date',
        placeholder: '2014',
        type: 'date',
        icon: faCalendarCheck
      }
    ]
  },
  {
    id: 'workExperience',
    icon: faBuilding,
    label: 'Work Experience',
    formFields: [
      {
        id: 'companyName',
        label: 'Company Name',
        placeholder: 'Burger King',
        type: 'text',
        icon: faBuilding
      },
      {
        id: 'jobTitle',
        label: 'Job Title',
        placeholder: 'Head Chef',
        type: 'text',
        icon: faIdBadge
      },
      {
        id: 'location',
        label: 'Location',
        placeholder: 'Boston, MA',
        type: 'text',
        icon: faLocationDot
      },
      {
        id: 'startDate',
        label: 'Start Date',
        placeholder: '2014',
        type: 'date',
        icon: faCalendarPlus
      },
      {
        id: 'endDate',
        label: 'End Date',
        placeholder: '2020',
        type: 'date',
        icon: faCalendarCheck
      },
      {
        id: 'duties',
        label: 'Responsibilities',
        placeholder: 'Use the fryer',
        type: 'textarea',
        icon: faListCheck
      }
    ]
  }
];
