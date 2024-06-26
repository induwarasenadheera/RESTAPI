# Product API

This API allows you to manage products. It supports basic CRUD operations (Create, Read, Update, Delete) for products.

## Installation

1. Clone the repository: `git clone https://github.com/induwarasenadheera/RESTAPI.git`
2. Install dependencies: `npm install`

## Usage

1. Start the server: `npm start`
2. Access the API at: `http://localhost:5000`

## API Endpoints

### Get all products
GET /products

### Get a single product
GET /products/:id

### Get all products by name
GET /products/name/:name

### Create a new product
POST /products
{
"name": "Product name",
"price": 10.99,
"quantity": 100
}

### Update a product
PUT /products/:id
{
"name": "New product name",
"price": 12.99,
"quantity": 150
}

### Delete a product
DELETE /products/:id

## Docker

You can also run this API using Docker.

1. Build the Docker image: `docker-compose build`
2. Run the Docker container: `docker-compose up -d`
3. Stop the Docker container: `docker-compose down`