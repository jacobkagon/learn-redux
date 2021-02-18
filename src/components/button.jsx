import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import * as actions from '../redux/actions/index'

const Button = () => {
    const dispatch = useDispatch()
    const [num, handleNum] = useState("")

    const handleChange = (e) => {
        handleNum(e.target.value)
    }

    const handleSubmit = (event) => {
            event.preventDefault()
        dispatch(actions.increaseCount(num))

        document.getElementsByTagName('form')[0].reset()
    }


    
    return (
        <div>
    <form onSubmit={(e) => handleSubmit(e)}>
  
  <input onChange={(e) => handleChange(e)}type="text" placeholder="Search.."/>
  <input type="submit" />
  </form>
</div>);
}

export default Button;
