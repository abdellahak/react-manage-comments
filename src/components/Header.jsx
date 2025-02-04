import { Link } from 'react-router-dom';
export default function Header(){

  return (
    <>
    <header className="bg-blue-600 p-4 flex justify-between items-center">
      <Link to="/" className="text-white text-2xl">Comments Manager</Link>
      <div>
        <Link to="/comments/add" className="bg-green-500 text-white px-4 py-2 rounded mr-2">Add Comment</Link>
        <Link to="/comments" className="bg-yellow-500 text-white px-4 py-2 rounded">Show Comments</Link>
      </div>
    </header>
    </>
  )
}