import { Button } from '@chakra-ui/button';
import { ArrowBackIcon, ArrowForwardIcon, RepeatIcon } from '@chakra-ui/icons';
import { Center, Flex, Heading, Stack, Text } from '@chakra-ui/layout';

import { Card } from '@/components/Card/Card';
import { useEffect, useState } from 'react';
import { createPerson, Person } from '@/lib/person';
import { PersonCard } from '../PersonCard/PersonCard';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { commonTransition } from '@/lib/animation';

interface Props {
  onNext: () => void
  onPrev: () => void
}
let persistedPeople: Person[] = []

export const Step2 = ({ onNext, onPrev }: Props) => {
  const [stepCompleted, setStepCompleted] = useState(persistedPeople.length >= 4);
  const [people, setPeople] = useState<Person[]>(persistedPeople);

  useEffect(() => {
    persistedPeople = people
  }, [people])

  const handleGeneratePerson = () => {
    const person = createPerson();

    setPeople((prev) => [...prev, person]);

    if (people.length === 3) {
      setStepCompleted(true);
    }
  };

  const maxAmountOfPeopleReached = people.length >= 4;

  return (
    <Card overflowX="hidden">
      <Heading as="h1" fontSize="2xl" mb={4}>
        Illustration
      </Heading>
      <Stack spacing={4}>
        <Text>
          Imagine we are applying for a job where there are 10,000 other
          applicants. To make it simple we will say that people that are more
          hard-working will have better skills (this is obviously not always the
          case, but let&apos;s go along with it for now). Along with skill, we
          would also want to take luck into account.
        </Text>
        <Text>
          For the purpose of the illustration, we will generate 10,000 people
          with random amount of skill and luck. Click the button below to
          start!
        </Text>
      </Stack>

      <Center mt={8}>
        <AnimateSharedLayout>
          <AnimatePresence>
            <motion.div
              layout
              {...commonTransition}
            >
              <Button
                onClick={handleGeneratePerson}
                colorScheme="telegram"
                disabled={maxAmountOfPeopleReached}
              >
                {maxAmountOfPeopleReached
                  ? 'Whoa, that is enough!'
                  : 'Generate a person!'}
              </Button>
            </motion.div>

            {maxAmountOfPeopleReached && (
              <motion.div
                layout
                {...commonTransition}
              >
                <Button
                  ml={4}
                  leftIcon={<RepeatIcon />}
                  onClick={() => {
                    setPeople([]);
                  }}
                  colorScheme="purple"
                >
                  Reset
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </AnimateSharedLayout>
      </Center>

      <AnimateSharedLayout>
        <Flex flexWrap="wrap" gridGap={4} justifyContent="center" mt={8}>
          <AnimatePresence>
            {people.slice(0, 8).map((p, index) => (
              <motion.div
                key={index}
                layout
                {...commonTransition}
              >
                <PersonCard {...p} w={[120, 140]} />
              </motion.div>
            ))}
          </AnimatePresence>
        </Flex>

        {stepCompleted && (
          <AnimatePresence>
            <motion.div
              layout
              layoutId="outro"
              {...commonTransition}
            >
              <Stack mt={8} spacing={4}>
                <Text>
                  Imagine 10,000 of these people, with all their different
                  combination of skill and luck!
                </Text>
                <Text>
                  Let&apos;s say only 10 people will be accepted for the job,
                  and the luck factor is 1%. Who do you think will get the job?
                </Text>
              </Stack>
            </motion.div>
          </AnimatePresence>
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
      </AnimateSharedLayout>
    </Card>
  );
};
