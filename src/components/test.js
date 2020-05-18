import React from 'react'
import { Link } from "react-router-dom";

export default function test() {
    return (
        <div className="flex justify-center">
            <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded">
                <Link to="/join">Would you like to chat?</Link>
            </button>
        </div>
    )
}
