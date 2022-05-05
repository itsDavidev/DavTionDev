import { makeVar } from '@apollo/client';
import {
	StateTaskInterface,
	StateUserInterface,
} from '../../interfaces/state.interface';

export const userInitialState: StateUserInterface = {
	isAuthenticated: false,
	user: {
		id: '',
		_uid: '',
		name: '',
		email: '',
		photoURL: '',
		_token: '',
		isLoggedIn: false,
		lastLogin: '',
	},
};

export const taskInitialState: StateTaskInterface = {
	tasks: [],
};

export const userStateClient = makeVar(userInitialState);
export const taskStateVar = makeVar(taskInitialState);
