import { useCallback, useRef, useState } from 'react';

import { Input, List, ListItem, Text } from '@chakra-ui/react';

import { Country, COUNTRIES } from './countries.const';
import { useColors, useDebouncedEffect, useOnClickOutside } from '../../../hooks';

interface Props {
  onChange: (countryCode: string) => void;
}

export const CountryInput = ({ onChange }: Props) => {
  const [filter, setFilter] = useState<string>('');
  const [results, setResults] = useState<Country[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);

  const dropdownRef = useRef(null);
  useOnClickOutside(dropdownRef, () => showResults && setShowResults(false));

  const colors = useColors();

  const updateResults = useCallback(() => {
    if (filter.length > 0) {
      setResults(
        COUNTRIES
          .filter((c) => c.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
          .sort((a, b) => a.name.localeCompare(b.name))
      );
    } else {
      setShowResults(false);
      onChange(''); // default to all results
    }
  }, [filter, onChange]);

  useDebouncedEffect(updateResults, [filter]);

  const handleSelectResult = useCallback((result: Country) => {
    setFilter(result.name);
    setShowResults(false);
    onChange(result.code);
  }, [onChange]);

  return (
    <Text
      as="label"
      textStyle="p2"
      flex="3"
      position="relative"
    >
      Filter by country:
      <Input
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value)
          setShowResults(true);
        }}
        placeholder="Country"
      />
      {showResults && (
        <List
          ref={dropdownRef}
          width="100%"
          maxHeight="250px"
          position="absolute"
          bgColor={colors.bg}
          borderRadius="md"
          borderWidth="1px"
          borderColor={colors.border}
          overflowY="scroll"
        >
          {results.map((country: Country) => (
            <ListItem
              key={`${country.code}-${country.name}`}
              padding={4}
              onClick={() => handleSelectResult(country)}
              _hover={{ 
                bgColor: 'green.500',
                color: 'white'
              }}
            >
              {country.name}
            </ListItem>
          ))}
        </List>
      )}
    </Text>
  );
};