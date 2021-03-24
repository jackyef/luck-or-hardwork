import { Button } from '@chakra-ui/button';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/layout';

import { Card } from '@/components/Card/Card';
import { YouTubeEmbed } from '@/components/YouTubeEmbed/YouTubeEmbed';

interface Props {
  onNext: () => void
  onPrev: () => void
}

export const Step1 = ({ onNext }: Props) => {
  return (
    <Card>
      <Heading as="h1" fontSize="2xl" mb={4}>
        Is success determined by luck 🍀 or hard work 🛠️?
      </Heading>
      <Stack spacing={4}>
        <Text>Let&apos;s see how much luck factor in success.</Text>
        <Text>Inspired by this Veritasium&apos;s video:</Text>
      </Stack>

      <Box mt={8}>
        <YouTubeEmbed videoId="3LopI4YeC4I" startTime={210} />
      </Box>

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
