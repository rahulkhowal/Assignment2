import React, { Component } from 'react'
//import Header from './components/header'
import Input from './Input'
import './style.css'


class NewsApp extends Component {
  state = {
    NewsItems: []
  }
  handleNews = async (e) => {
    e.preventDefault()
    //const Country = e.target.country.value;
    //const catagory = e.target.catagory.value;
    //Ajax Calling
    const ApiCall = await fetch(`https://newsapi.org/v2/top-headlines?country="IN"&category="entertainment"&apiKey=3bb9d9fb663f43e99b1ef9ac27848841`)
    const response = await ApiCall.json()
    console.log(response)
    this.setState({
      NewsItems: [...response.articles]
    })
    //console.log(this.state.NewsItems)
  }
  render() {
    //const  values = Object.values(this.state.NewsItems)
    return (
      <div className="App">
        
        <div className="App-title">
            <h1>News Headlines</h1>
        </div>
        <Input getupdates={this.handleNews} NewsItems={this.state.NewsItems} />  
        </div> 
     )
  }
}
export default NewsApp;