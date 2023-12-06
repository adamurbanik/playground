import { getRealDataApi, getSomeDataSomething } from "./someRequests";

export const createEvent = (title, price) => {
  return {
    title,
    price,
  };
};

export const getEvents = (events, searchFilter) => {
  return events.filter(searchFilter);
};

export const generateRandomNumber = () => {
  const id = Math.random().toString();
  return `some-string-${id}`;
};

export const getSomeData = () => {
  const data = getSomeDataSomething();
  return data;
};

export const getRealData = () => {
  const result = getRealDataApi();
  return result;
}
