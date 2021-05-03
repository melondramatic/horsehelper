import { render, screen } from '@testing-library/react';
import { FirebaseAppProvider } from 'reactfire';
import MainPage from '../../pages/mainPage';

const TestMain = () => {
	return (
		<FirebaseAppProvider
			firebaseConfig={{
				apiKey: '',
				authDomain: '',
				projectId: '',
				storageBucket: '',
				messagingSenderId: '',
				appId: '',
			}}
		>
			<MainPage />
		</FirebaseAppProvider>
	);
};

test('renders the App Title', () => {
	render(TestMain());
	expect(screen.getByText('HorseHelper')).toHaveTextContent('HorseHelper');
});

test('renders the tabs "Supports" and "Main Character"', () => {
	render(TestMain());
	expect(screen.getByText('Supports')).toHaveTextContent('Supports');
	expect(screen.getByText('Main Character')).toHaveTextContent(
		'Main Character'
	);
});
