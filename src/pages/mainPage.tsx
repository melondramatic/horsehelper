import React, { useState } from 'react';
import { Button, ButtonGroup, makeStyles } from '@material-ui/core';
import 'firebase/firestore';

import { SelectedSupports, Tabs, SupportPageData } from '../constants';
import SupportPage from './supportPage';
import MainCharacterPage from './mainCharacterPage';

export const SupportPageDataContext = React.createContext(
	{} as SupportPageData
);

const styles = makeStyles({
	mainContainer: {
		color: 'white',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonGroup: {
		marginBottom: '16px',
	},
});

const MainPage = () => {
	const [selectedTab, setSelectedTab] = useState<Tabs>(Tabs.SupportTab);
	const [selectedSupports, setSelectedSupports] = useState<SelectedSupports>({
		support0: null,
		support1: null,
		support2: null,
		support3: null,
		support4: null,
		support5: null,
	});
	const [selectedSupport, setSelectedSupport] = useState(0);
	const [selectedHorse, setSelectedHorse] = useState<string>('');

	const classes = styles();
	return (
		<div className={classes.mainContainer}>
			<h1>HorseHelper</h1>
			<ButtonGroup className={classes.buttonGroup} color={'primary'}>
				<Button
					variant={selectedTab === Tabs.SupportTab ? 'contained' : 'outlined'}
					onClick={() => {
						setSelectedTab(Tabs.SupportTab);
					}}
				>
					Supports
				</Button>
				<Button
					variant={
						selectedTab === Tabs.MainCharacterTab ? 'contained' : 'outlined'
					}
					onClick={() => {
						setSelectedTab(Tabs.MainCharacterTab);
					}}
				>
					Main Character
				</Button>
			</ButtonGroup>
			<SupportPageDataContext.Provider
				value={{
					selectedSupports: selectedSupports,
					setSelectedSupports: setSelectedSupports,
					selectedSupport: selectedSupport,
					setSelectedSupport: setSelectedSupport,
				}}
			>
				<RoutingManager
					selectedTab={selectedTab}
					selectedHorse={selectedHorse}
					setSelectedHorse={setSelectedHorse}
				/>
			</SupportPageDataContext.Provider>
		</div>
	);
};

interface renderTabProps {
	selectedTab: Tabs;
	selectedHorse: string;
	setSelectedHorse: React.Dispatch<React.SetStateAction<string>>;
}

const RoutingManager = (props: renderTabProps) => {
	switch (props.selectedTab) {
		case Tabs.MainCharacterTab:
			return (
				<MainCharacterPage
					selectedHorse={props.selectedHorse}
					setSelectedHorse={props.setSelectedHorse}
				/>
			);
		case Tabs.SupportTab:
		default:
			return <SupportPage />;
	}
};

export default MainPage;
