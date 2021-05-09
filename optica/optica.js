print("STARTING SCRIPT");

conn = new Mongo("localhost");

db = conn.getDB("cul-dampolla");

db.dropDatabase();


db.createCollection("customers");
db.createCollection("employees");
db.createCollection("glasses");
db.createCollection("orders");
db.createCollection("suppliers");



print("***********creating customers*********");


customer1 = {
    "_id": 0,
    "name": "Marcel Molina",
    "address": {
        "street": "c/ gjm",
        "number": "363",
        "floor": "1",
        "door": "1",
        "city": "Madrid",
        "zip": "28011",
        "country": "España"
    },
    "phone": "666333222",
    "email": "maparcepel@gmail.com",
    "registration_date": new Date("2021-05-02T22:00:00.000Z"),
    "recommended_by": 1
};


customer2 = {
    "_id": 1,
    "name": "María Pérez",
    "address": {
        "street": "c/ hert",
        "number": "33",
        "floor": "2",
        "door": "3",
        "city": "Madrid",
        "zip": "28033",
        "country": "España"
    },
    "phone": "698741256",
    "email": "maria@gmail.com",
    "registration_date": new Date("2020-06-06T22:00:00.000Z"),
    "recommended_by": null
};


print("***********creating employees*********");

employee1 = {
    "_id": 0,
    "name": "Javier Martín"
};

employee2 = {
    "_id": 1,
    "name": "Susana García"
};


print("***********creating glasses*********");

glasses1 = {
    "_id": 0,
    "brand": "Moon",
    "graduation_L": "1.50",
    "graduation_R": "1.75",
    "frame": "pasta",
    "frame_colour": "verde",
    "colour_L": "rojo",
    "colour_R": "rojo",
    "price": "70.90",
    "supplier_id": "1"
};

glasses2 = {
    "_id": 1,
    "brand": "S.U.N.",
    "graduation_L": "1.00",
    "graduation_R": "1.05",
    "frame": "pasta",
    "frame_colour": "azul",
    "colour_L": "verde",
    "colour_R": "verde",
    "price": "80.90",
    "supplier_id": "1"
};

glasses3 = {
    "_id": 2,
    "brand": "Buenavista",
    "graduation_L": "2.00",
    "graduation_R": "2.50",
    "frame": "flotante",
    "frame_colour": "amarillo",
    "colour_L": "marrón",
    "colour_R": "marrón",
    "price": "90.90",
    "supplier_id": "0"
};


print("***********creating orders*********");

order1 = {
    "_id": 0,
    "glasses_id": 0,
    "customer_id": 1,
    "employee_id": 1
};

order2 = {
    "_id": 1,
    "glasses_id": 1,
    "customer_id": 0,
    "employee_id": 0
};


print("***********creating suppliers*********");

supplier1 = {
    "_id": 0,
    "name": "Optimax",
    "address": {
        "street": "c/ sdfg",
        "number": "33",
        "floor": "B",
        "door": "",
        "city": "Madrid",
        "zip": "28017",
        "country": "España"
    },
    "phone": "695874523",
    "fax": "963258741",
    "nif": "78945612Ñ"
};

supplier2 = {
    "_id": 1,
    "name": "Multiopti",
    "address": {
        "street": "c/ fjh",
        "number": "77",
        "floor": "2",
        "door": "2",
        "city": "Barcelona",
        "zip": "08001",
        "country": "España"
    },
    "phone": "669988774",
    "fax": "936852741",
    "nif": "12345678P"
};

print("***********saving customers*********");
db.customers.save(customer1);
db.customers.save(customer2);

print("***********saving employees*********");
db.employees.save(employee1);
db.employees.save(employee2);

print("***********saving glasses*********");
db.glasses.save(glasses1);
db.glasses.save(glasses2);
db.glasses.save(glasses3);

print("***********saving orders*********");
db.orders.save(order1);
db.orders.save(order2);

print("***********saving suppliers*********");
db.suppliers.save(supplier1);
db.suppliers.save(supplier2);

print("SCRIPT FINISHED");