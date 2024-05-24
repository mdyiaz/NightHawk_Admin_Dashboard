import Loading from '@/components/Loading';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const AuthLayout = () => {
	const { isAuth, auth } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (!isAuth) {
			navigate('/login');
		} else {
			const user_type = auth?.user?.user_type;

			if (['admin', 'branch', 'rider'].includes(user_type)) {
				navigate(`/${user_type}`);
			} else {
				dispatch({ type: 'LOGOUT' });
				navigate('/login');
			}
		}
	}, [isAuth, navigate]);

	return (
		<>
			<Suspense fallback={<Loading />}>
				<ToastContainer />
				{<Outlet />}
			</Suspense>
		</>
	);
};

export default AuthLayout;
