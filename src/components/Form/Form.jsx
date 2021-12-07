import {Button} from 'components/Button';

import classes from './Form.module.scss';

const Form = () => {
  return (
    <section className={classes.section}>
      <div className={`${classes.form} container`}>
        <input
          type="url"
          placeholder="Shorten a link here..."
          className={classes.input}
        />
        <Button
          variant="square"
          type="submit"
          size="medium"
        >Shorten it!</Button>
      </div>
    </section>
  )
}

export {Form};