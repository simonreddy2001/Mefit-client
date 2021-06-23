import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { profileFetchingAction } from "../../store/actions/profileActions"
//import Exercise from "../Exercises/Exercise"
//import Program from "../Programs/Program"
//import Workout from "../Workouts/Workout"

const Profile = () => {

    const { profile } = useSelector(state => state.profileReducer)
    const session = useSelector(state => state.sessionReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(profileFetchingAction())
    }, [dispatch, session])

    return (
        <>
            <h4 className="mb-3">Checkout your goals</h4>
            <section className="card-body">
                <h4 className="card-title">First Name: {profile.firstName}</h4>
                <h4 className="card-text">Last Name:{profile.lastName}</h4>
                <h4 className="card-text">Email: {profile.email}</h4>
            </section>
            <section> {profile.map(profile =><Profile key={profile.id} profile={profile} />)} </section>
        </>

    )
}
export default Profile


/*<section>
                {profile.map(user => <Program key={user.id} user={user} />)}
                {profile.map(user => <Exercise key={user.id} user={user} />)}
                {profile.map(user => <Workout key={user.id} user={user} />)}
            </section>*/