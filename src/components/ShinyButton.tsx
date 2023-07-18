import cn from '@/utils/cn';
import { ButtonHTMLAttributes } from 'react';

interface ShinyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

export default function ShinyButton({
	children,
	className,
	...props
}: ShinyButtonProps) {
	return (
		<button
			className={cn(
				'rounded-md bg-gradient-to-br bg-[length:200px_170px] bg-left-top px-4 py-2 text-white transition-all duration-300 hover:bg-left-bottom',
				className,
			)}
			{...props}
		>
			{children}
		</button>
	);
}
