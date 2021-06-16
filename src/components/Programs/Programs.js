import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import AppContainer from '../../hoc/AppContainer'
import { programsFetchingAction } from "../../store/actions/programsActions"
import ProgramCreate from "../ProgramCreate/ProgramCreate"
import Program from "./Program"
const Programs = () => {

    const {
        programs,
        programsFetching,
        programsError
    } = useSelector(state => state.programsReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(programsFetchingAction())
    }, [dispatch])

    return (
        <AppContainer>
            <header>
                <ProgramCreate />
            </header>
            {programsFetching && <p>Getting the latest programs...</p>}
            {programsError && <p>{programsError}</p>}
            <section>
                {programs.map(program => <Program key={program.id} program={program} />)}
            </section>
        </AppContainer>
    )
}
export default Programs