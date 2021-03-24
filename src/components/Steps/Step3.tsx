import { Button } from '@chakra-ui/button';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Center, Code, Flex, Heading, Stack, Text } from '@chakra-ui/layout';

import { Card } from '@/components/Card/Card';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { createPerson, getTopNPerson, Person } from '@/lib/person';
import { PersonCard } from '../PersonCard/PersonCard';

interface Props {
  onNext: () => void
  onPrev: () => void
}

let persistedTop10: Person[] = []

export const Step3 = ({ onNext, onPrev }: Props) => {
  const [top10, setTop10] = useState(persistedTop10);
  const [isCalculating, setIsCalculating] = useState(false);
  const [stepCompleted, setStepCompleted] = useState(persistedTop10.length >= 10);

  const handleCalculateTop10 = () => {
    setIsCalculating(true)

    const people: Person[] = [];

    for (let i = 0; i < 10000; i += 1) {
      people.push(createPerson())
    }

    setTop10(getTopNPerson(people, 0.01, 10))
  }

  useEffect(() => {
    persistedTop10 = top10;
  }, [top10])

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (isCalculating && top10.length === 10) {
      timeout = setTimeout(() => {
        setIsCalculating(false)
        setStepCompleted(true)
      }, 1000);
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [isCalculating, top10])

  return (
    <AnimateSharedLayout>
      <Card>
        <Heading as="h1" fontSize="2xl" mb={4}>
          Top 10 people
        </Heading>
        <Stack spacing={4}>
          <Text>With the luck factor being 1%, we will calculate the top 10 people (out of 10,000) for the job by the following simple formula:</Text>
          <Center>
            <Code p={4} rounded="md" colorScheme="pink">
              score = skill * 0.99 + luck * 0.01
            </Code>
          </Center>
        </Stack>

        {!stepCompleted ? (
          <Center mt={8}>
            <Button
              onClick={handleCalculateTop10}
              colorScheme="telegram"
              isLoading={isCalculating}
            >
              Calculate top 10 people!
            </Button>
          </Center>
        ) : (
            <Flex flexWrap="wrap" gridGap={4} justifyContent="center" mt={8}>
              <AnimatePresence>
                {top10.map((p, index) => (
                  <motion.div
                    key={index}
                    layout
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{
                      x: { type: 'spring', stiffness: 300, damping: 25, delay: index * 0.2 },
                      opacity: { duration: 0.2, delay: index * 0.2 },
                    }}
                  >
                    <PersonCard {...p} w={[120, 140]} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </Flex>
          )}

        {stepCompleted && (
          <Stack mt={8} spacing={4}>
            <Text>Interesting! Notice that most of the people in the top 10 have a pretty high luck, even with the luck factor being only 1%!</Text>
            <Text>Does this mean luck is more important than hard work/skill? Not quite. Let&apos;s take a look at another illustration.</Text>
          </Stack>
        )}

        <motion.div layout layoutId="navigation">
          <Flex justifyContent="space-between" mt={8}>
            <Button
              colorScheme="orange"
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
