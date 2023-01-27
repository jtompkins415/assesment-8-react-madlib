import React from 'react';
import './MadlibForm.css'

class MadlibForm extends React.Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.state = {noun: '', noun2: '', adjective: '', adjective2: ''}

    }

    handleChange(e){
        this.setState({noun: e.target.value, noun2: e.target.value, adjective: e.target.value, adjective2: e.target.value})
    }

    render(){
        return (
            <div className='MadlibForm'>
            <form className='MadlibForm-form'>
                <input 
                    type='text' 
                    name='noun'
                    className='MadlibForm-input' 
                    placeholder='noun' 
                    value={this.state.noun}
                    onChange={this.handleChange}
                />
                <input 
                    type='text' 
                    name='noun2'
                    className='MadlibForm-input' 
                    placeholder='noun 2' 
                    value={this.state.noun2}
                    onChange={this.handleChange}
                />
                <input 
                    type='text' 
                    className='MadlibForm-input' 
                    placeholder='adjective'
                    name="adjective"
                    value={this.state.adjective} 
                    onChange={this.handleChange}
                />
                <input 
                    type='text' 
                    className='MadlibForm-input' 
                    placeholder='color'
                    name='color'
                    value={this.state.adjective2}
                    onChange={this.handleChange} 
                />
                <button type='submit'>Get Story</button>
            </form>
        </div>
        )
    }
}

export default MadlibForm