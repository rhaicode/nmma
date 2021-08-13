import { FiHome, FiCalendar, FiBriefcase } from 'react-icons/fi'

const links = [
  {
    label: 'Dashboard',
    url: '/',
    icon: <FiHome color="white" fontSize="20px" />,
  },
  {
    label: 'Shows',
    url: '/shows',
    icon: <FiCalendar color="white" fontSize="20px" />,
  },
  {
    label: 'Company',
    url: '/company',
    icon: <FiBriefcase color="white" fontSize="20px" />,
  },
]

export default links
