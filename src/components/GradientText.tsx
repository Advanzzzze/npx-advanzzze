import cn from '@/utils/cn';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface GradientTextProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
	children: React.ReactNode;
}

export default function GradientText({
	children,
	className,
	...props
}: GradientTextProps) {
	return (
		<span
			className={cn(
				'bg-gradient-to-br bg-clip-text text-transparent',
				className,
			)}
			{...props}
		>
			{children}
		</span>
	);
}
