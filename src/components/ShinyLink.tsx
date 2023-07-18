import cn from '@/utils/cn';
import Link from 'next/link';
import { AnchorHTMLAttributes } from 'react';

interface ShinyLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	children: React.ReactNode;
}

export default function ShinyLink({
	children,
	href,
	className,
	...props
}: ShinyLinkProps) {
	return (
		<Link
			href={href ? href : '#'}
			className={cn(
				'rounded-md bg-gradient-to-br bg-[length:200px_170px] bg-left-top text-white transition-all duration-300 hover:bg-left-bottom',
				className,
			)}
			{...props}
		>
			{children}
		</Link>
	);
}
