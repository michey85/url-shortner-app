import {useDispatch} from 'react-redux'
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {setUser} from 'store/slices/userSlice'
import {Form} from './Form';

export const SignUp = ({closeModal}) => {
    const dispatch = useDispatch();

    const handleRegister = (email, pass) => {
        console.log('handleRegister');
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, pass)
            .then(({user}) => {
                dispatch(setUser({
                    id: user.uid,
                    email: user.email,
                    token: user.accessToken,
                }))
                closeModal();
            })
            .catch(console.error)
    }

    return (
        <Form
            handleClick={handleRegister}
            title="Register"
        />
    )
}
