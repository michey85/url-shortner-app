import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {Button} from 'components/Button';
import {createShortLink} from 'store/slices/linkSlice';

import classes from './Form.module.scss';

const Form = () => {
  const dispatch = useDispatch();
  const {
    register,
    formState: {errors},
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = ({Url}) => {
    dispatch(createShortLink(Url));
    reset();
  }

  return (
    <section className={classes.section}>
      <div className="container">
        <form
          className={classes.form}
          autoComplete='off'
          onSubmit={handleSubmit(onSubmit)}
        >
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
