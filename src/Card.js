//functional component
function Card(props){
// function Card({title,body}){

    console.log(props)
    return(
        <div className="card">
            <header className="header">
                <h2>{props.title}</h2>
                {/*<h2>{title}</h2>*/}
            </header>

            <section className="card-body">
                <p>{props.body}</p>
                {/*<p>{body}</p>*/}
            </section>

            <footer className="footer">
                <p>Footer</p>
            </footer>
        </div>
    )
}
export default Card