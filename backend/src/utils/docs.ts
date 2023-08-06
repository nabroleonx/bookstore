export default {
  swagger: '2.0',
  info: {
    version: '1.0.0',
    title: 'Bookstore API',
    description: 'API documentation for a simple bookstore application',
  },
  host: 'localhost:5000',
  basePath: '/api',
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],

  paths: {
    '/book': {
      get: {
        summary: 'Get all books',
        description: 'Returns a list of all books',
        responses: {
          200: {
            description: 'Successful operation',
            schema: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/Book',
              },
            },
          },
          500: {
            description: 'Server error',
          },
        },
      },
      post: {
        summary: 'Create a new book',
        description: 'Creates a new book',
        parameters: [
          {
            in: 'body',
            name: 'book',
            description: 'The book object to create',
            required: true,
            schema: {
              $ref: '#/components/schemas/BookInput',
            },
          },
        ],
        responses: {
          201: {
            description: 'Book created successfully',
            schema: {
              $ref: '#/components/schemas/Book',
            },
          },
          400: {
            description: 'Validation error',
            schema: {
              $ref: '#/components/schemas/ValidationError',
            },
          },
          500: {
            description: 'Server error',
          },
        },
      },
    },
    '/books/{id}': {
      put: {
        summary: 'Update a book',
        description: 'Updates an existing book',
        parameters: [
          {
            in: 'path',
            name: 'id',
            description: 'The ID of the book to update',
            required: true,
            type: 'integer',
            format: 'int64',
          },
          {
            in: 'body',
            name: 'book',
            description: 'The updated book object',
            required: true,
            schema: {
              $ref: '#/components/schemas/BookInput',
            },
          },
        ],
        responses: {
          200: {
            description: 'Book updated successfully',
            schema: {
              $ref: '#/components/schemas/Book',
            },
          },
          400: {
            description: 'Validation error',
            schema: {
              $ref: '#/components/schemas/ValidationError',
            },
          },
          404: {
            description: 'Book not found',
          },
          500: {
            description: 'Server error',
          },
        },
      },
      delete: {
        summary: 'Delete a book',
        description: 'Deletes an existing book',
        parameters: [
          {
            in: 'path',
            name: 'id',
            description: 'The ID of the book to delete',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          204: {
            description: 'Book deleted successfully',
          },
          404: {
            description: 'Book not found',
          },
          500: {
            description: 'Server error',
          },
        },
      },
    },
    '/books/count': {
      get: {
        summary: 'Get total number of books',
        description: 'Returns the total number of books',
        responses: {
          200: {
            description: 'Successful operation',
            schema: {
              type: 'object',
              properties: {
                count: {
                  type: 'integer',
                  format: 'int32',
                  description: 'Total number of books',
                },
              },
            },
          },
          500: {
            description: 'Server error',
          },
        },
      },
    },
  },

  components: {
    schemas: {
      Book: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            format: 'int64',
            description: 'The book ID',
          },
          title: {
            type: 'string',
            description: 'The book title',
          },
          description: {
            type: 'string',
            description: 'The book description',
          },
          discountRate: {
            type: 'number',
            format: 'float',
            description: 'The book discount rate',
          },
          coverImage: {
            type: 'string',
            description: 'The URL of the book cover image',
          },
          price: {
            type: 'number',
            format: 'float',
            description: 'The book price',
          },
        },
      },
      BookInput: {
        type: 'object',
        properties: {
          title: {
            type: 'string',
            description: 'The book title',
          },
          description: {
            type: 'string',
            description: 'The book description',
          },
          discountRate: {
            type: 'number',
            format: 'float',
            description: 'The book discount rate',
          },
          coverImage: {
            type: 'string',
            description: 'The URL of the book cover image',
          },
          price: {
            type: 'number',
            format: 'float',
            description: 'The book price',
          },
        },
      },
      ValidationError: {
        type: 'object',
        properties: {
          errors: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                value: {
                  type: 'string',
                },
                msg: {
                  type: 'string',
                },
                param: {
                  type: 'string',
                },
                location: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
    },
  },
};
