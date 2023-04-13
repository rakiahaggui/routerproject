import React from 'react';
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <div>
    <h3>
    <Link to='/myhome'>Home</Link>

    </h3>
<h3>
   <Link to='/Users'>User List</Link>
</h3>
    </div>
  )
}

export default NavBar;
