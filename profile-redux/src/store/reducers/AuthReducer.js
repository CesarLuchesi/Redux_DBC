const INITIAL_STATE= {
  auth: {
    token: '',
    auth: false,
    loading: true,
    error: false,
  }
}

function authReducer(state = INITIAL_STATE, action) {
  if(action.type === 'SET_LOGIN'){
    return{
      ...state,
      auth : {
        token: action.token,
        auth: action.auth,
        loading: action.loading,
        error: action.error,
      }
    }
  }
  else if( action.type === 'SET_LOGOUT'){
    return{
      ...state,
      auth : {
        token: action.token,
        auth: action.auth,
        loading: action.loading,
        error: action.error,
      }
    }
  }else{
  return state
  }
}

export default authReducer