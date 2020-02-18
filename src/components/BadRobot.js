import React, {Component} from 'react'
import badRobot from './badRobotImg.png'
class BadRobot extends Component {
badTranslation = (userInput) => {
    let inputArr = userInput.split("")
    inputArr = inputArr.map((value, index) => {
            if(index % 3 === 0){
                return "B"
            }else if(index % 3 === 1){
                return "L"
            }else if(index % 3 === 2){
                return "A"
            }
        }
    )
    return inputArr.join("")
}

    render(){
        return(
            <div className="robotClass">
                <img src={badRobot} height="100px"/>
                <div>
                    <h1> Hello I am Bad robot! </h1>
                    <p> I hear you saying {this.badTranslation(this.props.input)}. Is that correct? </p>
                </div>
            </div>
        )
    }
}
export default BadRobot
