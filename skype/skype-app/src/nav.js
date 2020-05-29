import React from 'react';
import  { Link} from 'react-router-dom';

function nav() {
  return (
    <div className="App">
        <nav>
        <ul>
            <Link to="/About">
            <button>about</button>
            </Link>
         
     </ul>
        </nav>
     
    </div>
  );
}

export default nav;
