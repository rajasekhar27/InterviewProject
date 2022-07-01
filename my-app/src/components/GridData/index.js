import './index.css'
import { Component } from 'react'
import Data from '../Data'

class SampleProject extends Component{
    state = {responseList:[]}

    onClickMinusButton = () => {
              this.setState(prevState => ({count:prevState.count - 3}))
    }

    onClickPlusButton = () => {
        this.setState(prevState => ({count:prevState.count + 3}))
}

componentDidMount(){
    this.getRequiredResult()
}


getRequiredResult = async () =>{
    const url =  "https://gorest.co.in/public/v1/todos"
    const options = {
        method:"GET",
    }
    const response = await fetch(url,options)
    
    
    if(response.ok){
        const data = await response.json()
        console.log(data)
        const updatedList = data.data.map(eachData => ({
          dueOn : eachData.due_on,
          id:eachData.id,
          status:eachData.status,
          title:eachData.title,
          userId:eachData.user_id,
        }))
        this.setState({responseList:updatedList})
    }
}



    render(){
        const {responseList} = this.state
       
        return(
            <>
            <div className='mainContainer'>
                


            <div className='gridContainer'>
            <ul className='ulList'>
                {responseList.map(each => (
                    <Data key={each.id} DataList={each}/>
                ))}
            </ul>
            </div>


            </div>

            </>
        )
    }
}
export default SampleProject
