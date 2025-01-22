export const get = (uri: string) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const data = JSON.parse(localStorage.getItem(uri) || '[]');

    return data;
  }
  return [];
};

export const post = (uri: string, data: object) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem(uri, JSON.stringify(data));

    const trainingData = JSON.parse(localStorage.getItem(uri) || '[]');

    return trainingData;
  }
  return [];
};
