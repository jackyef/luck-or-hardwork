import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useRef } from 'react';

interface Props {
  onSubmit: (values: { population: number; luckFactor: number }) => void;
}

export const VariablesForm = ({ onSubmit }: Props) => {
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
    <div>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>How many people will be taking part in this?</FormLabel>
          <Input ref={populationRef} type="number" name="population" />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>How much (%) does luck factor here?</FormLabel>
          <Input
            ref={luckFactorRef}
            type="number"
            min="0"
            max="100"
            name="luckFactor"
          />
        </FormControl>
        <Button mt={4} type="submit">Submit</Button>
      </form>
    </div>
  );
};
