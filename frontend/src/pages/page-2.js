import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link><br/>
    <Link to="/Add_Park/">Go to the add park page</Link>
  </div>
)

export default SecondPage