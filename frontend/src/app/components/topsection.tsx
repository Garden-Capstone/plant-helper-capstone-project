'use client'
import backgroundImage from 'https://unsplash.com/photos/a-potted-plant-sitting-on-top-of-a-table-yBEsu2qYqSY'

function App() {
    return (
        <div className='bg-cover h-screen' style=({backgroundImage: "url(https://unsplash.com/photos/a-potted-plant-sitting-on-top-of-a-table-yBEsu2qYqSY)" })/>
            </div>
    )
}
// import React from "react";
//
//
// export default function TopSection() {
//     return (
//         <div className="bg-no-repeat bg-local" style={{
//             backgroundImage: 'https://unsplash.com/photos/a-potted-plant-sitting-on-top-of-a-table-yBEsu2qYqSY',
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             zIndex: '-1',
//         }}
//         ></div>
//
// );
// }







export default class TopSection {
}