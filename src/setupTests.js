// setup file
//https://airbnb.io/enzyme/docs/installation/
//https://facebook.github.io/create-react-app/docs/running-tests#src-setuptestsjs
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });