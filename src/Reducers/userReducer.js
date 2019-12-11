
export const initialState = {
  todos: [],
  deleted: {},
  disableAddTodo: true,
  disableUndelete: true,

};


const userReducer = (state = initialState, action) => {
  switch (action.type) {


    case "hello":
    console.log("Deleting todo", action.payload);
    return {
      ...state,
      todos: state.todos.filter((todo) => todo.id !== action.payload.id)
    }


    case 'INPUT_CHANGED':

    // console.log("Input reducer", action.payload);
    
    if(action.payload.inputText !== ""){
      return {
        ...state,
        disableAddTodo: false
      }
    } else {
      return {
        ...state,
        disableAddTodo: true
      }
    }
   





    case "SUBMIT_TODO":
    console.log("Submit", action.payload)
      return{
        ...state,
        todos: [...state.todos, {id: action.payload.id, text: action.payload.text}]
      }
      





    




    default:
    return state;

  }
};


export default userReducer;
