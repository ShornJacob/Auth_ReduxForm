import React from 'react';
import AuthAlert from './AuthAlert';
import renderer from 'react-test-renderer';


it('renders correctly', () => {

 const code = "ACode"
 const message = "AMessage"


  const tree = renderer
    .create(<AuthAlert code={code} message={message}></AuthAlert>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});



it('renders correctly', () => {

    const code = "ACode"
    const message = "AMessage"
    const redirectLink = "/alink"
   
   
     const tree = renderer
       .create(<AuthAlert code={code} message={message} redirectLink={redirectLink}></AuthAlert>)
       .toJSON();
     expect(tree).toMatchSnapshot();
   });
   
