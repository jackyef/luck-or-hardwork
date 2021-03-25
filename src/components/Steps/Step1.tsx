import { Button } from '@chakra-ui/button';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Flex, Heading, Stack, Text } from '@chakra-ui/layout';

import { Card } from '@/components/Card/Card';

interface Props {
  onNext: () => void;
  onPrev: () => void;
}

export const Step1 = ({ onNext }: Props) => {
  return (
    <Card>
      <Heading as="h1" fontSize="2xl" mb={4}>
        Is success determined by luck 🍀 or hard work 🛠️?
      </Heading>
      <Stack spacing={4}>
        <Text>
          Some people think that it&apos;s their hardwork that led them to their
          success. Others think that luck is the one that led to one&apos;s
          success.
        </Text>
        <Text>
          There are some truths to both of these thinking. Let&apos;s see how
          much luck and hard work factor in success.
        </Text>
      </Stack>

      <Flex justifyContent="flex-end" mt={8}>
        <Button
          colorScheme="whatsapp"
          rightIcon={<ArrowForwardIcon />}
          onClick={onNext}
        >
          Start illustration
        </Button>
      </Flex>
    </Card>
  );
};
