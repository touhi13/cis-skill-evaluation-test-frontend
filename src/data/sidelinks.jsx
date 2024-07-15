import {
  IconLayoutDashboard,
  IconRouteAltLeft,
} from '@tabler/icons-react';

export const SideLinks = [
  {
    title: 'Dashboard',
    label: '',
    href: '/',
    icon: <IconLayoutDashboard />,
    role: 'admin'
  },
  {
    title: 'Payment Report',
    label: '',
    href: '/payment-report',
    icon: <IconRouteAltLeft />,
    role: 'employee'
  },
];
