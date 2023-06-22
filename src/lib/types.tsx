export type Recipe = {
  id: string;
  description: string;
  imageSrc: string;
  ingredients: string[];
  instructions: string[];
  title: string;
  cookingTime: number;
}