import React, {Component} from 'react'

class Hog extends Component {

    detail = () => {
        console.log("is it working")
    }

    render(){
        let pigImage = require(`../hog-imgs/${this.props.name.toLowerCase().replace(' ', '_').replace(' ', '_')}.jpg`)
        return(
            <div className="ui eight wide column" onClick={this.detail}>
                <div>
                {this.props.name}
                </div>
                <div>
                <img src={pigImage}/>
                </div>
            </div>
        )
    }

}

export default Hog