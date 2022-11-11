import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor(){
     articles = [
      {
        "source": { "id": "bbc-news", "name": "BBC News" },
        "author": "BBC News",
        "title": "Blind boy translates World Cup stickers into braille",
        "description": "Sebastián Filoramo from Venezuela uses a braille typewriter to make the album more accessible.",
        "url": "http://www.bbc.co.uk/news/world-latin-america-63590882",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/878B/production/_127599643_p0dfbysd.jpg",
        "publishedAt": "2022-11-11T04:52:26.3288089Z",
        "content": "Sebastián Filoramo from Venezuela used his own braille typewriter to make the 2022 Qatar World Cup sticker album more accessible.\r\nThe 12-year-old types braille onto tape then sticks it onto the stic… [+287 chars]"
      },
      {
        "source": { "id": "bbc-news", "name": "BBC News" },
        "author": "BBC News",
        "title": "Cost of living: Shares jump in US and Asia as inflation cools",
        "description": "Investors are betting the US central bank will slow the pace of rate rises as it tackles inflation.",
        "url": "http://www.bbc.co.uk/news/business-63593361",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/C864/production/_127600315_gettyimages-1437147698.jpg",
        "publishedAt": "2022-11-11T04:52:23.0157126Z",
        "content": "Share prices have jumped as investors welcomed official figures that show the cost of living in the US increased at a slower than expected pace last month.\r\nThe US consumer price index rose by 7.7% i… [+1963 chars]"
      },
      {
        "source": { "id": "bbc-news", "name": "BBC News" },
        "author": "BBC News",
        "title": "Kari Lake: Interviewing the election denier who could be Arizona governor",
        "description": "The TV anchor turned Trump-backed candidate is good at delivering a message. But does she believe in it?",
        "url": "http://www.bbc.co.uk/news/world-us-canada-63593153",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1130/production/_127600440_gettyimages-1440085172.jpg",
        "publishedAt": "2022-11-11T04:07:19.688125Z",
        "content": "Media caption, BBC's Katty Kay challenges Kari Lake on her 2020 election claims\r\nAn election-denying former journalist could be the next governor of Arizona. But does Kari Lake truly believe in what … [+6284 chars]"
      },
      {
        "source": { "id": "bbc-news", "name": "BBC News" },
        "author": "BBC News",
        "title": "Xi-Biden meeting: Taiwan top of agenda for Chinese and US leaders",
        "description": "The in-person meeting will be their first since President Joe Biden took office.",
        "url": "http://www.bbc.co.uk/news/world-asia-63593503",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/168F0/production/_127600429_gettyimages-453444611.jpg",
        "publishedAt": "2022-11-11T03:07:17.7036436Z",
        "content": "Taiwan is expected to top the agenda when US President Joe Biden and Chinese leader Xi Jinping meet next week - their first in-person encounter since Mr Biden took office in 2020. \r\nThe much-awaited … [+2730 chars]"
      },
      {
        "source": { "id": "bbc-news", "name": "BBC News" },
        "author": "BBC News",
        "title": "Midterm elections results: Rivalry spills open as Trump lashes out at DeSantis",
        "description": "The ex-president calls Florida's governor \"desperate\" in the first draw of a metaphorical pistol.",
        "url": "http://www.bbc.co.uk/news/world-us-canada-63593457",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/11EB8/production/_127600437_trumpreuters.jpg",
        "publishedAt": "2022-11-11T02:07:21.9058626Z",
        "content": "Rivalry between Donald Trump and Ron DeSantis has spilt open after the Republican ex-president came swinging out against his one-time acolyte on Thursday night.\r\nMr Trump belittled the Florida govern… [+2459 chars]"
      },
      {
        "source": { "id": "bbc-news", "name": "BBC News" },
        "author": "BBC News",
        "title": "US regulator FTC says it is concerned about Twitter",
        "description": "The Federal Trade Commission says developments at Twitter could risk it violating regulatory orders.",
        "url": "http://www.bbc.co.uk/news/business-63593242",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/16828/production/_127600229_musk.jpg",
        "publishedAt": "2022-11-11T01:07:25.1248609Z",
        "content": "Media caption, WATCH: Ros Atkins On Elon Musk and Twitter\r\nA US regulator says it is watching events at Twitter with \"deep concern\" after the platform's top privacy and compliance officers reportedly… [+2897 chars]"
      },
      {
        "source": { "id": "bbc-news", "name": "BBC News" },
        "author": "BBC News",
        "title": "The US wants to play in China's backyard",
        "description": "President Joe Biden is trying to woo South East Asia away from its formidable neighbour.",
        "url": "http://www.bbc.co.uk/news/world-asia-63565875",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/181CF/production/_127576789_gettyimages-1240628876.jpg",
        "publishedAt": "2022-11-11T00:37:21.0466318Z",
        "content": "Nowhere has Xi Jinping's assertive foreign policy had a greater impact than in South East Asia, China's strategic backyard.\r\nBut as Beijing's power has grown, so has Washington's unease - and now aft… [+4788 chars]"
      },
      {
        "source": { "id": "bbc-news", "name": "BBC News" },
        "author": "BBC News",
        "title": "Alex Jones to pay extra $473m damages over 'fake Sandy Hook' claim",
        "description": "The new order means the Infowars host has to pay $1.44bn after branding the school shooting a hoax.",
        "url": "http://www.bbc.co.uk/news/world-us-canada-63592386",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/2A90/production/_127069801_324d1ac3f665fb3d9e1d5bf8075a8133882cca180_545_6000_33752000x1125.jpg",
        "publishedAt": "2022-11-10T20:37:21.2331774Z",
        "content": "Conspiracy theorist Alex Jones has been ordered to pay an extra $473m (£405m) for falsely claiming the Sandy Hook school shooting was a hoax.\r\nThe Connecticut judge's order brings to $1.44bn the tota… [+1724 chars]"
      },
      {
        "source": { "id": "bbc-news", "name": "BBC News" },
        "author": "BBC News",
        "title": "DC attorney general sues NFL and Washington Commanders",
        "description": "Prosecutors allege Washington's NFL team lied to fans about efforts to probe a \"hostile\" workplace.",
        "url": "http://www.bbc.co.uk/news/world-us-canada-63586493",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/42CB/production/_127599071_gettyimages-1386314156.jpg",
        "publishedAt": "2022-11-10T20:22:16.4993231Z",
        "content": "Prosecutors in Washington DC have sued the Commanders American football team, accusing it of deceiving fans about efforts to probe a \"hostile\" and \"misogynistic\" workplace. \r\nThe civil lawsuit announ… [+3271 chars]"
      },
      {
        "source": { "id": "bbc-news", "name": "BBC News" },
        "author": "BBC News",
        "title": "Ukraine war: Kyiv claims major gains as Russia exits Kherson",
        "description": "Kyiv reports rapid advances of seven kilometres after Moscow said it would leave the key city.",
        "url": "http://www.bbc.co.uk/news/world-europe-63589297",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/12AC9/production/_127598467_537cc7c841a1733095f84299e9a1b966aa928feb0_482_5926_33331000x563.jpg",
        "publishedAt": "2022-11-10T18:07:21.7813611Z",
        "content": "The Ukrainian army says it has made major gains over the last day around Kherson, after Russia said it was withdrawing from the southern city.\r\nUkrainian troops say they have taken back the key town … [+3487 chars]"
      }
    ]
    super();
    console.log(typeof articles)
    this.state = {
      articles: this.articles,
    }
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
         <div className="row">
            <div className="col-md-4">
              <NewsItem title="mytitle" description="mydesc" imageUrl="https://ichef.bbci.co.uk/news/1024/branded_news/878B/production/_127599643_p0dfbysd.jpg" />
            </div>
            <div className="col-md-4">
              <NewsItem title="mytitle" description="mydesc"/>
            </div>
            <div className="col-md-4">
              <NewsItem title="mytitle" description="mydesc"/>
            </div>
         </div>
      </div>
    )
  }
}

export default News
