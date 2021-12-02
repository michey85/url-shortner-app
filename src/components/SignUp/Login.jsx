import {useDispatch} from 'react-redux';
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {setUser} from 'store/slices/userSlice';
import {Form} from './Form';

export const Login = ({closeModal}) => {
    const dispatch = useDispatch();

    const handleLogin = (email, pass) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, pass)
            .then(({user}) => {
                console.log(user)
                dispatch(setUser({
                    id: user.uid,
                    email: user.email,
                    token: user.accessToken,
                }));
                closeModal();
            })
            .catch(console.error)
    }

    return (
        <Form
            handleClick={handleLogin}
            title="Login"
        />
    )
}
