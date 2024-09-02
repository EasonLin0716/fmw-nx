import { sleep } from '../utils/helpers';
import { feedbacks } from '../utils/mockData';

export const getFeedbacks = async () => {
  await sleep();
  return feedbacks;
};

export const getFeedback = async (id: string) => {
  await sleep();
  return feedbacks.find((feedback) => feedback.id === Number(id));
}