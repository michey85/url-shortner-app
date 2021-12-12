import {useForm} from 'react-hook-form'
import {Button} from 'components/Button';

import {URL_SHORTNER} from 'config';

import classes from './Form.module.scss';

const Form = () => {
  const {
    register,
    formState: {errors},
    handleSubmit,
  } = useForm();

  const onSubmit = ({Url}) => {
    alert(Url)
    fetch(URL_SHORTNER + Url, {
      method: 'POST',
    }).then(res => res.json()).then(console.log).catch(console.error)
  }

  return (
    <section className={classes.section}>
      <div className="container">
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <input
            type="url"
            placeholder="Shorten a link here..."
            className={classes.input}
            style={{
              outlineColor: errors.Url ? 'var(--secondary-300)' : 'currentColor',
              outlineWidth: errors.Url ? '4px' : '1px',
            }}
            {...register('Url', {
              required: 'Please add a link',
              pattern: {
                value: /^(http|https):\/\/[^ "]+$/,
                message: 'Please enter a valid url'
              },
            })}
          />
          <Button
            variant="square"
            type="submit"
            size="medium"
          >Shorten it!</Button>
          {errors.Url && (
            <div className={classes.error}>{errors.Url.message}</div>
          )}
        </form>
      </div>
    </section>
  )
}

export {Form};