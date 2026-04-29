**Laundry Order Mannagement System**
*Overview*
  This is a simple web-based system to manage laundry orders for a dry cleaning store.
It allows users to create orders, track their status, calculate billing, and view basic dashboard insights.


*Features*
1. Create Order
 a. Add customer name and phone number
 b. Add multiple garments (type, quantity, price)
 c. Auto-calculates total bill
 d. Generates unique Order ID

2. Oder Status Management:
  a. Track order through stages:
    1. RECEIVED
    2. PROCESSING
    3. READY
    4. DELIVERED
  b. Update status dynamically

3. View Orders:
  a. View all orders in a table
  b. Filter by:
    1. Status
    2. Phone number
        
4. Dashboard:
  a. Total number of orders
  b. Total revenue
  c. Orders grouped by status


*Tech Stack*
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express
Storage: In-memory (no database)


*Setup Instructions*

  a. Open terminal in project folder:
      cd laundry-system

  b. Install dependencies:
      npm install

  c. Run server:
      node server.js

  d. Open browser:
      http://localhost:3000
      

*AI Usage Report*

Tools Used:
  ChatGPT (for backend, frontend, debugging)
  
How AI Helped:
  a. Generated initial Express server structure
  b. Created API routes and controllers
  c. Built frontend UI (HTML, CSS, JS)
  d. Helped debug errors (module not found, PowerShell issues)
  
Issues with AI:
  a. Incorrect file naming (orderControllers.js vs orderController.js)
  b. Missing validation logic
  c. UI dropdown not syncing with status
  d. Display issues (name & phone not showing)

Improvements Made:
  a. Fixed file structure issues
  b. Added correct data binding
  c. Fixed dropdown selection logic
  d. Improved dashboard display formatting
  

*Trade-offs*
  a. Used in-memory storage instead of database (for speed)
  b. Basic UI (no advanced styling)
  c. No authentication implemented


*Future Improvements*
  a. Add database (MongoDB / MySQL)
  b. Implement authentication (login system)
  c. Improve UI with React
  d. Add search by garment type
  e. Deploy application online
  
*Demo*

<img width="943" height="897" alt="image" src="https://github.com/user-attachments/assets/7c60e2f7-ab50-41a2-8dc1-bf21b1332468" />


*Project Structure*
laundry-system/
│
├── src/
├── public/
├── server.js
├── package.json
└── README.md


*Author*
Doly Yadav
