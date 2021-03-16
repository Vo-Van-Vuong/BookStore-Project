import React, { Component } from 'react'
import  axios from 'axios';

export default class ByteArrayImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
          content: "",
          base64Image: ""
        };
      }
    
    componentDidMount() {
        try {
            axios.get("http://localhost:8080/api/getimage/23").then((response) => {
                this.setState({ 
                    content: response.data.content,
                    base64Image: "data:image/jpeg;base64," + response.data.content
                });
                console.log(this.state.content);
              });
        } catch (error) {
            console.log("canotget!!!!")
        }
    }

    render() {
        return (
            <div style={{margin: "100px"}}>
                Your Image: 
                <img src={this.state.base64Image}/>
            </div>
        )
    }
}
