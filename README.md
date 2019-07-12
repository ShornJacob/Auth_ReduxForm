1) Add jsconfig.json

{
    "compilerOptions": {
      "baseUrl": "src"
    },
    "include": ["src"]
  }

2) ignore aws-exports from git 

#ignore aws constant file
/auth/util/aws-exports.js

3)npm install 
@aws-amplify/auth
bootstrap
react-bootstrap
react-redux
react-router-dom
redux
redux-form
redux-thunk

//for tests - dev Dependencies
npm install package --save-dev
react-test-renderer
enzyme
redux-mock-store
enzyme-adapter-react-16



// setup file for enzyme
setupTests.js
//https://airbnb.io/enzyme/docs/installation/
//https://facebook.github.io/create-react-app/docs/running-tests#src-setuptestsjs
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

4)Add
src/auth/
src/reducers/

