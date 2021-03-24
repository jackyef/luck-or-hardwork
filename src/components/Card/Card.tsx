import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, BoxProps } from '@chakra-ui/layout';

export const Card: React.FC<BoxProps> = ({ children, ...props }) => {
  const bg = useColorModeValue('gray.50', 'gray.700');

  return (
    <Box rounded="md" bg={bg} shadow="md" p={8} {...props}>
      {children}
    </Box>
  );
};
