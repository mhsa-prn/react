import logo from './logo.svg';
import './App.css';
import Card from "./Card";
import Card2 from "./Card";
import React from "react";

class App extends React.Component{
    state={articles:[
            {title:'title1' , body:'this is title1'},
            {title:'title2' , body:'this is title2'}
        ]}

    constructor() {
        super();
        setTimeout(()=>
            {
                this.setState({articles:[
                        {title:'title3' , body:'this is title3'},
                        {title:'title4' , body:'this is title4'}
                    ]})
            }
        ,2000)
    }

    render() {
        return (
            <div className="App">
                {this.state.articles.map(article => {
                 return   <Card2 title={article.title} body={article.body}/>
                })}
                {/*<Card2 title={this.state.articles[0].title} body={this.state.articles[0].body}/>*/}
                {/*<Card2 title={this.state.articles[1].title} body={this.state.articles[1].body}/>*/}
            </div>
        );
    }
}

export default App;
