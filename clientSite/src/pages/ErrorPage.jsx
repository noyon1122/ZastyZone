import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div>
        <div>
           <Link to={'/'}>Back to Home</Link>
        </div>
        <div>
            <img src="" alt="error image" />
        </div>
    </div>
  )
}

export default ErrorPage