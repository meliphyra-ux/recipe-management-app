import useGetRecipes from "~/lib/hooks/useGetRecipes"
import RecipeCard from "../ui/Card"
import { Box } from "@chakra-ui/react"

const RecipeCards = () => {
  const { recipes } = useGetRecipes()
  
  const recipeCards = recipes.map(recipe => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ))
  return (
    <Box>
        { recipeCards }
    </Box>
  )
}

export default RecipeCards