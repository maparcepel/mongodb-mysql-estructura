print("STARTING SCRIPT");

conn = new Mongo("localhost");

db = conn.getDB("pizzeria");

db.dropDatabase();


db.createCollection("categories");
db.createCollection("cities");
db.createCollection("customers");
db.createCollection("employees");
db.createCollection("orders");
db.createCollection("products");
db.createCollection("provinces");
db.createCollection("stores");



print("***********creating categories*********");

category1 = {
    "category_id": 0,
    "name": "masa fina"
};


category2 = {
    "category_id": 1,
    "name": "masa gruesa"
};


print("***********creating cities*********");

city1 = {
    "city_id": 0,
    "name": "Sant Martí",
    "province_id": 0
};

city2 = {
    "city_id": 1,
    "name": "Barcelona",
    "province_id": 0
};

city3 = {
    "city_id": 2,
    "name": "Vilanova",
    "province_id": 0
};


print("***********creating customers*********");

customer1 = {
    "customer_id": 0,
    "name": "Marcel",
    "surnames": "Molina Soto",
    "address": "c/ lklkjhj 55",
    "zip": "08731",
    "city_id": 0,
    "phone": "698745213"
};

customer2 = {
    "customer_id": 1,
    "name": "Juan",
    "surnames": "Pérez Martín",
    "address": "c/ dghtr 33",
    "zip": "08001",
    "city_id": 1,
    "phone": "933258741"
};

customer3 = {
    "customer_id": 2,
    "name": "Marc",
    "surnames": "Gómez Sants",
    "address": "c/ tyuky 5",
    "zip": "08800",
    "city_id": 2,
    "phone": "932145698"
};


print("***********creating employees*********");

employee1 = {
    "employee_id": 0,
    "name": "Pedro",
    "surnames": "García Zamora",
    "nif": "45678932I",
    "phone": "963258745",
    "rol": "repartidor",
    "store_id": 0
};

employee2 = {
    "employee_id": 1,
    "name": "María",
    "surnames": "Báez Santos",
    "nif": "96325874P",
    "phone": "963258745",
    "rol": "cuiner",
    "store_id": 0
};

employee3 = {
    "employee_id": 2,
    "name": "Jorge",
    "surnames": "Medina Car",
    "nif": "36985214O",
    "phone": "632598741",
    "rol": "cuiner",
    "store_id": 1
};

employee4 = {
    "employee_id": 3,
    "name": "Juan",
    "surnames": "Toss Mans",
    "nif": "36985214L",
    "phone": "698541236",
    "rol": "repartidor",
    "store_id": 2
};


print("***********creating orders*********");

order1 = {
    "order_id": 0,
    "date_time": new Date("2016-05-18T16:00:00Z"),
    "order_type": "delivery",
    "items": [{
        "product_id": 0,
        "quantity": 1
    }, {
        "product_id": 3,
        "quantity": 1
    }],
    "total_price": {
        "$numberDecimal": "15.90"
    },
    "store_id": 0,
    "delivery_employee_id": 0,
    "delivery_date_time ": new Date("2016-05-18T17:00:00Z"),
    "customer_id": 0
};

order2 = {
    "order_id": 1,
    "date_time": new Date("2016-06-22T12:00:00Z"),
    "order_type": "delivery",
    "items": [{
        "product_id": 2,
        "quantity": 1
    }, {
        "product_id": 4,
        "quantity": 1
    }],
    "total_price": {
        "$numberDecimal": "13.00"
    },
    "store_id": 2,
    "delivery_employee_id": 3,
    "delivery_date_time ": new Date("2016-06-22T12:30:00Z"),
    "customer_id": 2
};



print("***********creating products*********");

product1 = {
    "product_id": 0,
    "name": "pizza hawaiana",
    "description": "extra de piña",
    "image": "kljahsdkjf.jpg",
    "price": {
        "$numberDecimal": "12.00"
    },
    "category_id": 0
};

product2 = {
    "product_id": 1,
    "name": "pizza diavola",
    "description": "extra picante",
    "image": "ytjrtyj.jpg",
    "price": {
        "$numberDecimal": "12.00"
    },
    "category_id": 1
};

product3 = {
    "product_id": 2,
    "name": "hamburguesa gigante",
    "description": "extra de todo",
    "image": "rkuk.jpg",
    "price": {
        "$numberDecimal": "10.00"
    },
    "category_id": null
};

product4 = {
    "product_id": 3,
    "name": "cerveza  gigante",
    "description": "5 litros",
    "image": "tiylt.jpg",
    "price": {
        "$numberDecimal": "3.90"
    },
    "category_id": null
};

product5 = {
    "product_id": 4,
    "name": "cocacola familiar",
    "description": "2 litros",
    "image": "tyuky.jpg",
    "price": {
        "$numberDecimal": "3.00"
    },
    "category_id": null
};


print("***********creating provinces*********");

province1 = {
    "province_id": 0,
    "name": "Barcelona"
};

province2 = {
    "province_id": 1,
    "name": "Tarragona"
};


print("***********creating stores*********");

store1 = {
    "store_id": 0,
    "address": "c/ Sants 22",
    "zip": "08731",
    "city_id": 0
};

store2 = {
    "store_id": 1,
    "address": "c/ Urgell 55",
    "zip": "08011",
    "city_id": 1
};

store3 = {
    "store_id": 2,
    "address": "c/ Pallars 88",
    "zip": "08019",
    "city_id": 1
};

store4 = {
    "store_id": 3,
    "address": "c/ Catalunya 112",
    "zip": "08800",
    "city_id": 2
};


print("***********saving categories*********");
db.categories.save(category1);
db.categories.save(category2);

print("***********saving cities*********");
db.cities.save(city1);
db.cities.save(city2);
db.cities.save(city3);

print("***********saving customers*********");
db.customers.save(customer1);
db.customers.save(customer2);
db.customers.save(customer3);

print("***********saving employees*********");
db.employees.save(employee1);
db.employees.save(employee2);
db.employees.save(employee3);
db.employees.save(employee4);

print("***********saving orders*********");
db.orders.save(order1);
db.orders.save(order2);

print("***********saving products*********");
db.products.save(product1);
db.products.save(product2);
db.products.save(product3);
db.products.save(product4);
db.products.save(product5);

print("***********saving provinces*********");
db.provinces.save(province1);
db.provinces.save(province2);

print("***********saving stores*********");
db.stores.save(store1);
db.stores.save(store2);

print("SCRIPT FINISHED");