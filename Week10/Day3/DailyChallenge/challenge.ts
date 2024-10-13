//Create a function handleData that processes an array of mixed types. The array can contain objects
// with different structures. Implement type guards to handle each type of object and perform
// specific operations based on their structure.

type User = {
    type: 'user';
    name: string;
    age: number;
};

type Product = {
    type: 'product';
    id: number;
    price: number;
};

type Order = {
    type: 'order';
    orderId: string;
    amount: number;
};

type Data = User | Product | Order;

const handleData = (data: Data[]) => {
  return data.map(item => {
      if (item.type === 'user') {
        return `Hi, ${item.name}, ${item.age}`;
      }
      if (item.type === 'product') {
          return `Id: ${item.id}, price: ${item.price}`;
      }
      if (item.type === 'order') {
          return `Order ID: ${item.orderId}, amount: ${item.amount}`;
      }
  })
}

const data: Data[] = [
    { type: 'user', name: 'User', age: 30 },
    { type: 'product', id: 1, price: 9.99 },
    { type: 'order', orderId: 'AAA1', amount: 10 },
    { type: 'user', name: 'User2', age: 25 },
    { type: 'product', id: 2, price: 0.99 }
];

console.log(handleData(data));