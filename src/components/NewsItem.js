import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl , newsUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
            <img src={!imageUrl?"https://www.deccanherald.com/sites/dh/files/p1-1163527-1668763606.png":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark rounded-pill">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
