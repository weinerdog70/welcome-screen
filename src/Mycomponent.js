import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ListExampleSelectable from 'material-ui/SelectField';

const style = {
  margin: 12,
};
const MyComponent = () => (
  <div>
    <RaisedButton label="Primary" primary={true} style={style} />
  </div>
);

export default MyComponent;