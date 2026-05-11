# BTTuan02_CNPhanMemMoi

Ứng dụng Fullstack với Express.js và React.js

## 🏗️ Cấu trúc dự án

```
├── BACKEND_EXPRESSJS/     # API Backend (Node.js + Express)
└── FRONTEND_REACTJS/      # Frontend (React + Vite)
    └── reactjs01/
```

## 📋 Yêu cầu

- Node.js (v16+)
- npm hoặc yarn

## 🚀 Cài đặt và chạy

### Backend

```bash
cd BACKEND_EXPRESSJS
npm install
npm run dev
```

Server chạy tại: `http://localhost:5000` (hoặc port được cấu hình)

### Frontend

```bash
cd FRONTEND_REACTJS/reactjs01
npm install
npm run dev
```

App chạy tại: `http://localhost:5173`

## 🛠️ Công nghệ sử dụng

### Backend

- Express.js 5.2
- MongoDB (Mongoose 9.6)
- JWT (jsonwebtoken)
- Bcrypt (mã hóa mật khẩu)
- CORS

### Frontend

- React 19
- Vite
- ESLint

## 📁 Cấu trúc Backend

```
src/
├── server.js              # Entry point
├── config/               # Cấu hình database, view engine
├── controllers/          # Logic xử lý
├── middleware/           # Middleware
├── models/              # MongoDB schemas
├── routes/              # API routes
├── services/            # Business logic
└── views/               # EJS templates
```

## 📁 Cấu trúc Frontend

```
src/
├── pages/               # Trang (home, login, register, user)
├── components/          # Reusable components
├── context/            # React context (auth)
├── util/               # API calls, axios setup
├── styles/             # CSS toàn cục
└── assets/             # Hình ảnh, icon
```

## 👤 Tác giả

**Trình Văn Lưu**

## 📝 License

ISC
