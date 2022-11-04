import {useEffect} from "react";
import {useHttp} from "../../hooks/http.hook";
import {useSelector, useDispatch} from "react-redux";

import {filterFetching, filterFetched, filterFetchingError, activeFilterChanged} from "../../actions";
const cn = require('classnames');

const HeroesFilters = () => {
    const {filters, filter} = useSelector(state => state)
    const dispatch = useDispatch()
    const {request} = useHttp()

    useEffect(() => {
        dispatch(filterFetching())
        request('http://localhost:3001/filters')
            .then(data => dispatch(filterFetched(data)))
            .catch(() => dispatch(filterFetchingError()))

        // eslint-disable-next-line
    },[])

    const renderFilters = (arr) => {
        return arr.map((item) => {

            const btnClass = cn('btn', item.className, {'active': item.name === filter} )

            return <button
                key={item.id}
                label={item.label}
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