const Exercise = ({exercise}) => {
    return (
        <article className="card mb-4">
            <section className="card-body">
                <h4 className="card-title">{exercise.name}</h4>
                <p className="card-text">{exercise.description}</p>
            </section>
            <section className="card-footer">
                details: {exercise.id} { exercise.targetMuscleGroup }
            </section>
        </article>
    )
}
export default Exercise