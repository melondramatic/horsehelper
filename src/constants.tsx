import { SetStateAction } from 'react';

export enum Tabs {
	SupportTab,
	MainCharacterTab,
}

export interface SupportPageData {
	selectedSupports: SelectedSupports;
	setSelectedSupports: React.Dispatch<SetStateAction<SelectedSupports>>;
	selectedSupport: number;
	setSelectedSupport: React.Dispatch<SetStateAction<number>>;
}

export interface SelectedSupports {
	support0: SupportCard | null;
	support1: SupportCard | null;
	support2: SupportCard | null;
	support3: SupportCard | null;
	support4: SupportCard | null;
	support5: SupportCard | null;
}

export interface SupportCard {
	id: string;
	name: string;
	img: string;
	rarity: string;
	'type-img': string;
	innateSkills: Skill[];
	skills: Skill[];
	dialog: Dialog[];
	events: DialogEvent[];
	type: Types;
}

export interface Skill {
	description: string;
	img: string;
	japaneseName: string;
	name: string;
	tag: string;
	isDialog: boolean;
}

export interface Dialog {
	japaneseName: string;
	options: Option[];
}

export interface DialogEvent extends Dialog {
	type: string;
}

export interface Option {
	text: string;
	effect: string;
}

export enum Types {
	Speed = 'Speed',
	Stamina = 'Stamina',
	Power = 'Power',
	Guts = 'Guts',
	Int = 'Int',
	Friend = 'Friend',
}
