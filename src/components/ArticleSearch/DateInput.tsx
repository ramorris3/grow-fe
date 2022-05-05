import { Input, InputProps, Text, useColorMode } from '@chakra-ui/react';
import { format, parse } from 'date-fns';

interface Props extends Omit<InputProps, 'value'|'onChange'> {
  value: Date,
  onChange: (date: Date) => void;
}

const HTML_DATE_FORMAT = 'yyyy-MM-dd';

export const DateInput = ({ value, onChange }: Props) => {
  const { colorMode } = useColorMode();

  const today = format(new Date(), HTML_DATE_FORMAT);

  return (
    <Text
      as="label"
      textStyle="p2"
      flex="1"
    >
      Choose a date:
      <Input
        type="date"
        value={format(value, HTML_DATE_FORMAT)}
        max={today}
        onChange={(e) => {
          const date = parse(e.target.value, HTML_DATE_FORMAT, new Date());
          onChange(date);
        }}
        style={{ colorScheme: colorMode }}
      />
    </Text>
  );
};
