import { Box, BoxProps } from '@chakra-ui/layout';

export const Card: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box rounded="md" bg="gray.700" shadow="md" p={8} {...props}>
      {children}
    </Box>
  );
};
