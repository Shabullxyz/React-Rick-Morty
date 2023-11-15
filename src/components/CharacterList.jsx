import React, { useEffect, useState } from 'react'
import Character from './Character';

function NavPage(props) {
    return (
        <header className='d-flex justify-content-between align-items-center' >
            {props.page > 1 && (
                <button className='btn btn-primary btn-sm' onClick={() => props.setPage(props.page - 1)}>
                    Page {props.page - 1}
                </button>)}
            <p> Page {props.page}</p>
            <button className='btn btn-primary btn-sm' onClick={() => props.setPage(props.page + 1)}>
                Page {props.page + 1}
            </button>
        </header>
    )
}


function CharacterList() {
    const [characters, setcharacters] = useState([]);
    const [loading, setloading] = useState(true)
    const [page, setPage] = useState(1)
    useEffect(() => {
        async function fetchdata() {
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
            const data = await response.json();
            setloading(false)
            setcharacters(data.results);

        }
        fetchdata();
    }, [page]);


    return (
        <div className='container-fluid m-10 p-10 '>
            <NavPage page={page} setPage={setPage} />
            {loading ? (<h1>Loading ... </h1>) : (

                <div className='row'>

                    {characters.map(character => {
                        return (<div key={character.id} className='col-md-4'>
                            <Character character={character} />
                        </div>)
                    })
                    }
                    <NavPage page={page} setPage={setPage} />
                </div>

            )}
        </div>)
}

export default CharacterList