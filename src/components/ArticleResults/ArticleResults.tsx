import { Text, VStack } from '@chakra-ui/react';
import { Article } from '../../hooks';
import { ArticleCard } from './ArticleCard';
import { ArticlePlaceholder } from './ArticlePlaceholder';

interface Props {
  isLoading?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
  data?: Article[];
}

export const ArticleResults = ({ 
  isLoading,
  isError, 
  isSuccess, 
  data: articles 
}: Props) => {

  if (isLoading) {
    return (
      <VStack gap={6}>
        <ArticlePlaceholder />
        <ArticlePlaceholder />
        <ArticlePlaceholder />
        <ArticlePlaceholder />
        <ArticlePlaceholder />
      </VStack>
    );
  }

  if (isError) {
    return (
      <VStack gap={6} textAlign="center">
        <Text textStyle="h2" color="yellow.500">Something went wrong.</Text>
        <Text textStyle="p1">
          We're having trouble loading articles right now. Try reloading the page, and if you're still having issues, contact support.
        </Text>
      </VStack>
    )
  }

  if (isSuccess && articles?.length === 0) {
    return (
      <VStack gap={6} textAlign="center">
        <Text textStyle="h2" color="yellow.500">Nothing to see here.</Text>
        <Text textStyle="p1">We couldn't find any articles with the filters you chose.  Try choosing a different date, or another country.</Text>
      </VStack>
    )
  }

  return (
    <VStack gap={6}>
      {articles?.map((article) => (
        <ArticleCard
          key={`${article.name}-${article.rank}`}
          article={article}
        />
      ))}
    </VStack>
  );
};