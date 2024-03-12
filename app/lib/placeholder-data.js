// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const randomizeUsers = (maxUsers) => {
  const randomNumber = Math.floor(Math.random() * maxUsers);
  return randomNumber;
};

const customers = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Chuck Fishman',
    email: 'chuck@fishman.com',
    image_url: `https://avatars.githubusercontent.com/u/${randomizeUsers(
      93176365,
    )}?v=4`,
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Aman Brhane',
    email: 'aman@brhane.com',
    image_url: `https://avatars.githubusercontent.com/u/${randomizeUsers(
      93176365,
    )}?v=4`,
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    name: 'Hector Simpson',
    email: 'hector@simpson.com',
    image_url: `https://avatars.githubusercontent.com/u/${randomizeUsers(
      93176365,
    )}?v=4`,
  },
  {
    id: '3958dc9e-748f-4377-85e9-fec4b6a6442a',
    name: 'Lena Patel',
    email: 'lena@patel.com',
    image_url: `https://avatars.githubusercontent.com/u/${randomizeUsers(
      93176365,
    )}?v=4`,
  },
  {
    id: '3958dc9e-759f-4377-85e9-fec4b6a6442a',
    name: 'Devon Knight',
    email: 'devon@knight.com',
    image_url: `https://avatars.githubusercontent.com/u/${randomizeUsers(
      93176365,
    )}?v=4`,
  },
  {
    id: '3958dc9e-760f-4377-85e9-fec4b6a6442a',
    name: 'Ella Wong',
    email: 'ella@wong.com',
    image_url: `https://avatars.githubusercontent.com/u/${randomizeUsers(
      93176365,
    )}?v=4`,
  },
  {
    id: '3958dc9e-770f-4377-85e9-fec4b6a6442a',
    name: 'Gavin Douglas',
    email: 'gavin@douglas.com',
    image_url: `https://avatars.githubusercontent.com/u/${randomizeUsers(
      93176365,
    )}?v=4`,
  },
  {
    id: '3958dc9e-780f-4377-85e9-fec4b6a6442a',
    name: 'Mia Reynolds',
    email: 'mia@reynolds.com',
    image_url: `https://avatars.githubusercontent.com/u/${randomizeUsers(
      93176365,
    )}?v=4`,
  },
  {
    id: '3958dc9e-790f-4377-85e9-fec4b6a6442a',
    name: 'Oscar Rodriguez',
    email: 'oscar@rodriguez.com',
    image_url: `https://avatars.githubusercontent.com/u/${randomizeUsers(
      93176365,
    )}?v=4`,
  },
  {
    id: '3958dc9e-800f-4377-85e9-fec4b6a6442a',
    name: 'Sophie Taylor',
    email: 'sophie@taylor.com',
    image_url: `https://avatars.githubusercontent.com/u/${randomizeUsers(
      93176365,
    )}?v=4`,
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: customers[7].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    customer_id: customers[6].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    customer_id: customers[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    customer_id: customers[5].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    customer_id: customers[2].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-18',
  },
  {
    customer_id: customers[0].id,
    amount: 8945,
    status: 'paid',
    date: '2023-10-04',
  },
  {
    customer_id: customers[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

module.exports = {
  users,
  customers,
  invoices,
  revenue,
};
