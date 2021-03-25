import { useRouter } from 'next/router';
import { Button } from '@chakra-ui/button';
import { ArrowBackIcon } from '@chakra-ui/icons';
import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
} from '@chakra-ui/layout';

import { Card } from '@/components/Card/Card';
import { YouTubeEmbed } from '../YouTubeEmbed/YouTubeEmbed';
import { TwitterShare } from '../Social/TwitterShare';
import { defaultTitle, publicUrl } from '../MetaTags/AppMetaTags';

interface Props {
  onNext: () => void;
  onPrev: () => void;
}

export const Step6 = ({ onPrev }: Props) => {
  const router = useRouter();

  return (
    <Card>
      <Heading as="h1" fontSize="2xl" mb={4}>
        Summary
      </Heading>
      <Stack spacing={4}>
        <Text>
          If there&apos;s anything we can take from this illustration, it&apos;s
          that <em>hard work is definitely important!</em> But still,{' '}
          <em>
            when the competition is fierce, being lucky can give you the edge to
            succeed.
          </em>
        </Text>
        <Text>
          This illustration is of course overly simplified. In reality, there
          are too many variables to take into account to simulate correctly.
        </Text>
        <TwitterShare text={`${defaultTitle} ${publicUrl}${router.pathname}`}>
          Share on Twitter
        </TwitterShare>
      </Stack>

      <Divider my={8} />

      <Stack spacing={4}>
        <Text>
          Build with{' '}
          <Link isExternal href="https://nextjs.org/">
            Next.js
          </Link>{' '}
          +{' '}
          <Link isExternal href="https://chakra-ui.com/">
            Chakra UI
          </Link>{' '}
          +{' '}
          <Link isExternal href="https://www.framer.com/motion/">
            Framer Motion
          </Link>{' '}
          ⚡ by{' '}
          <Link isExternal href="https://twitter.com/jackyef__">
            @jackyef__
          </Link>
        </Text>

        <Text>
          <Link isExternal href="https://github.com/jackyef/luck-or-hardwork">
            Code are on GitHub
          </Link>
        </Text>
        <Text>Inspired by this Veritasium&apos;s video:</Text>
      </Stack>

      <Box mt={8}>
        <YouTubeEmbed videoId="3LopI4YeC4I" startTime={210} />
      </Box>

      <Center mt={8}></Center>

      <Flex justifyContent="space-between" mt={8}>
        <Button
          colorScheme="orange"
          leftIcon={<ArrowBackIcon />}
          onClick={onPrev}
        >
          Back
        </Button>
      </Flex>
    </Card>
  );
};
