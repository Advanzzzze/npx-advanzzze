import Image from 'next/image';
import GradientText from '../GradientText';

export default function HeroTitle() {
	return (
		<div className='flex flex-col items-center justify-center gap-4 max-sm:pt-16'>
			<Image
				src={'/AdvanzzzeIcon.png'}
				alt='Advanzzze Logo'
				width={300}
				height={300}
				priority
				quality={100}
				className='max-sm:hidden'
			/>
			<h1 className='font w-3/5 text-3xl font-semibold sm:text-6xl'>
				O jeito mais simples de utilizar{' '}
				<GradientText className='from-adv-purple-300 to-adv-orange-300'>
					Next.js
				</GradientText>{' '}
				em{' '}
				<GradientText className='from-adv-blue-300 to-adv-purple-300'>
					várias plataformas
				</GradientText>
				.
			</h1>
			<div className='text-lg'>
				<p>
					Construa seu projeto Next.js focando no que mais importa e de forma
					fácil.
				</p>
				<p>Inicie rápido. Programe mais.</p>
			</div>
		</div>
	);
}
