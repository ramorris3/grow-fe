import { useEffect, useState } from 'react';

export const useYesterday = () => {
  const [yesterday, setYesterday] = useState<Date>(new Date());

  useEffect(() => {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    setYesterday(date);
  }, []);

  return yesterday;
};