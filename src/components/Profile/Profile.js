import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import AppContainer from '../../hoc/AppContainer'
import { sessionLogoutAction } from '../../store/actions/sessionActions'
import ProfileView from './ProfileView'

export const Profile = () => {

    const mySwal = withReactContent(Swal)
    const dispatch = useDispatch()
    const { username = '' } = useSelector(state => state.sessionReducer)

    const onLogoutClick = () => {
        mySwal.fire({
            backdrop: true,
            denyButtonText: 'Cancel',
            showCancelButton: true,
            confirmButtonColor: 'var(--bs-yellow)',
            cancelButtonColor: 'var(--bs-teal)',
            title: <p>Logout?</p>,
            text: 'Are you sure you want to logout?',
            cancelButtonText: 'Nope',
            confirmButtonText: 'Yes, Logout'
        }).then(result => {
            if (result.isConfirmed) {
                dispatch(sessionLogoutAction())
            }
        })
    }
    return (
        <AppContainer>
            <header className="mb-5">
                <h1>Hi, {username}</h1>
                <p>Welcome to your profile</p>
                <button className="btn btn-warning" onClick={onLogoutClick}>Logout</button>
            </header>

            <ProfileView />
        </AppContainer>
    )
}
export default Profile