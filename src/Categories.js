import React from "react";

const Categories = ({ categories, filterItems }) => {
    return <article className="btn-group">
        <section className="category-btn-group">
            {
                categories.map((category, index) => {
                    return <div key={index}>
                        <button type="button" onClick={() => filterItems(category)}>{category}</button>
                    </div>
                })
            }
            {/* <button onClick={() => { filterItems('All') }}>All</button>
        <button onClick={() => filterItems('breakfast')}>Breakfast</button>
        <button onClick={() => filterItems('lunch')}>Lunch</button>
        <button onClick={() => filterItems('shakes')}>Shakes</button> */}
        </section>
    </article>
}

export default Categories;