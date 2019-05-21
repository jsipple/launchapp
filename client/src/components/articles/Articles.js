import React, { Component } from "react";
import API from "../../utils/API";
import Media from 'react-bootstrap/Media';


class Articles extends Component {
    data = [{datePublished: 1, image: 2, newsSite: 3, title: 4, url: 5}];
    datePublished = [];
    image = [];
    newsSite = [];
    title = [];
    url = [];
    
   componentDidMount() {

       console.log(`this should be the name: ${this.props.name}`)

       API.getArticles(this.props.name)
       .then((result) => {
           console.log(result)
        // result.data.docs[0].title
        // for loop  
        // let title = []
//  result.data.docs[i].title
// end for loop


        for (let i = 0; i < result.data.docs.length; i++) {
           this.datePublished.push(result.data.docs[i].date_published);
           this.image.push(result.data.docs[i].featured_image);
           this.newsSite.push(result.data.docs[i].news_site);
           this.title.push(result.data.docs[i].title);
           this.url.push(result.data.docs[i].url);
        }
        const objData = {
            datePublished: this.datePublished,
            image: this.image,
            newsSite: this.newsSite,
            title: this.title,
            url: this.url
        };
        this.data.push(objData);
        console.log(this.data)
       })
   }
   render() {
        return (
        //   <ul className="list-unstyled" key="i">
        //   <Media as="li">
        //     <img
        //       width={64}
        //       height={64}
        //       className="mr-3"
        //       src={x.image}
        //       alt="Generic placeholder"
        //     />
        //     <Media.Body>
        //         {x.datePublished}
        //       <h5>
        //           {x.title}
        //           </h5>
        //       <p>
        //         Summary
        //       </p>
        //       <a href={x.url} target='_blank'>{x.url}</a>
        //       <a href={x.newsSite} target='_blank'>{x.newsSite}</a>
        //     </Media.Body>
        //   </Media>    
        // </ul>
            <div>ARTICLES</div>
                
        )
        //    dates, title, url, image
   }
   }

   export default Articles