import React, { Component } from "react";
import API from "../../utils/API";
import Media from 'react-bootstrap/Media';


class Articles extends Component {
    state = {
        articles: ""
    }
    
   componentDidMount() {

       console.log(`this should be the name: ${this.props.name}`)

       API.getArticles(this.props.name)
       .then((result) => {
           console.log(result)
            this.setState({
                articles: result.data.docs
            })
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