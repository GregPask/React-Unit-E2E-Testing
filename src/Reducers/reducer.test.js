


import React from 'react';
import { shallow, mount, configure } from 'enzyme';


import userReducer from "./userReducer";
import  { initialState} from "./userReducer";



import Adapter from "enzyme-adapter-react-16";


configure({ adapter: new Adapter() });




describe('<Reducer />', () => {
    
    const todoText = "This is the todo Text";
    

    test('It should return default state if nothing is passed', () => {
        
        expect(userReducer(initialState,{})).toEqual(initialState);

    })
    


    test('Submitting A todo', () => {


        const action  = {
            type: "SUBMIT_TODO",
            payload: {
                id: 1,
                text: todoText
            }
        }

        const expectedState = {
            todos: [{
                id: 1,
                text: todoText
            }],
            deleted: {},
            disableAddTodo: true,
            disableUndelete: true,
          
        };
        expect(userReducer(initialState,action)).toEqual(expectedState);
    });


    test('Deleting A Todo', () => {
        
        const startingState = {
            todos: [{
                id: 1,
                text: todoText
            }],
            deleted: {},
            disableAddTodo: true,
            disableUndelete: true
        };

         
        const expectedState = {
            todos: [],
            deleted: {},
            disableAddTodo: true,
            disableUndelete: true
        };



        const action = {
            type: "hello",
            payload: {
                id: 1
            }
        };


        expect(userReducer(startingState,action)).toEqual(expectedState);
    });



    test('Input Change Handler with no Text', () => {
        
        const startingState = {
            todos: [],
            deleted: {},
            disableAddTodo: true,
        };


        const action = {
            type: "INPUT_CHANGED",
            payload: {
                inputText: ""
            }
        }


        expect(userReducer(startingState,action)).toEqual(startingState);
    });



    test('Input Change with Text', () => {
       
        const startingState = {
            todos: [],
            deleted: {},
            disableAddTodo: true,
        };


        const action = {
            type: "INPUT_CHANGED",
            payload: {
                inputText: todoText
            }
        };


        const expectedState = {
            todos: [],
            deleted: {},
            disableAddTodo: false,
        };


        expect(userReducer(startingState,action)).toEqual(expectedState);
    })
    
    
    
    



})

