import { FiHome, FiCalendar, FiBriefcase } from 'react-icons/fi'

const links = [
  {
    label: 'Dashboard',
    url: '/',
    icon: <FiHome color="white" fontSize="20px" />,
    private: true,
  },
  {
    label: 'Shows',
    url: '/shows',
    icon: <FiCalendar color="white" fontSize="20px" />,
    private: true,
  },
  {
    label: 'Company',
    url: '/company',
    icon: <FiBriefcase color="white" fontSize="20px" />,
    private: false,
  },
]

export const companyLinks = [
  {
    label: 'Contact',
    url: '/contact',
  },
  {
    label: 'Boat Product',
    url: '/boat-product',
  },
  {
    label: 'Products & Services',
    url: '/products-services',
  },
  {
    label: 'Exhibitor',
    url: '/exhibitor',
  },
  {
    label: 'Exhibitor Boat Products',
    url: '/exhibitor-boat-products',
  },
  {
    label: 'Exhibitor Products & Services',
    url: '/exhibitor-products-services',
  },
]

export default links
