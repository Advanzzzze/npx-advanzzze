import ChangeThemeButton from './ChangeThemeButton';
import Nav from './Nav';

export default function Navbar() {
	return (
		<header className='flex items-center justify-between px-8 py-8 sm:px-24'>
			<Nav />
			<ChangeThemeButton />
		</header>
	);
}
