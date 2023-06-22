import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  Button,
  ButtonGroup,
} from '@chakra-ui/react';
// Types
import { Recipe } from '~/lib/types';

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  const { imageSrc, title, description, cookingTime } = recipe;
  const slicedDescription =
    description.split(' ').length > 15
      ? description.split(' ').slice(0, 15).join(' ') + '...'
      : description;
  return (
    <Card maxW="sm" backgroundColor="gray.700" color="whiteAlpha.900">
      <CardBody>
        <Image src={imageSrc} alt={title} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="lg">{title}</Heading>
          <Text>{slicedDescription}</Text>
          <Text color="whiteAlpha.900" fontSize="xl">
            {cookingTime} minutes
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="green">
            Check recipe
          </Button>
          <Button variant="ghost" colorScheme="whiteAlpha">
            Add to saved
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default RecipeCard;
