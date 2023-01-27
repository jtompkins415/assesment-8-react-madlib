import React, {useState} from 'react';
import './MadlibForm.css'

const MadlibForm = () => {
    
    const INITIAL_STATE = {
        noun: "",
        noun2: "",
        adjective: "",
        color: ""
    }
    
    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData(formData.noun)
        setFormData(formData.noun2);
        setFormData(formData.adjective);
        setFormData(formData.color);
    }


    return (
        <div className='MadlibForm'>
            <form className='MadlibForm-form' onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    name='noun'
                    className='MadlibForm-input' 
                    placeholder='noun' 
                    value={formData.noun}
                    onChange={handleChange}
                />
                <input 
                    type='text' 
                    name='noun2'
                    className='MadlibForm-input' 
                    placeholder='noun 2' 
                    value={formData.noun2}
                    onChange={handleChange}
                />
                <input 
                    type='text' 
                    className='MadlibForm-input' 
                    placeholder='adjective'
                    name="adjective"
                    value={formData.adjective} 
                    onChange={handleChange}
                />
                <input 
                    type='text' 
                    className='MadlibForm-input' 
                    placeholder='color'
                    name='color'
                    value={formData.color}
                    onChange={handleChange} 
                />
                <button type='submit'>Get Story</button>
            </form>
        </div>
    )
}

export default MadlibForm;