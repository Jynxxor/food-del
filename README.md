# 🍔 Online Food Ordering Website

A full-stack online food ordering platform with separate user-facing frontend, admin dashboard, and backend server. Built with MERN stack, includes features like user login, menu browsing, cart, payment integration, and admin controls.

---

## 🌐 Live Preview

[👉🏻 Visit the Live Site](https://food-del-frontend-8f4t.onrender.com)

---

## 🚀 Features

### 👤 User Experience (`/frontend`)
- Register and log in securely (JWT-based authentication)
- Browse and search food menu with images and categories
- Add/remove items to/from cart
- Checkout with integrated Stripe payment gateway
- View order history and order status

### 🛠️ Admin Dashboard (`/admin`)
- Secure admin authentication
- Add, update, or delete food items
- Manage menu categories
- View and manage all customer orders
- Update order status (e.g. Food Processing, Out for delivery, Delivered)


### ⚙️ Backend API (`/backend`)
- RESTful API built with Node.js & Express
- MongoDB database integration via Mongoose
- Handles authentication, cart, payment, and order logic
- Role-based access for users and admins
- Environment-based configuration

---

## 📁 Folder Structure

```
/admin     → Admin Panel React App  
/backend   → Express Backend API
/frontend  → User React App  
txt.txt    → Lists installed packages
```

---

## ⚙️ Environment Setup

**For `/backend/.env`:**

```env
MONGODB_URL = https://www.mongodb.com/atlas/database
JWT_SECRET = yourSuperSecretJWTkey@9231
STRIPE_SECRET_KEY = https://dashboard.stripe.com/test/dashboard
```

---

## 🧰 Tech Stack

<p align="left"> 
  <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" alt="react" title="ReactJS" width="40" height="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="Redux" width="40" height="40"/> 
  <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" alt="nodejs" title="Node.js" width="40" height="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" width="40" height="40"/> 
  <img src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" alt="MongoDB" width="40" height="40"/> 
  <img src="https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg" alt="javascript" title="JavaScript" width="40" height="40"/>
  <img src="https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg" alt="Stripe" width="40" height="40"/> 
  <img src="https://github.com/user-attachments/assets/4e34154e-4150-4ec0-b24b-4646b341e606" alt="JWT" width="40" height="40"/> 
</p>

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Jynxxor/food-del.git
cd food-del
```

### 2. Install Dependencies

Install for each part:

```bash
cd backend
npm install

cd frontend
npm install

cd admin
npm install
```

### 3. Add `.env` Files

Refer to the [Environment Setup](#️-environment-setup) section above for required variables.

### 4. Start the Apps

In **separate terminals**:

```bash
# Start backend (http://localhost:4000)
cd backend
npm run server

# Start frontend app (http://localhost:5173)
cd frontend
npm run dev

# Start admin app (http://localhost:5174)
cd admin
npm run dev
```

---

## 🖼️ Project Screenshots

##### Food Ordering
![HomePage](https://github.com/user-attachments/assets/886eaa46-7a84-4ffb-808e-5b2beff0919a)
![Categories&Menu](https://github.com/user-attachments/assets/1b20b84a-5594-4d2b-93e1-41b38e447a42)
![Login](https://github.com/user-attachments/assets/f4a5f994-fd6d-4f59-8b54-2616ff40275b)
![Cart&Checkout](https://github.com/user-attachments/assets/58545970-7cc3-4673-a585-a05e5f52ac37)
![Payment](https://github.com/user-attachments/assets/8a9cd033-37d8-4e42-aa8e-8c8bcc74f6e4)
![MyOrders](https://github.com/user-attachments/assets/0f29cbe3-f5bc-4ec6-80c8-2429b01e8071)

##### Admin
![addItem](https://github.com/user-attachments/assets/47df17e8-80aa-43d2-9cec-e41785f8cede)
![itemsList](https://github.com/user-attachments/assets/ad25f606-2fc4-4d7a-afbb-60304f56666f)
![orders](https://github.com/user-attachments/assets/5ab7434b-c5f4-4dc8-be73-8a4164947d60)

---

## ✨ Future Enhancements

* Real-time order updates via WebSockets
* Email confirmations
* Coupons and discounts
* Admin analytics & reports
