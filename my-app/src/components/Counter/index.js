import './index.css'
import { Component } from 'react'


class SampleProject extends Component{
    state = {count:0, }

    onClickMinusButton = () => {
              this.setState(prevState => ({count:prevState.count - 3}))
    }

    onClickPlusButton = () => {
        this.setState(prevState => ({count:prevState.count + 3}))
}


    render(){
        const {count} = this.state
       
        return(
            <>
            <div className='mainContainer'>
                <div className='counterContainer'>
                <h1 className='heading'>Counter</h1>
                <div className='countContainer'>
                <button type="button" className='Button' onClick={this.onClickMinusButton}>-</button>
                <p className='count'>{count}</p>
                <button type="button" className='Button' onClick={this.onClickPlusButton}>+</button>
                </div>
                </div>


            </div>

            </>
        )
    }
}
export default SampleProject
