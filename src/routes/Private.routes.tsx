import { FC, lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import Profile from '../pages/private/Profile/Profile.page';
// import Tasks from '../pages/private/Tasks/Tasks.page';

const Tasks = lazy(() => import('../pages/private/Tasks/Tasks.page'));
const Profile = lazy(() => import('../pages/private/Profile/Profile.page'));

const PrivateRoutes: FC = () => {
	return (
		<Routes>
			<Route path='*' element={<Navigate to='/tareas' replace />} />
			<Route path='/tareas' element={<Tasks />} />
			<Route path='/profile/:profile' element={<Profile />} />
		</Routes>
	);
};

export default PrivateRoutes;
