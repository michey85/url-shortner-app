import {useDispatch} from 'react-redux';
import {setUser} from 'store/slices/userSlice';
import {Form} from './Form';

export const Login = ({closeModal}) => {
    const dispatch = useDispatch();

    const handleLogin = (email, pass) => {
        // hardcode
        dispatch(setUser({
            id: 1,
            email,
            token: '$%1234567' + pass,
        }));

        closeModal();
    }

    return (
        <Form
            handleClick={handleLogin}
            title="Login"
        />
    )
}
