import { Button } from '@chakra-ui/button';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Center, Flex, Heading, Stack, Text } from '@chakra-ui/layout';

import { Card } from '@/components/Card/Card';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { createPerson, getTopNPerson, Person } from '@/lib/person';
import { PersonCard } from '../PersonCard/PersonCard';
import { VariablesForm } from '../VariablesForm/VariablesForm';

interface Props {
  onNext: () => void
  onPrev: () => void
}

let persistedTop10: Person[] = []

export const Step5 = ({ onNext, onPrev }: Props) => {
  const [top10, setTop10] = useState(persistedTop10);
  const [isCalculating, setIsCalculating] = useState(false);
  const [stepCompleted, setStepCompleted] = useState(persistedTop10.length >= 10);

  const handleCalculateTop10 = (population: number, luckFactor: number) => {
    setIsCalculating(true)

    const people: Person[] = [];

    for (let i = 0; i < population; i += 1) {
      people.push(createPerson())
    }

    setTop10(getTopNPerson(people, luckFactor, 10))
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
    <Card>
      <AnimateSharedLayout>
        <Heading as="h1" fontSize="2xl" mb={4}>
          Try it yourself
        </Heading>
        <Stack spacing={4}>
          <Text>You can tweak the variable yourself here and see how it affects the outcome</Text>
        </Stack>

        <Center py={8} px={[0, 16]}>
          <VariablesForm isLoading={isCalculating} onSubmit={({ population, luckFactor }) => {
            handleCalculateTop10(population, luckFactor)
          }} />
        </Center>

        {!isCalculating && top10.length === 10 && (
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
            <Text>
              Play around with it a little bit! You will notice that <em>as the number of people increases,
              more luck will be needed to be part of the top 10</em>.
            </Text>
            <Text>
              The reason is quite simple really. When there are more people, there will be more skillful people as well.
              If you are skillful, and you compete against people with similar skill level, luck becomes much more important!
            </Text>
            <Text>
              When there are fewer people, chances are there are not many high-skilled people as well. In this case, skill
              becomes much more important than luck.
            </Text>
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
      </AnimateSharedLayout>
    </Card>
  );
};
