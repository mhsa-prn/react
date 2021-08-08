import logo from '../../logo.svg';
import './App.css';
import Card from "../Card/Card";
import Card2 from "../Card/Card";
import React from "react";

class App extends React.Component{
    state = {
        articles: [
            {title: 'title1', body: 'this is title1'},
            {title: 'title2', body: 'this is title2'}
        ]
    }

    // constructor() {
    //     super();
    //     setTimeout(()=>
    //         {
    //             this.setState({articles:[
    //                     {title:'title3' , body:'this is title3'},
    //                     {title:'title4' , body:'this is title4'}
    //                 ]})
    //         }
    //     ,2000)
    // }

    loadMore = () => {
        this.setState({loading: true})
        let articles = [
            {title: 'title3', body: 'this is title3'},
            {title: 'title4', body: 'this is title4'}
        ]

        setTimeout(() => {
                this.setState(prevState => {
                    return {
                        articles: [...prevState.articles, ...articles],
                        loading: false
                    }
                })
            }
            , 1000)
    }


    render() {
        let articles = this.state.articles.map((article, index) => {
            return <div className="App"><Card key={index} title={article.title} body={article.body}/></div>
        })
        return (
            <div className='App'>
                { articles }
                {
                    this.state.loading
                        ? <div>Loding...</div>
                        : null
                }
                {/*<Card2 title={this.state.articles[0].title} body={this.state.articles[0].body}/>*/}
                {/*<Card2 title={this.state.articles[1].title} body={this.state.articles[1].body}/>*/}
                <button onClick={this.loadMore}>Load More</button>
            </div>
        );
    }

}

export default App;
