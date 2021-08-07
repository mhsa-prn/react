import React from "react";
// import React, component from "react";
class Card2 extends React.Component{
// class Card2 extends Component{
    render(props) {
        // let {title,body}=this.props
        return(
            <div className="card">
                <header className="header">

                    <h2>{this.title}</h2>
                    {/*<h2>{title}</h2>*/}
                </header>

                <section className="card-body">
                    <p>{this.body}</p>
                    {/*<p>{body}</p>*/}
                </section>

                <footer className="footer">
                    <p>Footer</p>
                </footer>
            </div>
        )
    }
}
export default Card2