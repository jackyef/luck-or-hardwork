import { Button } from '@chakra-ui/button';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/layout';

import { Card } from '@/components/Card/Card';
import { AnimateSharedLayout, motion } from 'framer-motion';
import { useState } from 'react';

interface Props {
  onNext: () => void
  onPrev: () => void
}

export const Step3 = ({ onNext, onPrev }: Props) => {
  const [stepCompleted, setStepCompleted] = useState(false);

  return (
    <AnimateSharedLayout>
      <Card>
        <Heading as="h1" fontSize="2xl" mb={4}>
          Top 10 people
      </Heading>
        <Stack spacing={4}>
          <Text>Let&apos;s see how much luck factor in success.</Text>
          <Text>Inspired by this Veritasium&apos;s video:</Text>
        </Stack>

        <motion.div layout layoutId="navigation">
          <Flex justifyContent="space-between" mt={8}>
            <Button
              colorScheme="yellow"
              leftIcon={<ArrowBackIcon />}
              onClick={onPrev}
            >
              Back
            </Button>
            {stepCompleted && (
              <motion.div
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 25 },
                  opacity: { duration: 0.2 },
                }}
              >
                <Button
                  colorScheme="whatsapp"
                  rightIcon={<ArrowForwardIcon />}
                  onClick={onNext}
                >
                  Next
                </Button>
              </motion.div>
            )}
          </Flex>
        </motion.div>
      </Card>
    </AnimateSharedLayout>
  );
};
