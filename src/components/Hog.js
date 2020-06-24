import React, {Component} from 'react'

class Hog extends Component {

    constructor(){
        super() 
        this.state = {
            cardface: "front"   
        }
    }
   

    detail = () => {
        this.state.cardface === "front" ? 
        this.setState({ cardface: "back" }) :
        this.setState({cardface: "front" })
        
    }

    render(){
        let pigImage = require(`../hog-imgs/${this.props.name.toLowerCase().replace(' ', '_').replace(' ', '_')}.jpg`)
        return(
            <div className="ui eight wide column" onClick={this.detail}>
                {this.state.cardface === "front" ? 
                <div className="front-card">
                    {this.props.name}
                    <img src={pigImage}/>
                </div> : 
                 <div className="pigTile">
                   <div> Speicialty: {this.props.specialty} </div>
                   <div> Weight: {this.props.weight} </div>
                </div>}
            </div>

        )

    }

}

export default Hog