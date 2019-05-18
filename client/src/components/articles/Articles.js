import React, { Component } from "react";
import API from "../../utils/API"

class Articles extends Component {
   constructor(props) {
       super(props)
       this.state = {
           datePublished: [],
           url: [],
           title: [],
           image: [],
           newsSite: []
       }
   }
   componentDidMount = () => {
       API.getArticles(this.props.name)
       .then(function(result) {
        // result.data.docs[0].title
        // for loop  
        // let title = []
//  result.data.docs[i].title
// end for loop
        // this.setState({title: title})
        
        for (let i = 0; i < result.data.docs.length; i++) {
        
           console.log(result.data.docs[i].date_published);
           console.log(result.data.docs[i].featured_image);
           console.log(result.data.docs[i].news_site);
           console.log(result.data.docs[i].title);
           console.log(result.data.docs[i].url);
        //    console.log(result.data.docs[i]);
        }
       })
   }
   render() {
       return (
        //    dates, title, url, image
           <div>hello
               </div>
       )
   }
   }

   export default Articles