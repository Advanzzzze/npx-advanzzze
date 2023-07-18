import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { siteConfig } from '../../config/siteConfig';
import ThemeProvider from '@/components/ThemeProvider';
import Navbar from '@/components/navbar/Navbar';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: ['Next.js', 'React.js', 'Tailwind CSS', 'npx', 'Documentation'],
	authors: [
		{
			name: 'imLymei',
			url: 'https://lymei.art',
		},
		{
			name: 'kevynLopes',
			url: 'https://github.com/kevynlopes',
		},
	],
	creator: 'imLymei',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='pt-br'>
			<ThemeProvider value='dark' font={poppins.className}>
				<Navbar />
				{children}
			</ThemeProvider>
		</html>
	);
}
