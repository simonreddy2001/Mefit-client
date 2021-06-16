import { applyMiddleware } from "redux";
import { appMiddleware } from "./appMiddleware";
import { postsMiddleware } from "./postsMiddleware";
import { profilePostsMiddleware } from "./profilePostsMiddleware";
import { registerMiddleware } from "./registerMiddleware";
import { sessionMiddleware } from "./sessionMiddleware";



export default applyMiddleware(
    appMiddleware,
    sessionMiddleware,
    postsMiddleware,
    registerMiddleware,
    profilePostsMiddleware
)