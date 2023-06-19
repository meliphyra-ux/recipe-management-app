import { Button, Icon, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';

const NavigationButton = ({
  icon,
  to,
  text,
}: {
  icon: IconType;
  to: string;
  text: string;
}) => {
  return (
    <Link to={to}>
      <Button>
        <Icon as={icon} />
        <Text ml='2'>{text}</Text>
      </Button>
    </Link>
  );
};

export default NavigationButton;
