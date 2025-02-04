import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Comments() {
  const comments = useSelector(state => state.comments || []);
  const dispatch = useDispatch();

  const deleteComment = (id) => {
    if(window.confirm('Are you sure you want to delete this comment?'))
    dispatch({type:'DELETE_COMMENT', payload: id})
  }
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-gray-700">Comments</h1>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-4 border-b text-left text-gray-600">ID</th>
            <th className="py-3 px-4 border-b text-left text-gray-600">Message</th>
            <th className="py-3 px-4 border-b text-left text-gray-600">Date</th>
            <th className="py-3 px-4 border-b text-left text-gray-600">Action</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment)=>(

          <tr className="hover:bg-gray-50" key={comment.id}>
            <td className="py-3 px-4 border-b text-gray-700">{comment.id}</td>
            <td className="py-3 px-4 border-b text-gray-700">{comment.comment}</td>
            <td className="py-3 px-4 border-b text-gray-700">{comment.date}</td>
            <td className="py-3 px-4 border-b">
              <button className="bg-red-500 text-white cursor-pointer  px-3 py-1 rounded hover:bg-red-600 transition duration-200" onClick={() => deleteComment(comment.id)}>Delete</button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Comments;