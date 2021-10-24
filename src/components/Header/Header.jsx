import { useState } from 'react'
import { IoMenu } from 'react-icons/io5';
import { motion, AnimatePresence } from "framer-motion";
import useMatchMedia from 'use-match-media-hook'
import classes from './Header.module.scss';
import Logo from 'images/logo.svg';
import {Menu} from './Menu';

const menuItems = [
    {
        url: '#',
        text: 'Features',
    },
    {
        url: '#',
        text: 'Prices',
    },
    {
        url: '#',
        text: 'Resources',
    },
];

const queries = [
    '(max-width: 766px)',
    '(min-width: 767px)'
  ]

export const Header = () => {
    const [mobile] = useMatchMedia(queries);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <header className={`${classes.header} container`}>
            <img src={Logo} alt="logo" className={classes.logo}/>
            {mobile ? (
             <IoMenu
                className={classes.burger}
                onClick={() => setShowMobileMenu(!showMobileMenu)}
            />
             ) : (
                <Menu links={menuItems} />
            )}
            <AnimatePresence>
                {
                    showMobileMenu && mobile && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className={classes.mobileMenu}
                        >
                            <Menu links={menuItems} />
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </header>
    )
}
