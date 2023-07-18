'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { mainNavConfig } from '../../../config/mainNavConfig';
import NavLink from './NavLink';
import { RiNpmjsFill } from 'react-icons/ri';

export default function Nav() {
	const pathName = usePathname().split('/')[1];

	return (
		<nav className='flex items-center gap-8'>
			<Link href={'/'} className='flex items-center gap-2 text-lg'>
				<RiNpmjsFill size={20} /> Advanzzze
			</Link>
			<ul className='flex items-center gap-4 max-sm:hidden'>
				{mainNavConfig.map((link) => (
					<NavLink key={link.title} link={link} />
				))}
			</ul>
		</nav>
	);
}
