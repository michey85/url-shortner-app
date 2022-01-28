import classes from './Hero.module.scss';
import { MButton } from 'components/Button';
import Img from 'images/illustration-working.svg';

import { motion } from 'framer-motion';

const imageAnimation = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration: 0.35}
  }
}

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2}
  })
}

const Hero = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className={`${classes.hero} container`}
    >
      <div className={classes.imgContainer}>
        <motion.img variants={imageAnimation} src={Img} alt="hero" className={classes.img} />
      </div>
      <article className={classes.text}>
        <motion.h1 custom={1} variants={textAnimation} className={classes.title}>More than just shorter links</motion.h1>
        <motion.p custom={2} variants={textAnimation} className={classes.description}>Build your brand's recognition and get detailed insights on how your links are performing.</motion.p>
        <MButton custom={3} variants={textAnimation} size="large">Get Started</MButton>
      </article>
    </motion.section>
  );
};

export { Hero };
