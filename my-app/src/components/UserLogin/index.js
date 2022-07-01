
import { Component } from 'react'
import Counter from '../Counter'
import GridData from '../GridData'

import './index.css'

class UserLogin extends Component{
    state = {email:'',message:'',name:''}

    

onChangeName = (event) => {
    this.setState({name: event.target.value})
}

onChangeEmail = (event) => {
    this.setState({email:event.target.value})
}

onChangeMessage = (event) => {
    this.setState({message:event.target.value})
}

onSubmitForm =  async (event) => {
   event.preventDefault()
   const {email,name,message} = this.state
   const userDetails = {
      email:email,
      message:message,
      name:name
   }

   const apiUrl = " https://admin.srkprojects.com/web/api/client/v1/contact-us/"
   const options = {
    method:'POST',
    body:JSON.stringify(userDetails),
   }

   const response = await fetch(apiUrl,options)
   console.log(response)
}

    render(){
        const {email,message,name} = this.state
       
        return(
            <>
            <div className='mainContainer'>
                
            <div className='formContainer'>
                <form  onSubmit = {this.onSubmitForm}>
                    <div className='inputContainers'>
                    <label htmlFor="email" className='inputHeading'>Email</label>
                    <input type="email" id="email" className='inputBox' value={email} onChange={this.onChangeEmail}/>
                    </div>

                    <div className='inputContainers'>
                    <label htmlFor="message" className='message'>Message</label>
                    <input type="text" id="message" className='inputBox'  value={message} onChange={this.onChangeMessage}/>
                    </div>

                    <div className='inputContainers'>
                    <label htmlFor="name" className='inputHeading'>Name</label>
                    <input type="text" id="name" className='inputBox'  value={name} onChange={this.onChangeName}/>
                    </div>

                    <button type='submit'>submit</button>
                    
                </form>
            </div>
            <Counter/>
            <GridData/>
            </div>
            </>
        )
    }
}
export default UserLogin
