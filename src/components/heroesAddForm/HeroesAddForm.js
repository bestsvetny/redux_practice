import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {v4 as uuidv4} from "uuid";

import {heroCreated} from "../../actions";
import {useHttp} from "../../hooks/http.hook";

const HeroesAddForm = () => {
    const dispatch = useDispatch()
    const {filters} = useSelector(state => state)
    const {request} = useHttp()

    const initialHeroState = {
        id: '',
        name: '',
        description: '',
        element: ''
    }

    const [hero, setHero] = useState(initialHeroState)

    const handleChange = (event) => {
        const {name, value} = event.target
        setHero({
            ...hero,
            [name]: value,
        })
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault()

        const newHero = {
            ...hero,
            id: uuidv4()
        }

        request(`http://localhost:3001/heroes`, 'POST', JSON.stringify(hero))
            .then(res => {console.log(res, 'success')})
            .then(dispatch(heroCreated(newHero)))
            .catch(e => console.log(e))


        setHero(initialHeroState)
    }

    const renderOptions = (arr) => {
        arr = arr.filter(item => item.name !== 'all')
        return arr.map((item) => {
                return <option key={item.id} value={item.name}>{item.name}</option>
        })
    }

    const options = renderOptions(filters)
    const {name, description, element} = hero

    return (
        <form
            className="border p-4 shadow-lg rounded"
            onSubmit={onSubmitHandler}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">New hero name</label>
                <input 
                    required
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="My name?"
                    value={name}
                    onChange={handleChange}/>
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Description</label>
                <textarea
                    required
                    name="description"
                    className="form-control" 
                    id="text" 
                    placeholder="My abilities?"
                    style={{"height": '130px'}}
                    value={description}
                    onChange={handleChange}/>
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Choose an element</label>
                <select 
                    required
                    className="form-select" 
                    id="element" 
                    name="element"
                    value={element}
                    onChange={handleChange}>
                    <option >My element...</option>
                    {options}
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Create</button>
        </form>
    )
}

export default HeroesAddForm;