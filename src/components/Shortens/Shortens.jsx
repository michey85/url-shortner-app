import {useState} from 'react';
import {useSelector} from 'react-redux';
import {Button} from 'components/Button';
import {selectLinks} from 'store/slices/linkSlice';
import classes from './Shortens.module.scss';


const Shortens = () => {
    const links = useSelector(selectLinks);
    const [copiedLink, setCopiedLink] = useState(null);

    const copyToClipboard = (link) => {
        navigator.clipboard.writeText(link).then(() => {
            setCopiedLink(link);
        });
    };

    if (!links?.length) return null;

    return (
        <section className={classes.Shortens}>
            <div className='container'>
                {links.map(item => (
                    <div key={item.code} className={classes.item} data-active={copiedLink === item.full_short_link2}>
                        <span>{item.original_link}</span>
                        <span>{item.full_short_link2}</span>
                        <Button
                            variant="square"
                            onClick={() => copyToClipboard(item.full_short_link2)}
                        >
                            {copiedLink === item.full_short_link2 ? 'Copied!' : 'Copy'}
                        </Button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export {Shortens};
