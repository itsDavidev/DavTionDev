import { Suspense, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';
import { getOnAuthUser } from './lib/auth/getOnAtuthUser';

// routes
import Loading from './components/LoadingDavtion/Loading.layout';
import PrivateRoutes from './routes/Private.routes';
import PublicRoutes from './routes/Public.routes';
import LoadingLazy from './components/LoadingLazy/LoadingLazy';

function App() {
	const [isLogged, setIsLogged] = useState(false);
	const [loading, setloading] = useState(true);

	useEffect(() => {
		getOnAuthUser({ setIsLoggedIn: setIsLogged, setLoading: setloading });
	}, []);

	return (
		<div className='App'>
			<Helmet>
				<title>Davtion Dev</title>
			</Helmet>
			{loading ? (
				<Loading />
			) : (
				<Suspense fallback={<LoadingLazy />}>
					<BrowserRouter>
						{isLogged ? <PrivateRoutes /> : <PublicRoutes />}
					</BrowserRouter>
				</Suspense>
			)}
		</div>
	);
}

export default App;
