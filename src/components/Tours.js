import React from "react";
import { Tour } from "./Tour";

export function Tours({tours, removeTour}) {
    return (
        <>
            <h1 className="main-title">Out Tours</h1>
            <section className="tours-container">
                {tours.map((tour) => {
                    return (
                        <Tour
                            removeTour={removeTour}
                            key={tour.id} 
                            {...tour}
                        />
                    )
                })}
            </section>
        </>
    )
}