import axios from 'axios';
import { format } from 'date-fns';

const BASE_URL = `https://wikimedia.org/api/rest_v1/metrics/pageviews`;

interface Props {
  date: Date,
  countryCode?: string,
}

export const fetchArticles = async ({ date, countryCode }: Props) => {
  const dateStr = format(date, 'yyyy/MM/dd');

  const url = countryCode
    ? `${BASE_URL}/top-per-country/${countryCode}/all-access/${dateStr}`
    : `${BASE_URL}/top/en.wikipedia/all-access/${dateStr}`;

  return axios.get(url);
};
