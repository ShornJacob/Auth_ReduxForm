import React from 'react';
import AmplifyAlert from './AuthResult';
import renderer from 'react-test-renderer';


it('renders correctly', () => {

 const code = "ACode"
 const message = "AMessage"


  const tree = renderer
    .create(<AmplifyAlert code={code} message={message}></AmplifyAlert>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});