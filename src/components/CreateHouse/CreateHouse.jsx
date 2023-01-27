import React from 'react';
import { useDispatch } from 'react-redux';
import { createHouse } from '../../redux/actions/index.js'
import './create.css'
// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR HOOKS!
// Recordar que los hooks de React deben utilizarse de la forma "React.useState", "React.useEffect", etc.
// Los tests no van a reconocer la ejecución haciendo destructuring de estos métodos.
const CreateHouse = () => {
    const [estado, setEstado] = React.useState({
        name: "",
        region: "",
        words: "",
    })

const onChange = (e) => setEstado ({
    ...estado,
    [e.target.name]: e.target.value
    }
)

const dispatch = useDispatch()

const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createHouse(estado))
}

    return (
        <div className='formCont'>
            <form onSubmit={handleSubmit} className='formCreate'>
                <div className='centerinputs'>

                    <div className='inputcont'>
                        <label htmlFor="">Name: </label>
                        <input type="text" name='name' onChange={onChange} />
                    </div>
                    
                    <div className='inputcont'>
                        <label htmlFor="">Region: </label>
                        <input type="text" name='region' onChange={onChange} />
                    </div>
                    
                    <div className='inputcont'>
                        <label htmlFor="">Words: </label>
                        <input type="text" name='words' onChange={onChange} />
                    </div>
                    <div className='creteBtnCont'>
                        <button type="submit" className='createButton'>Create</button>

                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreateHouse;
