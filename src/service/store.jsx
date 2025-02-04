const init_state = {
  comments: [
    {id: 1, comment: 'Hello', date: '2023-10-01'},
  ],
};

const comment_reducer = (state = init_state, action)=>{
  switch(action.type){
    case 'ADD_COMMENT':
      return {...state, comments: [...state.comments, action.payload]};
    case 'DELETE_COMMENT':
      return {...state, comments : state.comments.filter((comment)=> comment.id !== action.payload)}
    default:
      return state;
  }
}

export default comment_reducer;