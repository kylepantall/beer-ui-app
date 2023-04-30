import { Icon } from '@tabler/icons-react';

export interface NavData {
    Title: string;
    Items: NavItem[];
}

export interface NavItem {
    title: string;
    description: string;
    route: string;
    icon: Icon;
}