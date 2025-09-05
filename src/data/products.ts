// This file is a list of products
// Each product has: id, title, image, price, and category
export type CategoryType = "pizza" | "burger" | "coffee";
export interface Product {
  id: number;
  title: string;
  category: CategoryType;
  price: number;
  image: string;
}
export const products: Product[] = [
  {
    id: 1, // unique number for each product
    title: "burger 1", // product name
    image:
      "https://images.nightcafe.studio/ik-seo/jobs/OuoH2s4jsyNsTcncR50q/OuoH2s4jsyNsTcncR50q--1--z2yq1/fast-food.jpg?tr=w-1080,c-at_max", // product image
    price: 10, // product price
    category: "burger", // type of product
  },
  {
    id: 2,
    title: "burger 2",
    image:
      "https://images.nightcafe.studio/ik-seo/jobs/zXCq1odkJjntn0h1IPeb/zXCq1odkJjntn0h1IPeb--1--y6jo9_7.8125x/fast-food.jpg?tr=w-1600,c-at_max",
    price: 15,
    category: "burger",
  },
  {
    id: 3,
    title: "burger 3",
    image:
      "https://images.nightcafe.studio/ik-seo/jobs/ocpBKMuTCQav6dXbhm8l/ocpBKMuTCQav6dXbhm8l--1--qzsn9/fast-food.jpg?tr=w-1080,c-at_max",
    price: 16,
    category: "burger",
  },
  {
    id: 4,
    title: "burger 4",
    image:
      "https://images.nightcafe.studio/ik-seo/jobs/MgvnFCMffEmnlZPzg0G9/MgvnFCMffEmnlZPzg0G9--1--jkon7/fast-food.jpg?tr=w-1080,c-at_max",
    price: 16,
    category: "burger",
  },
  {
    id: 5,
    title: "burger 5",
    image:
      "https://images.nightcafe.studio/ik-seo/jobs/kcX6V8cNyEcDJevGzbOo/kcX6V8cNyEcDJevGzbOo--1--jjdmv/burger.jpg?tr=w-1080,c-at_max",
    price: 16,
    category: "burger",
  },
  {
    id: 6,
    title: "burger 6",
    image:
      "https://images.nightcafe.studio/ik-seo/jobs/5aD1zEOeKqcLEKqkkUZT/5aD1zEOeKqcLEKqkkUZT--0--ok07z/burger.jpg?tr=w-1080,c-at_max",
    price: 16,
    category: "burger",
  },
  {
    id: 7,
    title: "burger 7",
    image:
      "https://images.nightcafe.studio/ik-seo/jobs/RVdgtUqJfqsOLCa1eEGU/RVdgtUqJfqsOLCa1eEGU--1--eyxo4/burger.jpg?tr=w-1080,c-at_max",
    price: 16,
    category: "burger",
  },
  {
    id: 8,
    title: "burger 8",
    image:
      "https://images.nightcafe.studio/ik-seo/jobs/X8HTG6hAVzbaaDGNoCxa/X8HTG6hAVzbaaDGNoCxa--1--7m6iv/burger.jpg?tr=w-1080,c-at_max",
    price: 16,
    category: "burger",
  },
  {
    id: 9,
    title: "burger 9",
    image:
      "https://images.nightcafe.studio/ik-seo/jobs/mUOQu1BykTAoO3pmRiZI/mUOQu1BykTAoO3pmRiZI--1--6i4na/burger.jpg?tr=w-1080,c-at_max",
    price: 16,
    category: "burger",
  },
  {
    id: 10,
    title: "burger 10",
    image:
      "https://images.nightcafe.studio/ik-seo/jobs/OgaJig5I8J1uosfzyTD9/OgaJig5I8J1uosfzyTD9--1--1j987/burger.jpg?tr=w-1080,c-at_max",
    price: 16,
    category: "burger",
  },
  {
    id: 11,
    title: "pizza 1",
    image:
      "https://images.nightcafe.studio/ik-seo/jobs/TJhQ7ZfvwXC1LDkUjPPh/TJhQ7ZfvwXC1LDkUjPPh--1--s6nzy/pizza.jpg?tr=w-1080,c-at_max",
    price: 16,
    category: "pizza",
  },
  {
    id: 12,
    title: "pizza 2",
    image:
      "https://images.nightcafe.studio/ik-seo/jobs/NyJKWXYrWW2vd9KPJk3x/NyJKWXYrWW2vd9KPJk3x--1--tgbrz/pizza.jpg?tr=w-1080,c-at_max",
    price: 16,
    category: "pizza",
  },
  {
    id: 13,
    title: "pizza 3",
    image:
      "https://images.nightcafe.studio/ik-seo/jobs/rg2uDeoLwE8uQQVVYN7T/rg2uDeoLwE8uQQVVYN7T--1--aq5ae/pizza.jpg?tr=w-1080,c-at_max",
    price: 16,
    category: "pizza",
  },
  {
    id: 14,
    title: "pizza 4",
    image:
      "https://images.nightcafe.studio/ik-seo/jobs/RVms9UUP9Uf5avZmWgv6/RVms9UUP9Uf5avZmWgv6--1--fris3_2x-clty-upscale-8uvb3/pizza.jpg?tr=w-1600,c-at_max",
    price: 16,
    category: "pizza",
  },
  {
    id: 15,
    title: "pizza 5",
    image:
      "https://images.nightcafe.studio/ik-seo/jobs/ebU755Mu1vBBa1EulXLx/ebU755Mu1vBBa1EulXLx--1--wv1iv/pizza.jpg?tr=w-1080,c-at_max",
    price: 16,
    category: "pizza",
  },
  {
    id: 16,
    title: "pizza 6",
    image:
      "https://images.nightcafe.studio/ik-seo/jobs/FGmNuC4nCobJWfkyZ80H/FGmNuC4nCobJWfkyZ80H--0--qjnb6/pizza.jpg?tr=w-1080,c-at_max",
    price: 16,
    category: "pizza",
  },
  {
    id: 17,
    title: "pizza 7",
    image:
      "https://images.nightcafe.studio/ik-seo/jobs/lzradjMCHXNQjpEH1ByQ/lzradjMCHXNQjpEH1ByQ--0--umd7j/pizza.jpg?tr=w-1080,c-at_max",
    price: 16,
    category: "pizza",
  },
  {
    id: 18,
    title: "pizza 8",
    image:
      "https://images.nightcafe.studio/ik-seo/jobs/d6XxiadEnesYvhlG5ye2/d6XxiadEnesYvhlG5ye2--1--xk0kx/pizza.jpg?tr=w-1600,c-at_max",
    price: 16,
    category: "pizza",
  },
  {
    id: 19,
    title: "pizza 9",
    image:
      "https://images.nightcafe.studio/ik-seo/jobs/2QgLXgCW6aD1Ppatsm4g/2QgLXgCW6aD1Ppatsm4g--0--42dc9_1.5x-clty-upscale-jihey/pizza.jpg?tr=w-1600,c-at_max",
    price: 16,
    category: "pizza",
  },
  {
    id: 20,
    title: "pizza 10",
    image:
      "https://images.nightcafe.studio/ik-seo/jobs/Hi76UuGT6WP90VMJUWMW/Hi76UuGT6WP90VMJUWMW--1--affns/pizza.jpg?tr=w-1080,c-at_max",
    price: 16,
    category: "pizza",
  },
  {
    id: 21,
    title: "coffee 1",
    image:
      "https://images.nightcafe.studio/ik-seo/jobs/bv9ONKm2NPf7gvC9ut0H/bv9ONKm2NPf7gvC9ut0H--1--n69rp/coffee.jpg?tr=w-1080,c-at_max",
    price: 16,
    category: "coffee",
  },
  {
    id: 22,
    title: "coffee 2",
    image:
      "https://images.nightcafe.studio/ik-seo/jobs/1AfrsrWFVxZfiKOFzK0b/1AfrsrWFVxZfiKOFzK0b--1--my4ti_4x/coffee.jpg?tr=w-1600,c-at_max",
    price: 16,
    category: "coffee",
  },
  {
    id: 23,
    title: "coffee 3",
    image:
      "https://images.nightcafe.studio/ik-seo/jobs/1cwtETOr7sRL52pNA4Zb/1cwtETOr7sRL52pNA4Zb--1--tersl/coffee.jpg?tr=w-1080,c-at_max",
    price: 16,
    category: "coffee",
  },
  {
    id: 24,
    title: "coffee 4",
    image:
      "https://images.nightcafe.studio/ik-seo/jobs/uGb0NzNgCNC7r9noq7zd/uGb0NzNgCNC7r9noq7zd--1--iimpn/coffee.jpg?tr=w-1080,c-at_max",
    price: 16,
    category: "coffee",
  },
  {
    id: 25,
    title: "coffee 5",
    image:
      "https://images.nightcafe.studio/ik-seo/jobs/S7Nd3E2TDwPNEbbuZHUA/S7Nd3E2TDwPNEbbuZHUA--1--4u09s/coffee.jpg?tr=w-1080,c-at_max",
    price: 16,
    category: "coffee",
  },
];
