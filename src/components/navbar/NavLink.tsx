import Link from 'next/link';

export default function NavLink({ link }: { link: NavLinkConfig }) {
	return (
		<li>
			<Link
				href={link.href}
				className='text-slate-600 transition hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-300'
			>
				{link.title}
			</Link>
		</li>
	);
}
