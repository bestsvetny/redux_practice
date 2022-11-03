

// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

import {useState} from "react";
import {useDispatch} from "react-redux";
import {v4 as uuidv4} from "uuid";

import {heroesAddItem} from "../../actions";

const initialHeroState = {
    id: uuidv4(),
    name: '',
    description: '',
    element: ''
}

const HeroesAddForm = () => {
    const dispatch = useDispatch()

    const [hero, setHero] = useState(initialHeroState)

    const handleChange = (event) => {
        const {name, value} = event.target
        setHero({
            ...hero,
            [name]: value,
        })
    }

    const onSubmit = async (event) => {
        event.preventDefault()
        dispatch(heroesAddItem(hero))
        setHero({
            ...initialHeroState,
            id: uuidv4()
        })
    }

    const {name, description, element} = hero

    return (
        <form
            className="border p-4 shadow-lg rounded"
            onSubmit={onSubmit}>
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
                    <option value="fire">Fire</option>
                    <option value="water">Water</option>
                    <option value="wind">Wind</option>
                    <option value="earth">Earth</option>
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Create</button>
        </form>
    )
}

export default HeroesAddForm;