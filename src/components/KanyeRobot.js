import React, {Component} from 'react'
import kanyeFace from './kanyeFace.jpeg'
class KanyeRobot extends Component {
    render(){
        return(
            <div className="robotClass">
                <img src={kanyeFace} height= "100px"/>
                <div>
                    <h1> Hello I'm KanyeBot! </h1>
                    <p> I'm gonna let you finish but Beyonce is  {this.props.input}.</p>
                </div>
            </div>
        )
    }
}
export default KanyeRobot
