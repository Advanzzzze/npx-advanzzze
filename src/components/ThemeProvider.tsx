'use client';

import cn from '@/utils/cn';
import { SetThemeContext, ThemeContext } from '@/utils/contexts';
import { createContext, useState } from 'react';

interface ThemeProviderProps {
	children: React.ReactNode;
	value: 'dark' | 'light';
	font: string;
}

export default function ThemeProvider({
	children,
	value,
	font,
}: ThemeProviderProps) {
	const [theme, setTheme] = useState<'dark' | 'light'>(value);

	const isDark = theme === 'dark';

	return (
		<ThemeContext.Provider value={theme}>
			<SetThemeContext.Provider value={setTheme}>
				<body
					className={cn('min-h-screen antialiased', font, {
						'dark bg-black text-white': isDark,
					})}
				>
					{children}
				</body>
			</SetThemeContext.Provider>
		</ThemeContext.Provider>
	);
}
