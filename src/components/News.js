import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
  constructor(){
    super();
    
    this.state = {
      articles: [],
      loading: false,
      page:1
    }
  }

   async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d8658b910f3f4bb7bcdf0a64eaaba4bc&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true});
    let data = await fetch(url);
    let passData = await data.json();
    // console.log(passData);
    this.setState({
      articles: passData.articles , 
      totalResults: passData.totalResults,
      // loading: false
    
    })
  }

  handlePreviousPage = async()=>{
     
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d8658b910f3f4bb7bcdf0a64eaaba4bc&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    // this.setState({loading: true});
    let passData = await data.json();
    // console.log(passData);
    this.setState({
      page: this.state.page - 1,
      articles: passData.articles,
      // loading: false
    })
  }

  handleNextPage = async()=>{
    if(!this.state.page + 1>Math.ceil(this.state.totalResults/this.props.pageSize)){
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d8658b910f3f4bb7bcdf0a64eaaba4bc&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true});
    let data = await fetch(url);
    let passData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: passData.articles,
      // loading: false
    })
   }
  }
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsMonkey - Top Headlines</h1>
        {this.state.loading && <Spinner/>}
         <div className="row">
         {this.state.articles?.map((element)=>{
            return(
              <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,80):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
            )
         })}
         </div>
         <div className="container d-flex justify-content-between">
         <button disabled={this.state.page<=1} type="button" className="btn btn-dark btn-sm rounded-pill" onClick={this.handlePreviousPage}>&larr; Previous</button>
         <button disabled={this.state.page + 1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark btn-sm rounded-pill" onClick={this.handleNextPage}>Next &rarr;</button>
         </div>
      </div>
    )
  }
}

export default News
