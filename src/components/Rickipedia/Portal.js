import { Link } from 'react-router-dom'

function portal() {
     
        return(
            <nav>
                <div>

            <Link to="/home">Go Home!</Link>
            <Link to="/character"> Characters </Link>
            <Link to="/episodes"> Episodes </Link>
            <Link to="/locations"> Locations </Link>
            <Link to="/theories"> Theories </Link>
            </div>
          </nav>
        )
    }



export default portal

