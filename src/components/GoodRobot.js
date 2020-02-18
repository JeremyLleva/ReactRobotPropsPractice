import React, {Component} from 'react'
import goodRobot from './goodRobotImg.png'
import styles from './../App.css'
class GoodRobot extends Component {
    render(){
        return(
            <div className="robotClass" >
                <img src={goodRobot} height="100px"/>
                <div>
                    <h1> Hello I am good robot! </h1>
                    <p> I hear you saying {this.props.input}. Is that correct? </p>
                </div>
            </div>
        )
    }
}
export default GoodRobot
