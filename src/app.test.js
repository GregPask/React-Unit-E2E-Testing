import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import {App} from "./App";

import { initialState } from "./Reducers/userReducer";


configure({ adapter: new Adapter() });

describe('<App />', () => {
    

    test('App render without crashing....', () => {
        
        const mockFunction = jest.fn();

        let component = shallow(<App deleteTodo={mockFunction} inputChanged={mockFunction} user={initialState} submitTodo={mockFunction} />);


        console.log(component.debug());


        // console.log(store);

        // const component = shallow(
        //     <App 
        //         state = {initialState}
        //         submitTodo={mockFunction}
        //         inputChanged={mockFunction}
            
            
        //     />
        // ).childAt(0).dive();
            

        // console.log(component.exists());


    })
    


})
