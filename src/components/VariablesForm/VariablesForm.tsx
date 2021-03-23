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
        How many people will be taking part in this?
        <input ref={populationRef} type="number" name="population" />
        How much (%) does luck factor here?
        <input
          ref={luckFactorRef}
          type="number"
          min="0"
          max="100"
          name="luckFactor"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
