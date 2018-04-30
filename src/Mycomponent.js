import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ListExampleSelectable from 'material-ui/SelectField';

const style = {
  margin: 12,
};
const MyComponent = () => (
  <div>
    <RaisedButton label="Update" primary={true} style={style} />
  </div>
);

export default MyComponent;