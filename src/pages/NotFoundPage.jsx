import { Link } from "react-router-dom"
import './NFP.css'

const NotFoundPage = () => {
  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center">
      <h1 className="text-red-500 text-9xl font-bold">404 Not Found</h1>
        <Link to={"/"}>
        <button className="text-white text-5xl font-bold cursor-pointer">Go Back Home</button>
      </Link>
    </div>
  );
}

export default NotFoundPage;