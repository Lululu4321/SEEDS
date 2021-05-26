import { Link } from 'react-router-dom'
import { Button } from 'element-react'
import './header.css'
function share() {
    window.location.href = 'https://www.facebook.com'
}
function logout() {
    window.location.href = '/login'
}
function header() {
    return <header>
        <Link to={{ pathname: '/p/home' }} >List</Link>
        <Link to={{ pathname: '/p/add' }} >Add</Link>
        <Link to={{ pathname: '/p/his' }} >Search Histories</Link>
        <Button icon="share" type="primary" onClick={() => share()}>Share</Button>
        <Button icon="logout" onClick={() => logout()}>Logout</Button>
    </header >
}

export default header