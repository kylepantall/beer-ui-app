import { IconStarFilled } from '@tabler/icons-react';
import { NavData } from './interfaces/navbar';

export const Navigation: NavData = {
    Title: 'Ale! Yeah',
    Items: [
        {
            title: 'Best Picked',
            description: 'All our best picked beers!',
            route: '/',
            icon: IconStarFilled,
        },
    ],
};