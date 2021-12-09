import {Header} from 'components/Header';
import {Hero} from 'components/Hero';
import {Form} from 'components/Form';
import {Features} from 'components/Features';
import { CallToAction } from 'components/CallToAction';
// import classes from './App.module.scss';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Form />
      <Features />
      <CallToAction />
    </>
  );
}

export {App};
