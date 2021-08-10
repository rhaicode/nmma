import { ReactComponent as HomeLogo } from '../assets/home.svg'
import { ReactComponent as EventLogo } from '../assets/event.svg'
import { ReactComponent as CompanyLogo } from '../assets/company.svg'

const links = [
  {
    label: 'Dashboard',
    url: '/',
    icon: <HomeLogo />,
  },
  {
    label: 'Event',
    url: '/event',
    icon: <EventLogo />,
  },
  {
    label: 'Company',
    url: '/company',
    icon: <CompanyLogo />,
  },
]

export default links
