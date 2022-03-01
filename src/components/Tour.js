import React, { useState } from "react";

export function Tour({id, name, info, image, price, removeTour}) {
    const [readMore, setReadMore] = useState(false);

    return (
        <article className="tours-box">
            <img src={image} alt={name} />
            <div className="tours-info">
                <h3>{name}</h3>
                <h2>{price} $</h2>
            </div>
            <p>
                {readMore ? info : info.substring(0, 200) + "..."}
                <button
                    className="read-more"
                    onClick={() => setReadMore(!readMore)}
                >
                    {readMore ? "Read more" : "Show less"}
                </button>
            </p>
            <button
                className="not-int"
                onClick={() => removeTour(id)}
            >
                Not Interested
            </button>
        </article>
    )
}