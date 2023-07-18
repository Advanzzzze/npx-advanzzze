import Link from 'next/link';
import ShinyLink from '../ShinyLink';

export default function HeroButtons() {
	return (
		<div className='flex gap-2'>
			<ShinyLink
				href='https://www.npmjs.com/package/advanzzze'
				className='from-adv-purple-300 via-adv-blue-300 to-adv-orange-300 px-6 py-2 text-sm'
			>
				Comece Agora
			</ShinyLink>
			<Link
				href={'https://github.com/imLymei/advanzzze-package'}
				target='_blank'
				className='rounded-md border border-slate-500 px-6 py-2 text-sm text-slate-500 transition hover:border-slate-700 hover:text-slate-700 dark:border-slate-400 dark:text-slate-400 dark:hover:border-slate-300 dark:hover:text-slate-300'
			>
				GitHub
			</Link>
		</div>
	);
}
