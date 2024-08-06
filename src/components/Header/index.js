// import React from 'react'
import Cookies from 'js-cookie'
import {Link, withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {FiLogOut} from 'react-icons/fi'
import {BsBriefcaseFill} from 'react-icons/bs'

const Header = props => {
  const onClickEvent = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="nav-link">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
            />
          </Link>
        </li>
        <li>
          <Link to="/">
            <h1>Home </h1>
            <AiFillHome />
          </Link>
        </li>
        <li>
          <Link to="/jobs">
            <h1>Jobs</h1>
            <BsBriefcaseFill />
          </Link>
        </li>
        <li>
          <FiLogOut onClick={onClickEvent} />
          <button type="button" onClick={onClickEvent}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default withRouter(Header)
