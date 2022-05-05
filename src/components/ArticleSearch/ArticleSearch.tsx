import { useEffect, useState } from 'react';

import { Box, Flex, Stack, Text } from '@chakra-ui/react';

import { useArticles, useColors } from '../../hooks';
import { ArticleResults } from '../ArticleResults';
import { NAVBAR_HEIGHT } from '../dimensions.const';
import { CountryInput } from './CountryInput';
import { CountSelect } from './CountSelect';
import { DateInput } from './DateInput';
import { useYesterday } from './useYesterday';

export const ArticleSearch = () => {
  const yesterday = useYesterday();
  const [date, setDate] = useState<Date>(new Date());
  const [count, setCount] = useState<number>(100);
  const [countryCode, setCountryCode] = useState<string>('');
  const articleQuery = useArticles({ date, count, countryCode });
  const colors = useColors();
  
  useEffect(() => {
    setDate(yesterday);
  }, [yesterday]);

  const ViewWrap = Box;
  const ContentWrap = Flex;
  const FilterWrap = Stack;

  return (
    <ViewWrap
      width="100%"
      height="100%"
      minH="100vh"
      paddingX={{base: "5%", lg: "20%"}}
      paddingTop={NAVBAR_HEIGHT}
      paddingBottom="medium"
    >
      <ContentWrap
        flexDirection="column" 
        paddingY={8}
        gap={12}
      >
        <Text 
          textStyle="h1"
          textAlign="center"
        >
          Most-viewed articles on Wikipedia
        </Text>
        <FilterWrap
          direction={{base: 'column', lg: 'row'}}
          gap={{base: 8, lg: 4}}
          paddingBottom={12}
          borderBottomWidth="1px"
          borderBottomColor={colors.border}
        >
          <CountryInput onChange={(code) => setCountryCode(code)} />
          <DateInput
            value={date}
            onChange={(d) => setDate(d)}
          />
          <CountSelect
            value={count}
            onChange={(c) => setCount(c)}
          />
        </FilterWrap>
        <ArticleResults {...articleQuery} />
      </ContentWrap>
    </ViewWrap>
  );
};
