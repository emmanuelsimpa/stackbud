import { data } from '@/data/categories';
import { techTitles } from '@/data/title';

export const transformResponse = (results: any[]) => {
  if (results?.length) {
    const mappedResults = results?.map((item) => {
      const category = data[Math.floor(Math.random() * 5) + 1];
      const title = techTitles[Math.floor(Math.random() * 10) + 1];
      return {
        ...item,
        category: category,
        title: title,
      };
    });
    return mappedResults;
  }
  const formatedResult = {
    ...results,
    category: data[Math.floor(Math.random() * 5) + 1],
    title: techTitles[Math.floor(Math.random() * 10) + 1],
  };
  return formatedResult;
};
