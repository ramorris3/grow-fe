interface ApiDefaultArticle {
  article: string,
  views: number,
  rank: number,
} 

interface ApiCountryArticle {
  article: string,
  views_ceil: number,
  rank: number,
}

export interface Article {
  name: string,
  views: number,
  rank: number
}

const fromDefaultRequest = (rawArticle: ApiDefaultArticle): Article => ({
  name: rawArticle.article,
  views: rawArticle.views,
  rank: rawArticle.rank
});

const fromCountryRequest = (rawArticle: ApiCountryArticle): Article => ({
  name: rawArticle.article,
  views: rawArticle.views_ceil,
  rank: rawArticle.rank
});

export const fromRequest = (rawArticle: ApiDefaultArticle | ApiCountryArticle): Article => {
  if ('views_ceil' in rawArticle) {
    return fromCountryRequest(rawArticle);
  }
  return fromDefaultRequest(rawArticle);
};
