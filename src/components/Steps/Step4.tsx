import { Button } from '@chakra-ui/button';
import { ArrowBackIcon, ArrowForwardIcon, RepeatIcon } from '@chakra-ui/icons';
import { Center, Code, Flex, Heading, Stack, Text } from '@chakra-ui/layout';

import { Card } from '@/components/Card/Card';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { createPerson, getTopNPerson, Person } from '@/lib/person';
import { PersonCard } from '../PersonCard/PersonCard';
import { commonTransition } from '@/lib/animation';

interface Props {
  onNext: () => void
  onPrev: () => void
}

let persistedTop10: Person[] = []

export const Step4 = ({ onNext, onPrev }: Props) => {
  const [top10, setTop10] = useState(persistedTop10);
  const [isCalculating, setIsCalculating] = useState(false);
  const [stepCompleted, setStepCompleted] = useState(persistedTop10.length >= 10);

  const handleCalculateTop10 = () => {
    setIsCalculating(true)

    const people: Person[] = [];

    for (let i = 0; i < 100; i += 1) {
      people.push(createPerson())
    }

    setTop10(getTopNPerson(people, 0.01, 10))
  }

  const handleReset = () => {
    setTop10([]);

    setTimeout(handleCalculateTop10)
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
          With fewer population
        </Heading>
        <Stack spacing={4}>
          <Text>Let&apos;s tweak the variable a little bit!</Text>
          <Text>Instead of having to choose top 10 people out of 10,000, we now only have 100 people to choose from.</Text>
          <Text>As a reminder, this is how we calculate the score for each person:</Text>
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
          <AnimateSharedLayout>
          <Center mt={8}>
            <motion.div
              layout
              {...commonTransition}
            >
              <Button
                ml={4}
                leftIcon={<RepeatIcon />}
                onClick={handleReset}
                colorScheme="purple"
                isLoading={isCalculating}
              >
                Re-generate
              </Button>
            </motion.div>
          </Center>
          {!isCalculating && (
            <motion.div
              layout
              {...commonTransition}
            >
              <Flex flexWrap="wrap" gridGap={4} justifyContent="center" mt={8}>
                <AnimatePresence>
                  {top10.map((p, index) => (
                    <motion.div
                      key={index}
                      layout
                      {...commonTransition}
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
            </motion.div>
          )}
        </AnimateSharedLayout>
      )}

        {stepCompleted && (
          <Stack mt={8} spacing={4}>
            <Text>Notice that now we have more people with lower luck rating in the top 10!</Text>
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
                {...commonTransition}
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
