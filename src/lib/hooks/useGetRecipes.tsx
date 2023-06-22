import { useEffect, useState } from "react"
import { Recipe } from "../types"
import { getRecipes } from "../firebase"

const useGetRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [page, setPage] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(true)

  const handleNextPage = () => {
    setPage(page => page++)
  }

  useEffect(() => {
    getRecipes().then(querySnapshot => {
      const recipes: Recipe[] = []
      querySnapshot.forEach(doc => {
        recipes.push({ id: doc.id, ...doc.data() as Omit<Recipe, 'id'>})
      })
      setRecipes([...recipes])
      setLoading(false)
    })
  }, [page])
  return {recipes, loading, handleNextPage}
}

export default useGetRecipes