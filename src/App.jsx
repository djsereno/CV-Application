import { data } from './data';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import Dropdown from './Dropdown';

library.add(faAngleDown, faAngleUp);

function App() {
  return (
    <>
      <div id="dropdown-container">
        {data.map((dropdown) => (
          <Dropdown key={`${dropdown.label} Dropdown`} initOpenStatus={false} {...dropdown} />
        ))}
      </div>
      <div id="cv-container">Preview goes here</div>
    </>
  );
}

export default App;
