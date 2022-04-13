import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Profile() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login')
    }
  },[]);
  return (
    <div>Profile</div>
  )
}

export default Profile