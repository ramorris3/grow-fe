import { Select, Text } from '@chakra-ui/react';

const countOptions = [25, 50, 75, 100, 200];

interface Props {
  value: number,
  onChange: (count: number) => void;
}

export const CountSelect = ({ value, onChange }: Props) => (
  <Text
    as="label"
    textStyle="p2"
    flex="1"
  >
    Results:
    <Select
      value={value}
      onChange={(e) => onChange(parseInt(e.target.value))}
    >
      {countOptions.map((num) => (
        <option 
          key={num}
          value={num}
        >
          {num}
        </option>
      ))}
    </Select>
  </Text>
);
