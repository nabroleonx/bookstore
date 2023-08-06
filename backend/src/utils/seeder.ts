import Book from '../entities/book.entity';
import { sequelize } from '../config/db';

import { BookCreationAttributes } from '../types/book';
import { faker } from '@faker-js/faker';

const books: BookCreationAttributes[] = [];

for (let i = 0; i < 100; i++) {
  books.push({
    title: faker.lorem.words(3),
    description: faker.lorem.words(10),
    discountRate: faker.number.int({ min: 0, max: 99 }),
    coverImage: faker.image.url(),
    price: faker.number.int({ min: 0, max: 1000 }),
  });
}

const seed = async () => {
  try {
    await sequelize.sync();

    await Book.bulkCreate(books);

    console.log('Dummy data inserted successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seed();
