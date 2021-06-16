import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { profilePostsFetchingAction } from "../../store/actions/profilePostsActions"
import Exercise from "../Exercises/Exercise"

const ProfilePosts = () => {

    const { profilePosts } = useSelector(state => state.profilePostsReducer)
    const session = useSelector(state => state.sessionReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(profilePostsFetchingAction(session.id))
    }, [dispatch, session])

    return (
        <>
            <h4 className="mb-3">Checkout your goals</h4>
            <section>
                {profilePosts.map(post => <Exercise key={post.id} post={post} />)}
            </section>
        </>

    )
}
export default ProfilePosts