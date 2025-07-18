# 🍔 Online Food Ordering Website

A full-stack online food ordering platform with separate user-facing frontend, admin dashboard, and backend server. Built with MERN stack, includes features like user login, menu browsing, cart, payment integration, and admin controls.

---

## 🌐 Live Preview

[👉 Visit the Live Site](https://food-del-frontend-8f4t.onrender.com)

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

| Layer    | Tech                       |
| -------- | -------------------------- |
| Frontend | ReactJS, Redux             |
| Backend  | Node.js, Express, Mongoose |
| Database | MongoDB (Atlas)            |
| Payments | Stripe API                 |
| Auth     | JWT (JsonWebToken)         |

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
![HomePage](./images/homePage.png)
![Categories&Menu](./images/cat&menu.png)
![Login](./images/login.png)
![Cart&Checkout](./images/cartCheckout.png)
![Payment](./images/payment.png)
![MyOrders](./images/myorders.png)

##### Admin
![addItem](./images/addItems.png)
![itemsList](./images/items.png)
![orders](./images/orders.png)

---

## ✨ Future Enhancements

* Real-time order updates via WebSockets
* Email confirmations
* Coupons and discounts
* Admin analytics & reports
