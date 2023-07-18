'use client';

import cn from '@/utils/cn';
import { SetThemeContext, ThemeContext } from '@/utils/contexts';
import { useContext } from 'react';
import { LuMoonStar, LuSun } from 'react-icons/lu';

export default function ChangeThemeButton() {
	const setTheme = useContext(SetThemeContext);
	const theme = useContext(ThemeContext);

	const isDark = theme === 'dark';

	return (
		<button
			onClick={() =>
				setTheme
					? setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'))
					: null
			}
			className='group w-14 rounded-full border border-slate-500 p-1 transition hover:border-slate-700 dark:border-slate-400 dark:hover:border-slate-300'
		>
			<div
				className={cn(
					'flex h-6 w-6 items-center justify-center rounded-full bg-slate-700 text-white transition group-hover:bg-slate-800 dark:bg-slate-400 dark:text-black dark:group-hover:bg-slate-300',
					{ 'translate-x-0': isDark, 'translate-x-full': !isDark },
				)}
			>
				{isDark ? <LuMoonStar size={20} /> : <LuSun size={20} />}
			</div>
		</button>
	);
}
