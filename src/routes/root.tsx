import { ModeToggle } from '@/components/mode-toggle';
import { ThemeProvider } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import { RefreshCcw } from 'lucide-react';
import { Outlet } from 'react-router-dom';
import { AnimatedLink } from '../components/animated-link';

function App() {
	return (
		<>
			<ThemeProvider
				defaultTheme='dark'
				storageKey='vite-ui-theme'
			>
				<div className='fixed top-4 right-4'>
					<ModeToggle />
				</div>
				<div className='flex flex-row align-middle items-center justify-between mb-4 container mt-4'>
					<AnimatedLink to='/'>
						<h1 className='text-3xl  text-foreground   font-bold text-center  rounded-lg '>
							Hacher News{' '}
						</h1>
					</AnimatedLink>

					<Button
						title='Refresh'
						size='icon'
						variant='outline'
						className='group'
					>
						<RefreshCcw className='h-4 w-4 group-hover:animate-spin' />
					</Button>
				</div>
				<Outlet />
			</ThemeProvider>
		</>
	);
}

export default App;
