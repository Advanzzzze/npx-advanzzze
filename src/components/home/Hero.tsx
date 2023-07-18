import HeroButtons from './HeroButtons';
import HeroTitle from './HeroTitle';

export default function Hero() {
	return (
		<div className='flex flex-col items-center justify-center gap-4 p-4 text-center'>
			<HeroTitle />
			<HeroButtons />
		</div>
	);
}
