import '@/index.css';

import { Link } from "react-router-dom";

import illustration from "@/assets/point-dexclamation.png";

function NotFound() {
    return (
        <div className="flex flex-col place-content-center mx-auto" >
            <img className="mx-auto h-28" src={illustration} alt="Page not found" />

            <div className="flex flex-col mx-auto gap-4 text-center">
                <span className="font-bold text-xxl text-gray-500">Oops,</span>
                <span>Something went wrong.</span>
           </div>

           <Link to="/" className="mx-auto p-2 border border-purple-300 rounded-lg  text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700">
            Back Home
            </Link>

        </div>
    )
}

export default NotFound;