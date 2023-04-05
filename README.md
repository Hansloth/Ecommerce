# Table of Contents
[Requirements](#requirements)

[Technologies Used](#technologies-used)

[How to run this project](#how-to-run-this-project)

[Screenshots](#screenshots)

# Requirements
nodeJS <=v16.15.0

npm <=v8.5.5

MongoDB database

# Technologies Used
### Frontend
    1. NodeJS
    2. ReactJS
    3. React Router
    4. Bootstrap

### Backend
    1. NodeJS
    2. Express
    3. Mongoose
    
### Database
    1. MongoDB Atlas

### Misc. Service
    1. Python (batch service)
    2. Postman for testing RESTful API

# How to run this project

For this project to work you must run both the NodeJS-Backend and React-Frontend

### React-Frontend
1. Open a terminal session

2. Clone this project using **git clone**

3. Navigate to **React-Frontend**

4. Run **npm install**

5. Run **npm start**

### NodeJS-Backend
1. Open a terminal session

2. Navigate to **NodeJS-Backend**

3. Run **npm install**

4. Create a **.env** file in the root of NodeJS-Backend

5. Create a value called **MONGO_URI_CUSTOMER_INFO** and give the link for your users database
  
    1. This database should have an **orders**, **payments**, and **shippings** collection
  
6. Create a value called **MONGO_URI_INVENTORY** and give the link for your inventory database

    1. This database should have an **actualitems** and **items** collection
    
    2. Navigate to **NodeJS-Backend**->**data**->**phoneSpecifications.json** for some example inventory items

7. Run **npm start**

8. Navigate to localhost:3000 after running both frontend and backend to view the site

### Python Batch
1. To run once open a terminal session

2. Navigate to **Batch-Service**

3. pip install dotenv

4. pip install pymongo

5. Copy .env from NodeJS-Backend

6. Run **python3 basic_batch.py

# Screenshots

### Shopping Page
![image](https://user-images.githubusercontent.com/75758107/206875078-df5f7e73-57d7-4bdf-9cf2-aeea926607b9.png)
![image](https://user-images.githubusercontent.com/75758107/206875082-dffd37ef-3bde-41f6-8c34-435beff1892a.png)

### About Page
![image](https://user-images.githubusercontent.com/75758107/206875094-15c2e0e3-c835-4987-9bd8-e8d32bc97377.png)

### Contact Us Page
![image](https://user-images.githubusercontent.com/75758107/206875098-cd57d918-af9f-4857-af29-3c3a795daa14.png)

### Cart Page
![image](https://user-images.githubusercontent.com/75758107/206875117-cdfe69b3-2772-4197-b7ce-082cbe498d27.png)

### Shipping Page
![image](https://user-images.githubusercontent.com/75758107/206875200-b2a7f628-a7d1-474e-9183-3b63b8b36801.png)

### Payment Page
![image](https://user-images.githubusercontent.com/75758107/206875248-bfe8744d-b354-4902-82f3-c9c4e8816cba.png)

### Review Page
![image](https://user-images.githubusercontent.com/75758107/206875265-930fa0bf-33bb-46d8-8a86-6785cfa4358c.png)

### Confirmation Page
![image](https://user-images.githubusercontent.com/75758107/206875273-1f539b4a-39d9-41cf-a3d4-2a9e340325ed.png)
