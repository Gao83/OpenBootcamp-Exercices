import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


function HomePage() {

    const location = useLocation()
    const navigate = useNavigate()

    return (
        <div>
            <h1>Home Page</h1>

            <div>
                <button onClick={() => navigate('/tasks')}>
                    Go to Tasks
                </button>
                <button onClick={() => navigate(-1)}>
                    Go Back
                </button>
                <button onClick={() => navigate(+1)}>
                    Go Forward
                </button>
            </div>
        </div>
    )
}

export default HomePage