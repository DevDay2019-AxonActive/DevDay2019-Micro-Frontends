import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import fontawesome from 'font-awesome/css/font-awesome.css';
import React, { useContext } from 'react';
import Style from 'style-it';

import styles from './App.css';

import { ReactWebComponent, EventContext } from 'create-react-web-component';

import PropTypes from 'prop-types';

const App = props => {
  const dispatch = useContext(EventContext);

  /*
   * This is a workaround to import external css files as @import does not work properly
   */
  const cssStyles = styles
    .toString()
    .concat(fontawesome.toString())
    .concat(bootstrap.toString());

  const handleClick = () => {
    const event = new CustomEvent('clicked', {
      detail: {
        message: props.teamName
      }
    });
    dispatch(event);
  };

  return (
    <Style>
      {cssStyles.toString()}
      <div className='app' onClick={handleClick}>
        Happy Coding 🎅⚔ <strong>[{props.teamName}]</strong>
      </div>
    </Style>
  );
};

App.propTypes = {
  teamName: PropTypes.string
};

// Do not set to the component attributes as Angular app interacts with the component via properties only.
ReactWebComponent.setAttributes({});

ReactWebComponent.setProperties({
  teamName: ''
});

ReactWebComponent.render(App, 'react-component-name');

export default App;
