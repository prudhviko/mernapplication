import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <h1>Welcome To The App</h1>
      <Link to={'/signup'}>Signup</Link>
      <br />
      <br />
      <Link to={'/create-merchant'}>Create Merchant</Link>
      <br />
      <br />
      <Link to={'/add-users-to-merchant'}>Add Users To Merchant</Link>
      <br />
      <br />
      <Link to={'/create-product'}>Create Product</Link>
      <br />
      <br />
    </>
  )
}

export default Home
