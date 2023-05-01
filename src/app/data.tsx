import { IconBeerFilled, IconStarFilled } from '@tabler/icons-react';
import { IconNavItem, NavData, TileDropdownNavItem } from './interfaces/navbar';

export const Navigation: NavData = {
    Items: [
        {
            Title: 'Features',
            Items: [
                {
                    Title: 'Best Picked',
                    Description: 'All our best picked beers!',
                    Route: '/',
                    Icon: IconStarFilled,
                } as IconNavItem,
                {
                    Title: 'All Beers',
                    Description: 'All our beers!',
                    Route: '/all',
                    Icon: IconBeerFilled,
                }
            ],
        } as TileDropdownNavItem
    ],
};