import './styles.css';

import IMAGE from './react.png';
import LOGO from './logo.svg';

export const App = () => {
  return (
    <>
      <h1>React TypeScript Webpack Starter Template</h1>
      <img src={IMAGE} alt="React logo" width="200" height="200" />
      <img src={LOGO} alt="React logo" width="200" />
    </>
  );
};
