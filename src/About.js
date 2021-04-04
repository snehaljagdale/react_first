import React from 'react'
class About extends React.Component{
    constructor(){
        super();
        
    }
    componentDidMount(){
        console.warn("props", this.props.name)
        // console.warn("did mount")
    }
    componentDidUpdate(){
        console.warn("props updated", this.props.name)
        // alert('Name is updated')
    }
    render(){
      return(
          <div>
              <h1>About us page</h1>
              <h2>{this.props.name}</h2>
          </div>
      )
    }
}
export default About;