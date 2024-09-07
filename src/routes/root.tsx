import { ModeToggle } from '@/components/mode-toggle';
import { ThemeProvider } from '@/components/theme-provider';
import { Outlet } from 'react-router-dom';

function App() {
	return (
		<>
			<ThemeProvider
				defaultTheme='dark'
				storageKey='vite-ui-theme'
			>
				<div className='absolute top-4 right-4'>
					<ModeToggle />
				</div>

				<Outlet />
			</ThemeProvider>
		</>
	);
}

export default App;
