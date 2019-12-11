let todoId = 0;


const nextId = () => {
  todoId += 1;
  return todoId;
};


// eslint-disable-next-line import/prefer-default-export
export const submitTodo = (text) => {

    console.log("Submit Todo Action....");

    return {
        type: 'SUBMIT_TODO',
        payload: {
          id: nextId(),
          text,
        }
    }
}



export const deleteTodo = (id) => {
    console.log("DELETE TODO ACTION", id);
    return {
        type: "hello",
        payload: {
            id,
        }
      };
};




export const inputChanged = (inputText) => {

    console.log("INPUT CHANGE ACTION");

    return {
        type: "INPUT_CHANGED",
        payload: inputText
    }
}