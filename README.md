# 🎓 Dar Al Rafah - Educational Platform

> A modern, multilingual educational platform for technology and AI studies, built with React, TypeScript, and Express.js.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## 🌟 Features

### ✅ **Completed Features**

#### **🌍 Internationalization**

- **3 Languages**: Arabic (RTL), English (LTR), French (LTR)
- **Complete Translations**: All pages fully translated
- **Language Switching**: Smooth transitions with proper RTL/LTR handling
- **Font Management**: Arabic fonts (Tajawal/Cairo) vs Latin fonts (Inter)
- **Layout Stability**: Navigation and UI elements don't flip when switching languages

#### **🎨 Modern UI/UX**

- **shadcn/ui Components**: Professional, accessible components
- **Responsive Design**: Mobile-first approach with perfect breakpoints
- **Light/Dark Mode**: Smooth theme transitions
- **Creative Navigation**: Header with icons, dropdowns, and mobile menu
- **Professional Color Scheme**: Blue palette with proper contrast
- **Bootstrap Icons**: Consistent iconography throughout

#### **📱 Pages & Content**

- **Home Page**: Hero section with blue backdrop, latest content showcase
- **Courses Page**: Grid layout with filtering and search
- **News Page**: Article layout with category filtering
- **Research Page**: Academic paper display with topic filtering
- **About Page**: Mission, vision, values, and statistics
- **Contact Page**: Contact form with information and FAQ

#### **🔧 Technical Stack**

- **Frontend**: React 18 + TypeScript + Vite + Tailwind CSS
- **Backend**: Express.js + Node.js
- **Styling**: Tailwind CSS + shadcn/ui
- **Icons**: Bootstrap Icons
- **State Management**: React Hooks
- **Routing**: React Router v6
- **Internationalization**: react-i18next

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/dar-al-rafah.git
cd dar-al-rafah
```

2. **Install dependencies**

```bash
# Install root dependencies
npm install

# Install backend dependencies
cd apps/backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. **Environment Setup**

```bash
# Backend environment
cp apps/backend/env.example apps/backend/.env
# Edit apps/backend/.env with your configuration

# Frontend environment
cp apps/frontend/env.example apps/frontend/.env
# Edit apps/frontend/.env with your configuration
```

4. **Run the development servers**

```bash
# Terminal 1 - Backend (Port 4000)
cd apps/backend
npm run dev

# Terminal 2 - Frontend (Port 5173)
cd apps/frontend
npm run dev
```

5. **Access the application**

- Frontend: http://localhost:5173
- Backend API: http://localhost:4000/api

## 📁 Project Structure

```
dar-al-rafah/
├── apps/
│   ├── backend/                 # Express.js API server
│   │   ├── src/
│   │   │   ├── collections/     # Payload CMS collections
│   │   │   ├── server.ts        # Main server file
│   │   │   └── seed.ts          # Database seeding
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── frontend/                 # React frontend
│       ├── src/
│       │   ├── components/      # Reusable components
│       │   ├── pages/           # Page components
│       │   ├── hooks/           # Custom React hooks
│       │   ├── locales/         # Translation files
│       │   ├── services/        # API services
│       │   └── types/            # TypeScript types
│       ├── public/
│       ├── package.json
│       └── vite.config.ts
│
├── package.json                 # Root package.json
└── README.md
```

## 🌍 Internationalization

The platform supports three languages with proper RTL/LTR handling:

### **Arabic (RTL)**

- Font: Tajawal, Cairo
- Direction: Right-to-left
- Default language

### **English (LTR)**

- Font: Inter
- Direction: Left-to-right

### **French (LTR)**

- Font: Inter
- Direction: Left-to-right

### **Translation Files**

- `apps/frontend/src/locales/ar.json` - Arabic translations
- `apps/frontend/src/locales/en.json` - English translations
- `apps/frontend/src/locales/fr.json` - French translations

## 🎨 Design System

### **Color Palette**

