import './Card.css'

//functional component
function Card(props) {
// function Card({title,body}){

    return (
        <div className='container clearfix'>
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
        </div>
    )
}

export default Card