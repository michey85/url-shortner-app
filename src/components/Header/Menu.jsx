import { Button } from 'components/Button'

import classes from './Menu.module.scss';

export const Menu = ({links = []}) => {
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
                    {/* TODO: add isAuth ternary */}
                    <Button variant="link">Login</Button>
                    <Button>Sign Up</Button>
            </div>
        </div>
    )
}
