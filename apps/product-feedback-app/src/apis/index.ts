import { sleep } from '../utils/helpers';

export const getFeedbacks = async () => {
  const response = [
    {
      id: 1,
      upvotes: 75,
      title: 'Add a mobile app',
      description: 'Add a mobile app for iOS and Android',
      commentCount: 4,
      filterValue: 3,
    },
    {
      id: 2,
      upvotes: 45,
      title: 'Improve dashboard',
      description: 'Enhance the dashboard with more features',
      commentCount: 6,
      filterValue: 2,
    },
    {
      id: 3,
      upvotes: 30,
      title: 'Add dark mode',
      description: 'Implement dark mode across the application',
      commentCount: 8,
      filterValue: 1,
    },
    {
      id: 4,
      upvotes: 95,
      title: 'Allow custom themes',
      description: 'Allow users to create and apply custom themes',
      commentCount: 10,
      filterValue: 4,
    },
    {
      id: 5,
      upvotes: 65,
      title: 'Integrate with third-party services',
      description: 'Provide integrations with popular third-party services',
      commentCount: 2,
      filterValue: 5,
    },
    {
      id: 6,
      upvotes: 80,
      title: 'Improve performance',
      description: 'Optimize the application for better performance',
      commentCount: 5,
      filterValue: 2,
    },
    {
      id: 7,
      upvotes: 40,
      title: 'Add offline support',
      description: 'Allow the application to work offline',
      commentCount: 3,
      filterValue: 3,
    },
    {
      id: 8,
      upvotes: 90,
      title: 'Improve accessibility',
      description:
        'Make the application more accessible to users with disabilities',
      commentCount: 7,
      filterValue: 1,
    },
    {
      id: 9,
      upvotes: 25,
      title: 'Add multi-language support',
      description: 'Support multiple languages in the application',
      commentCount: 9,
      filterValue: 4,
    },
    {
      id: 10,
      upvotes: 55,
      title: 'Add push notifications',
      description: 'Enable push notifications for important updates',
      commentCount: 1,
      filterValue: 5,
    },
  ];
  await sleep();
  return response;
};
