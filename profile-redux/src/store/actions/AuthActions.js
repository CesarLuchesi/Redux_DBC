import { apiAuth } from "../../api";


export const handleLogin = async(values, dispatch,navigate) => {
  try {
    const {data} = await apiAuth.post('/auth', values)
    console.log(data);
    localStorage.setItem('token', data);
    // window.location.href = '/';
    const logado = {
      type: 'SET_LOGIN',
      token: data,
      auth: true,
    }
    dispatch(logado)
    navigate('/')
  } catch (error) {
    console.log(error);
  }
}

export const handleLogout = (dispatch, navigate) => {
  localStorage.removeItem('token')
  // apiAuth.defaults.headers.common['Authorization'] = ''
  // windown.location.href = '/login'
  const deslogado = {
    type: 'SET_LOGOUT',
    token: '',
    auth: false,
  }
  dispatch(deslogado)
  navigate('/login')
}