# AIVA Web Application

A comprehensive React web application for the AIVA (Alyasra Intelligent Virtual Assistant) platform, featuring AI-powered conversations with Microsoft Fabric Data Agent integration.

## 🏗️ Architecture

### **Built with:**
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Lucide React** for icons

### **Key Features:**

## 🧠 **Microsoft Fabric Integration**
- **Natural Language Queries**: Ask business questions in plain English
- **Data Visualization**: Interactive charts and graphs
- **Real-time Insights**: Live data from your enterprise systems
- **Query Intelligence**: Smart query type detection (SQL vs DAX)
- **Performance Optimization**: Cached results and optimized queries

## 💬 **Advanced Chat System**
- **AI-Powered Conversations**: Azure OpenAI integration
- **Rich Message Types**: Text, images, files, data results
- **Message Actions**: Like, bookmark, share messages
- **Chat History**: Persistent conversation storage
- **Search Functionality**: Global and chat-specific search

## 🔐 **Security & Authentication**
- **Multi-Provider OAuth**: Google, Microsoft, Yahoo authentication
- **Secure Session Management**: JWT-based authentication
- **Data Protection**: Secure API communication

## 📊 **Data Management**
- **Database Connections**: Connect to multiple database types
- **Workspace Organization**: Organize chats by projects
- **File Management**: Upload, download, and share files
- **Search Capabilities**: Advanced search across all content

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js 18+
- npm or yarn

### **Installation**

1. **Navigate to web app directory**
   ```bash
   cd web-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with your configuration:
   ```env
   VITE_API_BASE_URL=http://localhost:3000/api
   VITE_GOOGLE_CLIENT_ID=your-google-client-id
   VITE_MICROSOFT_CLIENT_ID=your-microsoft-client-id
   VITE_YAHOO_CLIENT_ID=your-yahoo-client-id
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```

5. **Build for Production**
   ```bash
   npm run build
   ```

## 🎨 **UI/UX Features**

### **Design System**
- **Responsive Design**: Works on all screen sizes
- **Dark/Light Themes**: Automatic theme detection
- **Smooth Animations**: Custom CSS animations
- **Micro-interactions**: Hover states and transitions
- **Accessibility**: WCAG compliant design

### **Components**
- **HomePage**: Landing page with feature showcase
- **LoginPage**: Authentication with OAuth options
- **SignUpPage**: User registration
- **Dashboard**: Main application interface
- **DataQueryPanel**: Enterprise data exploration
- **WorkspacesPage**: Project organization

## 🔧 **Development**

### **Project Structure**
```
web-app/
├── src/
│   ├── components/          # React components
│   ├── utils/              # Utility functions
│   └── index.css           # Global styles
├── public/                 # Static assets
├── index.html             # HTML template
├── vite.config.ts         # Vite configuration
└── package.json           # Dependencies
```

### **Available Scripts**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 **Deployment**

### **Static Hosting**
The web app builds to static files and can be deployed to:
- **Netlify**
- **Vercel**
- **Azure Static Web Apps**
- **AWS S3 + CloudFront**
- **GitHub Pages**

### **Build Configuration**
```bash
# Build for production
npm run build

# Preview build locally
npm run preview
```

## 🔧 **Configuration**

### **Environment Variables**
- `VITE_API_BASE_URL`: Backend API URL
- `VITE_GOOGLE_CLIENT_ID`: Google OAuth client ID
- `VITE_MICROSOFT_CLIENT_ID`: Microsoft OAuth client ID
- `VITE_YAHOO_CLIENT_ID`: Yahoo OAuth client ID

### **Vite Configuration**
- Optimized for React development
- Fast HMR (Hot Module Replacement)
- Optimized production builds

## 🧪 **Testing**

### **Development Testing**
```bash
# Run in development mode
npm run dev
```

### **Production Testing**
```bash
# Build and preview
npm run build
npm run preview
```

## 📊 **Performance**

### **Optimization Features**
- **Code Splitting**: Automatic route-based splitting
- **Tree Shaking**: Removes unused code
- **Asset Optimization**: Optimized images and fonts
- **Lazy Loading**: Components loaded on demand

### **Bundle Analysis**
```bash
# Analyze bundle size
npm run build -- --analyze
```

## 🔍 **Troubleshooting**

### **Common Issues**

#### **API Connection Issues**
- Verify `VITE_API_BASE_URL` is correct
- Ensure backend server is running
- Check CORS configuration

#### **OAuth Issues**
- Verify OAuth client IDs are correct
- Check redirect URIs in OAuth providers
- Ensure popup blockers are disabled

#### **Build Issues**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch
3. Make changes with proper testing
4. Submit a pull request
5. Follow React and TypeScript best practices

## 📄 **License**

This project is licensed under the MIT License.

---

**AIVA Web App** - Empowering web-based productivity with AI-driven insights and enterprise data integration.