import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AddComment() {
  const [comment, setComment] = useState({id: null, comment : "", date : ""});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const comments = useSelector((state)=> state.comments);
  function addComment(e){
    e.preventDefault()
    let nextId = Math.max(...comments.map((comment)=> comment.id))+1;
    const newComment = {...comment, id: nextId};
    setComment(newComment);
    dispatch({type: 'ADD_COMMENT', payload: newComment})
    navigate("/comments");
  }
  return (
    <>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={(e)=> addComment(e)}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="comment">
            Comment:
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="comment"
            name="comment"
            value={comment.comment}
            onChange={(e)=> setComment({...comment, comment: e.target.value })}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
            Date:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="date"
            id="date"
            name="date"
            value={comment.date}
            onChange={(e)=> setComment({...comment, date: e.target.value })}
            required
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add Comment
        </button>
      </form>
    </>
  )
}