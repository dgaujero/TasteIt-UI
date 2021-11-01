import React, {useState} from 'react'
import data from '../../mock.data.json'
import { Card } from '../Card/Card'

export const Main = () => {

    const [recipes, setRecipes] = useState(data)

    return (
            <Card recipes={recipes}/>
    )
}
