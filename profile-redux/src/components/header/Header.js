import { Link } from "react-router-dom"
import {connect} from 'react-redux'
import Menu from './Menu'
import { handleLogout } from '../../store/actions/AuthActions'
import { useNavigate } from 'react-router-dom'

function Header({auth, dispatch}) {
  const navigate = useNavigate();
  const getToken = localStorage.getItem("token")
  return (
    <header>
      {getToken &&(
        <>
      <Menu/>
      <button onClick={() => handleLogout(dispatch, navigate)}>Sair</button>
      </>
      )}
    </header>
  )
}

const mapStateToProps = state => ({
  auth: state.authReducer.auth
})


export default  connect(mapStateToProps)(Header);
