import { submitTodo,deleteTodo,inputChanged} from "./actions";
import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe('<Actions />', () => {

    const todoText = "A Todo";

    test('should create an action to add a todo', () => {
            const expectedAction = {
                type: "SUBMIT_TODO",
                payload: {
                    id: 1,
                    text: todoText
                }
            };
            expect(submitTodo(todoText)).toEqual(expectedAction);

    });

    test("Should create- an action to delete a todo", () => {

        const expectedAction = {
            type: "hello",
            payload: {
                id: 1
            }
        };
        expect(deleteTodo(1)).toEqual(expectedAction);
    });


    test('Should Create an action to handle inpout Change', () => {
        const expectedAction = {
            type: "INPUT_CHANGED",
            payload: todoText
        }
        expect(inputChanged(todoText)).toEqual(expectedAction);

    })
});
