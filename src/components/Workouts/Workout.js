const Workout = ({workout}) => {
    return (
        <article className="card mb-4">
            <section className="card-body">
                <h4 className="card-title">{workout.name}</h4>
                <p className="card-text">{workout.type}</p>
            </section>
            <section className="card-footer">
                details: {workout.id} { workout.complete }
            </section>
            <section className="card-footer btn-toolbar">
                <button className="btn btn-secondary d-flex" type="submit">Add to my profile</button>
                <button className="btn btn-danger d-flex" type="submit">Edit</button>
            </section>
        </article>
    )
}
export default Workout