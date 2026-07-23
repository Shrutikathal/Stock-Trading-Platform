# 📈 TradePulse — Full-Stack Equity & Portfolio Analytics Platform

TradePulse is a full-stack financial technology platform engineered for stock portfolio tracking, equity position monitoring, and order management. Built using the modern MERN stack (MongoDB, Express.js, React.js, Node.js), it features a responsive analytics dashboard powered by Chart.js and a modular RESTful backend architecture.

---

## 🌟 Features Implemented

* **Holdings Dashboard:** Fetches stock holding records from MongoDB via REST API (`/allHoldings`) and displays instruments, quantities, average costs, LTP (Last Traded Price), current values, and live P&L status.
* **Positions Overview:** Displays day trading positions with real-time profit and loss status using dynamic styling (`profit` / `loss`).
* **Visual Data Analytics:** Integrates **Chart.js** (`VerticalGraph`) to dynamically plot stock prices and financial distribution directly from database records.
* **Order Management System:** Provides an interface for stock order placement and posts new orders asynchronously to persistent MongoDB storage (`/newOrder`).
* **Portfolio Metrics Summary:** Calculates and renders total portfolio investments, current valuations, and overall profit/loss metrics.
* **Modular React Navigation:** Built with modular UI components to switch seamlessly between Holdings, Positions, Orders, and Analytics views.

---

## 🛠 Tech Stack

| Domain | Technologies Used |
| :--- | :--- |
| **Frontend** | React.js, HTML5, CSS3, Axios, Chart.js, Bootstrap |
| **Backend** | Node.js, Express.js, CORS, Body-Parser |
| **Database** | MongoDB, Mongoose ODM |
| **Tools & Environment**| Git, GitHub, VS Code |

---

## ⚙️ System Architecture & Data Flow
