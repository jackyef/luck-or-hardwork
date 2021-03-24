import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useRef } from 'react';

interface Props {
  onSubmit: (values: { population: number; luckFactor: number }) => void;
  isLoading?: boolean
}

export const VariablesForm = ({ onSubmit, isLoading = false }: Props) => {
  const populationRef = useRef<HTMLInputElement>(null);
  const luckFactorRef = useRef<HTMLInputElement>(null);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    onSubmit({
      population: Number(populationRef?.current?.value),
      luckFactor: Number(luckFactorRef?.current?.value) / 100,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>How many people should we choose from?</FormLabel>
        <Input ref={populationRef} type="number" name="population" defaultValue={500} min={10} max={50000} />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>How much (%) should luck factor here?</FormLabel>
        <Input
          ref={luckFactorRef}
          defaultValue={1}
          type="number"
          min="0"
          max="100"
          name="luckFactor"
        />
      </FormControl>
      <Button colorScheme="telegram" isLoading={isLoading} mt={4} type="submit">Calculate</Button>
    </form>
  );
};
