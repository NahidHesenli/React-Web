import React from 'react'
import { useGetAllCharactersQuery } from '../../services/rickAndMortyApi'
import Loading from '../../components/Loading'
import Character from '../../components/Character'
import { useSelector } from 'react-redux'

const Characters = () => {
    const search=useSelector(state=>state.search.searchTerm);
    const {data,isLoading,isError,error}=useGetAllCharactersQuery()
    if(isLoading){
        return <Loading/>
    }
    if(isError){
        return <p>Xeta bas verdi {error.status}</p>
    }
  return (
    <div className='flex flex-wrap gap-5 items-center justify-center p-4'>
        {data.results.filter(x=>x.name.toLowerCase().includes(search.toLowerCase())).map(charac=>(
            <Character key={charac.id} charac={charac}/>
        ))}
    </div>
  )
}

export default Characters