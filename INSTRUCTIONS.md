# AIVA Web Application - Setup Instructions

Complete step-by-step guide to set up and run the AIVA web application.

## 📋 Prerequisites

### **System Requirements**
- **Node.js 18+** - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager
- **Modern web browser** (Chrome, Firefox, Safari, Edge)
- **Git** for version control

### **Backend Requirements**
- AIVA backend API running (see [server setup](../server/README.md))
- Azure services configured (SQL Database, OpenAI, etc.)

## 🚀 Installation Steps

### **Step 1: Navigate to Web App Directory**
```bash
cd web-app
```

### **Step 2: Install Dependencies**
```bash
npm install
```

### **Step 3: Environment Configuration**
```bash
# Copy the example environment file
cp .env.example .env
```

Edit the `.env` file with your configuration:
```env
# API Configuration
VITE_API_BASE_URL=http://localhost:3000/api

# OAuth Configuration (Optional)
VITE_GOOGLE_CLIENT_ID=your-google-client-id
VITE_MICROSOFT_CLIENT_ID=your-microsoft-client-id
VITE_YAHOO_CLIENT_ID=your-yahoo-client-id
```

### **Step 4: Start Development Server**
```bash
npm run dev
```

The web application will be available at: **http://localhost:5173**

## 🎯 First Time Setup

### **1. Access the Application**
Open your web browser and navigate to `http://localhost:5173`

### **2. Create Account or Sign In**
- **Option A**: Create account with email/password
- **Option B**: Sign in with Google/Microsoft OAuth (if configured)

### **3. Explore Features**
- **Chat Interface**: Start a conversation with AI
- **Data Insights**: Query enterprise data (if Fabric is configured)
- **Workspaces**: Organize your chats
- **File Management**: Upload and manage files

## 🔧 Development

### **Available Scripts**
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### **Project Structure**
```
web-app/
├── src/
│   ├── components/     # React components
│   │   ├── HomePage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── Dashboard.tsx
│   │   └── DataQueryPanel.tsx
│   ├── utils/          # Utility functions
│   ├── App.tsx         # Main app component
│   └── main.tsx        # Entry point
├── public/             # Static assets
├── index.html          # HTML template
└── package.json        # Dependencies
```

### **Key Components**

#### **HomePage.tsx**
- Landing page with feature showcase
- Call-to-action buttons
- Feature highlights

#### **LoginPage.tsx**
- Authentication interface
- OAuth provider buttons
- Form validation

#### **Dashboard.tsx**
- Main application interface
- Chat sidebar and message area
- Real-time AI responses

#### **DataQueryPanel.tsx**
- Enterprise data query interface
- Database connection management
- Natural language to SQL/DAX conversion
- Data visualization

## 🎨 Customization

### **Styling**
The app uses **Tailwind CSS** for styling:
- Modify `tailwind.config.js` for theme customization
- Update `src/index.css` for global styles
- Component-specific styles use Tailwind classes

### **Themes**
- Light and dark themes supported
- Automatic system theme detection
- Manual theme switching available

### **Branding**
- Update logo in `public/` directory
- Modify colors in Tailwind configuration
- Update app title in `index.html`

## 🔌 API Integration

### **Backend Communication**
The web app communicates with the backend API:
- **Base URL**: Configured in `VITE_API_BASE_URL`
- **Authentication**: JWT tokens stored in localStorage
- **Error Handling**: Automatic retry and user feedback

### **Key API Endpoints Used**
- `POST /api/auth/login` - User authentication
- `GET /api/chat` - Fetch user chats
- `POST /api/chat/message` - Send messages
- `POST /api/data/question` - Data queries
- `GET /api/data/datasets` - Available datasets

## 🧪 Testing

### **Manual Testing Checklist**
- [ ] User registration and login
- [ ] OAuth authentication (if configured)
- [ ] Chat creation and messaging
- [ ] AI response generation
- [ ] File upload and download
- [ ] Data query functionality
- [ ] Workspace management
- [ ] Search functionality
- [ ] Responsive design on different screen sizes

### **Browser Testing**
Test on multiple browsers:
- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🚀 Production Build

### **Build for Production**
```bash
npm run build
```

### **Preview Production Build**
```bash
npm run preview
```

### **Deployment Options**
- **Netlify**: Drag and drop `dist/` folder
- **Vercel**: Connect GitHub repository
- **Azure Static Web Apps**: Use Azure CLI
- **AWS S3 + CloudFront**: Upload to S3 bucket

## 🔍 Troubleshooting

### **Common Issues**

#### **API Connection Failed**
```
Error: Failed to fetch
```
**Solutions:**
- Verify backend is running on port 3000
- Check `VITE_API_BASE_URL` in `.env`
- Ensure CORS is configured in backend

#### **OAuth Not Working**
```
Error: OAuth configuration missing
```
**Solutions:**
- Verify OAuth client IDs in `.env`
- Check redirect URIs in OAuth providers
- Ensure popup blockers are disabled

#### **Build Errors**
```
Error: Module not found
```
**Solutions:**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Check for TypeScript errors

#### **Slow Performance**
**Solutions:**
- Check browser developer tools for errors
- Verify network requests are completing
- Clear browser cache and localStorage

### **Debug Mode**
Enable debug logging by adding to `.env`:
```env
VITE_DEBUG=true
```

## 📊 Performance Optimization

### **Bundle Analysis**
```bash
npm run build -- --analyze
```

### **Optimization Tips**
- Images are optimized automatically by Vite
- Code splitting happens automatically
- Use lazy loading for heavy components
- Minimize bundle size with tree shaking

## 🔐 Security Considerations

### **Environment Variables**
- Never commit `.env` files to version control
- Use different configurations for development/production
- Rotate API keys regularly

### **Authentication**
- JWT tokens are stored in localStorage
- Automatic token refresh implemented
- Secure HTTP-only cookies recommended for production

## 📱 Mobile Responsiveness

The web app is fully responsive:
- **Mobile First**: Designed for mobile screens
- **Breakpoints**: Tailwind's responsive utilities
- **Touch Friendly**: Large touch targets
- **PWA Ready**: Can be installed as web app

## 🤝 Contributing

### **Development Workflow**
1. Create feature branch
2. Make changes with proper testing
3. Run linting: `npm run lint`
4. Build successfully: `npm run build`
5. Submit pull request

### **Code Style**
- Use TypeScript for type safety
- Follow React best practices
- Use Tailwind for consistent styling
- Add comments for complex logic

## 📚 Additional Resources

- **[React Documentation](https://react.dev/)**
- **[Vite Documentation](https://vitejs.dev/)**
- **[Tailwind CSS](https://tailwindcss.com/)**
- **[TypeScript Handbook](https://www.typescriptlang.org/docs/)**

---

**🎉 Congratulations!** Your AIVA web application is now ready for development and production use.

For mobile app setup, see **[Mobile App Instructions](../mobile-app/INSTRUCTIONS.md)**