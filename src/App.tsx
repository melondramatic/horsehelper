import { ThemeProvider } from '@material-ui/styles';
import MainPage from './pages/mainPage';
import { theme } from './theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<MainPage />
		</ThemeProvider>
	);
}

export default App;
