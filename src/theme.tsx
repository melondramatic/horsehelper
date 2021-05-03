import { createMuiTheme } from '@material-ui/core';
import { lightBlue, orange } from '@material-ui/core/colors';

export const theme = createMuiTheme({
	palette: {
		type: 'dark',
		primary: {
			main: lightBlue[200],
		},
		secondary: {
			main: orange[300],
			dark: lightBlue[900],
		},
	},
});
