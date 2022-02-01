import React from "react";

const Menu = ({ items }) => {
    return <React.Fragment>
        <div className="main-content">
            {
                items.map((menuItems) => {
                    const { id, title, price, img, desc } = menuItems;
                    return <article key={id} className="menu-items">
                        <div className="menu-items-card">
                            <div className="menu-items-image">
                                <img src={img} alt={title} />
                            </div>
                            <div className="menu-items-content">
                                <div className="menu-items-content-title">
                                    <div>
                                        <h3>{title}</h3>
                                    </div>
                                    <div>
                                        <p>${price}</p>
                                    </div>
                                </div>
                                <p className="menu-items-desc">{desc}</p>
                            </div>
                        </div>
                    </article>

                    // return <div class="grid-container">
                    //     <div>
                    //         <img src={img} alt={title} />
                    //         <h3>{title}</h3>
                    //         <p>${price}</p>
                    //         <p>{desc}</p>
                    //     </div>
                    // </div>

                })
            }
        </div>
    </React.Fragment>
}

export default Menu;