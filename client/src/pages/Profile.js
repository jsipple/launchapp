
import React, { Component } from 'react';
import {Template} from '../components/template/template.wrapper';
import API from "../utils/API";
    
    class Profile extends Component {
     constructor() {
      super()
      this.state = {
       image: '',
       userId: '5cd6f79bb3adb487f1994a99'
      }
     }
     handleChange = (e) => {
      let input = document.querySelector('input')

      let image = {image: window.URL.createObjectURL(input.files[0])}

      console.log(window.URL.createObjectURL(input.files[0]));

      API.addUserImg(image, this.state.userId);

      this.setState({
       image
      })
     }
     handleError = (e) => {
      console.log('a')
      this.setState({
       image: ''
      })
     }
     render() {
      return (
       
          <Template>
        <input type='file' onChange={this.handleChange} name='profilePic' id='profilePic' accept='image/png, image/jpeg, image/jpg'/>
          {/* look into making a default avatar if nothing in the system */}
          <img alt='profileImg' id='profileImg' src={`${this.state.image}`} onError={this.handleError} />
          <hr />
          <p>Home screen preference</p>
          <select>
          <option>Home</option>
          <option>launches</option>
          <option>organizations</option>
          </select>
        </Template>
       
       )
     }
    }
    
export default Profile;

