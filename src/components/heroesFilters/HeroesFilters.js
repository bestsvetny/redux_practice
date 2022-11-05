import {useEffect} from "react";
import {useHttp} from "../../hooks/http.hook";
import {useSelector, useDispatch} from "react-redux";

import {fetchFilters, activeFilterChanged} from "../../actions";
const cn = require('classnames');

const HeroesFilters = () => {
    const {filters, activeFilter} = useSelector(state => state.filters)
    const dispatch = useDispatch()
    const {request} = useHttp()

    useEffect(() => {
        dispatch(fetchFilters(request))
        // eslint-disable-next-line
    },[])

    const renderFilters = (arr) => {
        return arr.map((item) => {

            const btnClass = cn('btn', item.className, {'active': item.name === activeFilter} )

            return <button
                key={item.id}
                className={btnClass}
                onClick={() => dispatch(activeFilterChanged(item.name))}
                >{item.name}</button>
        })
    }

    const elements = renderFilters(filters)

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {elements}
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;