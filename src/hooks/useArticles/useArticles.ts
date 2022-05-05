
import { useQuery } from 'react-query';

import { Article, fromRequest } from './Article.model';
import { fetchArticles } from './articles.endpoints';

interface Props {
  date: Date,
  count: number,
  countryCode?: string;
}

export const useArticles = ({ date, count, countryCode = '' }: Props) => {
  const { data: result, ...query } = useQuery(['articles', date, countryCode], async () => {
    return await fetchArticles({ date, countryCode })
      .catch((e) => {
        // fail silently if it's a 404, because that means articles weren't found
        if (e?.response?.status !== 404) {
          throw e;
        }
      });
  });

  const rawArticles = result?.data?.items?.[0]?.articles?.slice(0, count) ?? [];
  const data: Article[] = rawArticles.map(fromRequest);
  
  return {
    ...query,
    data,
  };
};
