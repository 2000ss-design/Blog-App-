import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>SORRY</h2>
            <p>That Page Cannot Be Found</p>
            <Link to="/" >Back To Home Page</Link>
        </div>
     );

}
 
export default NotFound;