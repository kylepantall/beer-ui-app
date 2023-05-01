import { Icon } from '@tabler/icons-react';

export type NavData = {
    // Items can contain any type of NavItem
    Items: NavItem[];
}

export type NavItem = NavData & {
    Title: string;
    Description?: string;
    Route: string;
}

export type LinkNavItem = NavItem;

export type IconNavItem = NavItem & LinkNavItem & {
    Icon: Icon;
};

export type TileDropdownNavItem = NavItem & {
    Items: IconNavItem[];
    Footer?: {Content: JSX.Element};
}