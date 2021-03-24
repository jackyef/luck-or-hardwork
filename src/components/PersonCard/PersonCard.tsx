import { Person } from '@/lib/person';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, BoxProps, Center, Text } from '@chakra-ui/layout';
import { Progress } from '@chakra-ui/progress';

type Props = BoxProps & Person;

export const PersonCard = ({ skill, luck, emoji, ...props }: Props) => {
  const bg = useColorModeValue('gray.100', 'gray.600');

  return (
    <Box rounded="md" bg={bg} shadow="md" p={4} {...props}>
      <Center>
        <Text fontSize="6xl">{emoji}</Text>
      </Center>
      <Text mt={2}>
        Skill 🛠️
        <Progress colorScheme="red" value={skill} rounded="md" />
      </Text>
      <Text mt={2}>
        Luck 🍀
        <Progress colorScheme="green" value={luck} rounded="md" />
      </Text>
    </Box>
  );
};
