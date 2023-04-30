'use client';

import { createContext, useContext } from 'react';
import * as AppData from '../data';

const AppDataContext = createContext({
    ...AppData,
});

export default function DataProvider({ children }: { children: JSX.Element }) {
    return (
        <AppDataContext.Provider value={AppData}>
            {children}
        </AppDataContext.Provider>
    );
}

export function useAppData() {
    return useContext(AppDataContext);
}
