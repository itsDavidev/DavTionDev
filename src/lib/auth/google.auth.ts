import {
	signInWithPopup,
	GoogleAuthProvider,
	fetchSignInMethodsForEmail,
} from 'firebase/auth';
import { GoogleProvider } from '../providers/firebase.providers';
import { authFirebase } from '../../config/firebase.config';
// import { userStateVar } from '../../constants/client/state';
import { userStateType } from '../../interfaces/state.interface';
import { userStateClient } from '../../constants/client/state';
import { _EXISTING_EMAIL } from '../../constants/errors/firebase.err';

export const googleAuth = () => {
	signInWithPopup(authFirebase, GoogleProvider)
		.then(response => {
			const { displayName, uid, email, photoURL, metadata } = response.user;
			const credential = GoogleAuthProvider.credentialFromResult(response);
			const token = credential?.accessToken;

			const user: userStateType = {
				name: displayName,
				email,
				photoURL,
				_uid: uid,
				_token: token,
				isLoggedIn: true,
				lastLogin: metadata.lastSignInTime,
			};

			return userStateClient({
				isAuthenticated: true,
				user,
			});
		})
		.catch(err => {
			//
			const errorCode = err.code;
			const email = err.email;
			if (errorCode === _EXISTING_EMAIL)
				fetchSignInMethodsForEmail(authFirebase, email);

			console.log('googleAuth', err);
		});
};
