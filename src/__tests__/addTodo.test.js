


import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import AddTodo from "../JS/AddTodo";
import List from "../JS/List";

import Adapter from "enzyme-adapter-react-16";


configure({ adapter: new Adapter() });



describe('<Add Todo />', () => {
    
    let component;
    let mountedComponent;
    const submitMock = jest.fn();
    const changeMock = jest.fn();



    beforeEach(() => {
        component = shallow(
            <AddTodo
            inputChanged={changeMock} 
            submitTodo={submitMock}
            disableBtn    
            
            />
        );


        mountedComponent = mount(
        <AddTodo
                submitTodo ={submitMock}
                inputChanged={changeMock}
            
            />)
    })


    test('It should render successfully', () => {
        
        expect(component.length).toBe(1);
    })


    test('It should have one input', () => {
        
        expect(component.find(`[data-test='add-input']`).length).toBe(1);
    })
    


    test('It should have one Btn', () => {
        
        expect(component.find(`[data-test='add-btn']`).length).toBe(1);
    })


    test("It should call the submitTodo function when clicked", () => {
        expect(submitMock.mock.calls.length).toEqual(0);
        mountedComponent.find("form").simulate("submit");
        expect(submitMock.mock.calls.length).toEqual(1);
    })


    test('It should be disabled when there is no text in the input', () => {
        
        const button = component.find(`[data-test='add-btn']`).html().includes('disabled=""');

        console.log(button);

        expect(button).toEqual(true);
    })


 
    
    
    

})





describe('<TodoList />', () => {

    const deleteMock = jest.fn();

    const props = {
        todos: [
            {
                id: 1,
                text: "Greg Pask"
            },
            {
                id: 2,
                text: "Alex Pask"
            }
        ],
        deleteTodo: deleteMock
    };


    const component = shallow(<List {...props} />);




    test('It renders Successfully', () => {
        
        expect(component.length).toBe(1);
        expect(component.find(`[data-test='list-header']`).length).toBe(1);
        expect(component.find(`[data-test='list-list']`).length).toBe(1);
    });


    test('Should Display a todo when passed in as a prop', () => {
        
        // console.log(component.debug());
        let find = component.find(`[data-test='todo-text']`).first();
        expect(find.text()).toEqual(props.todos[0].text);

    })


    test('Should call delete todo function when Called...', () => {
        expect(deleteMock.mock.calls.length).toBe(0);
        component.find(`[data-test='delete-btn']`).first().simulate("click");
        expect(deleteMock.mock.calls.length).toBe(1);
    })
    
    
    

})

