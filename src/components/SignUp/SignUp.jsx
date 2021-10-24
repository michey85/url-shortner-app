import {useState} from 'react';
import { useDispatch } from 'react-redux'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from 'store/slices/userSlice'

import {Button} from 'components/Button';

export const SignUp = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const dispatch = useDispatch();

    const handleRegister = () => {
        console.log('handleRegister');
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, pass)
            .then(res => {
                dispatch(setUser({
                    email: res.email,
                    token: res.accessToken,
                }))
            })
            .catch(console.error)
    }

    return (
        <div>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
            />
            <Button
                onClick={handleRegister}
            >Register</Button>
        </div>
    )
}
