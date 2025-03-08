import { LayoutGrid, Users, BriefcaseBusiness, Settings } from 'lucide-vue-next';

import type { Link } from '@/types';

const links: Link[] = [
    {
        title: 'Home',
        path: '/',
        Icon: LayoutGrid
    },
    {
        title: 'Applications',
        path: '/applications',
        Icon: Users
    },
    {
        title: 'Jobs',
        path: '/jobs',
        Icon: BriefcaseBusiness
    },
    {
        title: 'Settings',
        path: '/settings',
        Icon: Settings
    }
]

export default links