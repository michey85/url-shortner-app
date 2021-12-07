import { useSelector, useDispatch } from 'react-redux';

import { Button } from 'components/Button';
import { selectUser, removeUser } from 'store/slices/userSlice';

import classes from './Menu.module.scss';

export const Menu = ({links = [], handleSignup, handleLogin}) => {
    const dispatch = useDispatch();
    const {token} = useSelector(selectUser);

    return (
        <div className={classes.menu}>
            <div className={classes.pages}>
                {links.map(link => (
                    <a
                    href={link.url}
                    key={link.text}
                    className={classes.link}
                    >
                        {link.text}
                    </a>
                ))}
            </div>
            <div className={classes.login}>
                {token ? (
                    <Button
                        onClick={() => dispatch(removeUser())}
                    >
                        Log out
                    </Button>
                ) : (
                    <>
                        <Button variant="link" onClick={handleLogin}>Login</Button>
                        <Button onClick={handleSignup}>Sign Up</Button>
                    </>
                )}
            </div>
        </div>
    )
}
