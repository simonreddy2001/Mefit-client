const Program = ({program}) => {
    return (
        <article className="card mb-4">
            <section className="card-body">
                <h4 className="card-title">{program.name}</h4>
                <p className="card-text">{program.description}</p>
            </section>
            <section className="card-footer">
                details: {program.id} { program.targetMuscleGroup }
            </section>
        </article>
    )
}
export default Program