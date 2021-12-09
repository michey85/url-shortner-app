import {Button} from 'components/Button';

import classes from './Form.module.scss';

const Form = () => {
  return (
    <section className={classes.section}>
      <div className="container">
        <div className={classes.form}>
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
      </div>
    </section>
  )
}

export {Form};