import { useEffect } from 'react';

export default function Loading() {

    useEffect(() => {
        const loadingString = document.getElementById("loading");
        const colors = [
            {
                id: 0,
                color: 'pink'
            },
            {
                id: 1,
                color: 'red'
            },
            {
                id: 2,
                color: 'orange'
            },
            {
                id: 3,
                color: 'yellow'
            },
            {
                id: 4,
                color: 'limegreen'
            },
            {
                id: 5,
                color: 'cyan'
            },
            {
                id: 6,
                color: 'blue'
            },
            {
                id: 7,
                color: '#a500a5'
            }
        ];

        let colorCount = 0;

        setInterval(() => {
            loadingString.style.color = colors[colorCount].color;
            colorCount++;
            if ( colorCount > 7 ){ colorCount = 0; }
        }, 800);
    },[])

    return (
        <div id="Loading">
            <span id="loading">Chargement de la page..</span>
        </div>
    )
}