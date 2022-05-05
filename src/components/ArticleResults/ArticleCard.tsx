import { Center, Text } from '@chakra-ui/react';

import { Article } from '../../hooks';

interface Props {
  article: Article
}

export const ArticleCard = ({ article }: Props) => {
  return (
    <Center
      flexDir="row" 
      gap={8}
      width="100%"
      padding={4}
      borderRadius="md"
    >
      <Text textStyle="h2">{article.rank}</Text>
      <Text 
        textStyle="p1"
        textAlign="center"
        overflow="hidden"
        whiteSpace="nowrap"
        textOverflow="ellipsis"
        flex="2"
      >
        {article.name}
      </Text>
      <Text textStyle="p2">Views: {article.views.toLocaleString()}</Text>
    </Center>
  );
};
