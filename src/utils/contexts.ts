import { Dispatch, SetStateAction, createContext } from 'react';

export const ThemeContext = createContext('dark');
export const SetThemeContext = createContext<Dispatch<
	SetStateAction<'dark' | 'light'>
> | null>(null);