- **Primary**: Blue (#3B82F6)
- **Secondary**: Gray tones
- **Accent**: Complementary colors
- **Success**: Green
- **Warning**: Yellow
- **Error**: Red

### **Typography**

- **Arabic**: Tajawal, Cairo (Google Fonts)
- **Latin**: Inter (Google Fonts)
- **Monospace**: JetBrains Mono

### **Components**

- Built with shadcn/ui
- Fully accessible (WCAG 2.1)
- Responsive design
- Dark/Light mode support

## 📊 Current Content

### **Mock Data Included**

- **5 Courses**: AI, Cybersecurity, App Development, Big Data, VR
- **4 News Articles**: Platform launch, AI news, cybersecurity updates
- **4 Research Papers**: Academic papers with authors and abstracts
- **6 Topics**: AI, Machine Learning, Cybersecurity, Big Data, VR, App Development

### **Content Features**

- High-quality Unsplash images
- Proper categorization
- Search and filtering
- Responsive layouts

## 🔮 Future Roadmap

### **Phase 1: Backend Realization (2-3 weeks)**

- [ ] **Real Database Integration**
  - PostgreSQL setup
  - Payload CMS integration
  - Data migration from mock to real
- [ ] **Authentication System**
  - User registration/login
  - JWT token management
  - Protected routes

### **Phase 2: Core Features (3-4 weeks)**

- [ ] **User Dashboard**
  - Personal profile management
  - Course enrollment system
  - Learning progress tracking
- [ ] **Content Management**
  - Admin panel setup
  - Content creation tools
  - Media management system

### **Phase 3: Advanced Features (4-6 weeks)**

- [ ] **Interactive Learning**
  - Video integration (YouTube/Vimeo)
  - Quizzes and assessments
  - Progress analytics
- [ ] **Community Features**
  - Discussion forums
  - User profiles
  - Social interactions

### **Phase 4: Business Features (6-8 weeks)**

- [ ] **E-commerce Integration**
  - Payment processing (Stripe/PayPal)
  - Course marketplace
  - Subscription models
- [ ] **Analytics & Reporting**
  - User analytics
  - Content performance metrics
  - Business intelligence

### **Phase 5: Innovation (8+ weeks)**

- [ ] **AI-Powered Features**
  - Personalized learning paths
  - Automated content generation
  - Smart search with AI
  - Predictive analytics
- [ ] **Advanced Learning Tools**
  - Virtual Reality experiences
  - Voice recognition (Arabic)
  - Progressive Web App
  - Offline learning capabilities

## 🛠️ Development

### **Scripts**

```bash
# Root level
npm run install:all    # Install all dependencies
npm run dev:all        # Run both frontend and backend

# Backend
cd apps/backend
npm run dev           # Start development server
npm run build         # Build for production

# Frontend
cd apps/frontend
npm run dev           # Start development server
npm run build         # Build for production
npm run preview       # Preview production build
```

### **Code Quality**

- **TypeScript**: Full type safety
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Git Hooks**: Pre-commit checks

### **Testing**

- Unit tests (planned)
- Integration tests (planned)
- E2E tests (planned)

## 🚀 Deployment

### **Development**

- Local development with hot reload
- Mock API for frontend development
- Environment-based configuration

### **Production (Planned)**

- Docker containerization
- CI/CD pipelines
- Cloud deployment (AWS/Azure/GCP)
- Database backups
- Monitoring & logging

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### **Development Guidelines**

- Follow TypeScript best practices
- Use conventional commit messages
- Write tests for new features
- Update documentation

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Frontend Development**: React, TypeScript, Tailwind CSS
- **Backend Development**: Express.js, Node.js
- **UI/UX Design**: shadcn/ui, Bootstrap Icons
- **Internationalization**: react-i18next

## 📞 Contact

- **Email**: info@daralrafah.com
- **Phone**: +961 70 123 456
- **Address**: Beirut, Lebanon - Hamra District

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - Frontend framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Bootstrap Icons](https://icons.getbootstrap.com/) - Icon library
- [Unsplash](https://unsplash.com/) - High-quality images

---

**Built with ❤️ for the Arabic-speaking tech community**
