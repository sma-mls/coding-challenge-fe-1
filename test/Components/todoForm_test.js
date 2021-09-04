import React from 'react';
import { shallow, configure } from 'enzyme';
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

import TodoForm from '../../src/Components/TodoForm';
import Adapter from 'enzyme-adapter-react-16';

import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });
const mockStore = configureMockStore();
const store = mockStore({});

const shallowSetup = () => {
    const enzymeWrapper = shallow(<TodoForm store={store}/>).dive();
    return {
        enzymeWrapper
    };
}

describe('Shallow rendered Todo Form', () => {
    it('should render a form for Todo Project', () => {
        const { enzymeWrapper } = shallowSetup();
        expect(enzymeWrapper).toBeTruthy();
        expect(enzymeWrapper.containsMatchingElement(<button>Add</button>)).toBe(true);
        expect(enzymeWrapper.find('input')).toBeTruthy();
    });

    it('should change state value on text change', () =>{
        const { enzymeWrapper } = shallowSetup();
        enzymeWrapper.find('input').simulate('change', { target: { value: '123456' } });
        expect(enzymeWrapper.state().todoTitle).toBe('123456')
    })
});