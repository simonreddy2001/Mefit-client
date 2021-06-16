import { applyMiddleware } from "redux";
import { appMiddleware } from "./appMiddleware";
import { exercisesMiddleware } from "./exercisesMiddleware";
import { workoutsMiddleware } from "./workoutsMiddleware";
import { programsMiddleware } from "./programsMiddleware";
import { profilePostsMiddleware } from "./profilePostsMiddleware";
import { registerMiddleware } from "./registerMiddleware";
import { sessionMiddleware } from "./sessionMiddleware";



export default applyMiddleware(
    appMiddleware,
    sessionMiddleware,
    exercisesMiddleware,
    workoutsMiddleware,
    programsMiddleware,
    registerMiddleware,
    profilePostsMiddleware
)