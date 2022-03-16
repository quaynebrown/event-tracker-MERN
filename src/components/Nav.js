import React from 'react';

function Nav() {
  return (
      <nav className='header-nav'>
          <form action="POST">
              <label htmlFor="username" className='sr-only'>Username</label>
            <input type="text" name="username" id="username" placeholder='username' required/>
            <button type="submit" value="Login">Login</button>
          </form>
      </nav>
  );
 ;
}

export default Nav;
