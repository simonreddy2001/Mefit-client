const Workout = ({workout}) => {
    return (
        <article className="card mb-4">
            <section className="card-body">
                <h4 className="card-title">{workout.name}</h4>
                <p className="card-text">{workout.description}</p>
            </section>
            <section className="card-footer">
                details: {workout.id} { workout.targetMuscleGroup }
            </section>
        </article>
    )
}
export default Workout