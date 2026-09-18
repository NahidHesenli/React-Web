import React from 'react'
import { useGetCharacterByIdQuery } from '../../services/rickAndMortyApi'
import { useParams } from 'react-router-dom'
import Loading from '../../components/Loading'
import CharacterDetail from '../../components/CharacterDetail'

const CharacterDetails = () => {
    const {id}=useParams()
    const {data,isLoading,isError,error}=useGetCharacterByIdQuery(id)
    if(isLoading){
        return <Loading/>
    }
    if(isError){
        return <p>Xeta bas verdi {error.status}</p>
    }
  return (
    <div>
        <CharacterDetail key={data.id} charac={data}/>
    </div>
  )
}

export default CharacterDetails