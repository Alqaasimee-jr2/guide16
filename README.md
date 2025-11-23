# Guide16 - OAU Campus Companion 📚

Your lightweight campus companion for navigating Obafemi Awolowo University (OAU) with ease. Built by students, for students.

## 🎯 What is Guide16?

Guide16 is a Progressive Web App (PWA) that helps OAU students navigate university tasks and locations seamlessly. Get step-by-step guides for registration, induction, clearance, find campus buildings instantly, and access helpful FAQs — all without logins, ads, or data collection.

## ✨ Features

- **📋 Task Guides**: Step-by-step instructions for registration, induction, clearance, ID card collection, and more
- **📍 Campus Locations**: Easy access to key buildings and offices with Google Maps integration
- **❓ FAQs**: Quick answers to common student questions
- **📴 Offline Mode**: Works completely offline once loaded
- **📱 Installable**: Add to home screen and use like a native app
- **🎨 Dark Mode**: Easy on the eyes with automatic theme switching
- **🔍 Smart Search**: Find tasks, locations, and FAQs instantly
- **♿ Accessible**: WCAG compliant with screen reader support
- **🚀 Fast**: Optimized performance and instant loading

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or Bun
- Git

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd guide16

# Install dependencies
bun install
# or
npm install

# Run development server
bun dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 PWA Features

Guide16 is a full-featured Progressive Web App:

- ✅ **Offline Support**: All pages work without internet
- ✅ **Installable**: Add to home screen on any device
- ✅ **Auto-Updates**: Background updates with notifications
- ✅ **App Shortcuts**: Quick access to Tasks, Locations, FAQs
- ✅ **Smart Caching**: Network-first with cache fallback
- ✅ **Native Feel**: Runs in standalone mode

👉 **See [PWA_FEATURES.md](./PWA_FEATURES.md) for complete documentation**

## 🏗️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **PWA**: Custom Service Worker with advanced caching
- **Runtime**: Bun (Node.js compatible)

## 📁 Project Structure

```
guide16/
├── src/
│   ├── app/                 # Next.js pages (App Router)
│   │   ├── page.tsx        # Homepage
│   │   ├── tasks/          # Task guides page
│   │   ├── landmarks/      # Campus locations page
│   │   ├── faqs/           # FAQs page
│   │   ├── about/          # About page
│   │   └── offline/        # Offline fallback page
│   ├── components/         # React components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── Navigation.tsx  # Main navigation
│   │   ├── GlobalSearch.tsx # Search component
│   │   ├── AppShell.tsx    # PWA components wrapper
│   │   ├── OfflineIndicator.tsx
│   │   ├── UpdateNotification.tsx
│   │   └── PWAInstallPrompt.tsx
│   └── hooks/              # Custom React hooks
│       └── usePWA.ts       # PWA status detection
├── public/
│   ├── manifest.json       # PWA manifest
│   ├── sw.js              # Service worker
│   ├── icon-192.png       # App icons
│   └── icon-512.png
└── PWA_FEATURES.md        # PWA documentation

```

## 🎨 Design System

Guide16 uses a custom OAU-themed design system:

- **Primary Color**: Green (#4ade80) - OAU brand color
- **Typography**: System fonts for optimal performance
- **Spacing**: Consistent 4px grid system
- **Components**: Accessible, mobile-first design
- **Dark Mode**: Automatic theme switching

## 🌐 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, search, category cards |
| Tasks | `/tasks` | Step-by-step guides for university processes |
| Landmarks | `/landmarks` | Campus buildings with Google Maps links |
| FAQs | `/faqs` | Common questions and answers |
| About | `/about` | Project info and credits |
| Offline | `/offline` | Fallback for uncached pages |

## 🔧 Development

### Available Scripts

```bash
# Development server
bun dev

# Production build
bun run build

# Start production server
bun start

# Lint code
bun run lint

# Type check
bun run type-check
```

### Service Worker Development

The service worker (`public/sw.js`) handles offline functionality:

```javascript
// Update cache version to force refresh
const STATIC_CACHE = 'guide16-static-v3';

// Add new routes to pre-cache
const CORE_ASSETS = [
  '/',
  '/tasks',
  '/landmarks',
  // Add new routes here
];
```

### Adding New Pages

1. Create page in `src/app/[route]/page.tsx`
2. Add route to `CORE_ASSETS` in `sw.js`
3. Add to sitemap in `src/app/sitemap.ts`
4. Update navigation if needed

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **PWA Ready**: ✅ All PWA criteria met
- **Offline Capable**: ✅ Full offline support
- **Installable**: ✅ Add to home screen
- **Fast Load**: < 1s initial load
- **SEO Optimized**: Meta tags, sitemap, robots.txt

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Manual Deployment

```bash
# Build for production
bun run build

# Output will be in .next folder
# Deploy to any hosting that supports Node.js
```

### Environment Setup

No environment variables needed! Guide16 is purely client-side.

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Guidelines

- Follow existing code style
- Write descriptive commit messages
- Update documentation as needed
- Test on mobile and desktop
- Ensure offline functionality works

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Credits

Built with ❤️ by students of Obafemi Awolowo University.

### Special Thanks

- OAU Student Community
- Next.js & Vercel Team
- shadcn/ui Contributors
- Open Source Community

## 📞 Support

Having issues or questions?

- 📖 Check [PWA_FEATURES.md](./PWA_FEATURES.md)
- 🐛 Open an issue on GitHub
- 💬 Contact the development team

## 🗺️ Roadmap

- [x] Core pages (Tasks, Locations, FAQs)
- [x] PWA implementation with offline support
- [x] Search functionality
- [x] Dark mode
- [ ] Push notifications for important updates
- [ ] User-contributed content
- [ ] Multiple language support
- [ ] Campus event calendar
- [ ] Interactive campus map

---

**Made for OAU students, by OAU students** 🎓