# Skyline Residency Website

A modern, responsive real estate website for Skyline Residency - the first-ever LDA-approved housing society in Kot Radha Kishan, Pakistan. Built with Next.js, TypeScript, and Tailwind CSS.

## 🏡 About Skyline Residency

Skyline Residency is a premium housing society offering:
- **LDA Approved**: First-ever LDA-approved housing society in Kot Radha Kishan
- **Prime Location**: Located on Changa Manga Road, District Kasur
- **Various Plot Sizes**: 4 Marla to 10 Marla plots available
- **Modern Amenities**: Parks, community center, mosque, and commercial areas

## 🚀 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with custom color palette
- **Multi-page Structure**: Home, About, Pricing, Gallery, and Contact pages
- **Interactive Elements**: Gallery lightbox, contact forms, and navigation
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance Optimized**: Fast loading with optimized images and code

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Netlify](https://netlify.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd skyline-residency
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

\`\`\`bash
npm run build
npm run start
\`\`\`

## 📄 Pages Overview

### 🏠 Home Page (`/`)
- Hero section with entrance image
- Introduction to Skyline Residency
- Key features and benefits
- Gallery preview
- Call-to-action sections

### ℹ️ About Page (`/about`)
- Company vision and mission
- LDA approval details
- Location advantages
- Development phases

### 💰 Pricing Page (`/pricing`)
- Plot sizes and pricing table
- Premium plot options
- Payment plans
- Special offers

### 🖼️ Gallery Page (`/gallery`)
- Visual showcase of the project
- Interactive lightbox
- Different categories of images

### 📞 Contact Page (`/contact`)
- Contact form
- Office information
- WhatsApp and email integration
- Google Maps integration
- Office hours

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid layouts
- Touch-friendly navigation

### Performance Optimizations
- Next.js Image component for optimized images
- Lazy loading for better performance
- Minimal JavaScript bundle
- CSS-in-JS with Tailwind

### SEO Features
- Semantic HTML structure
- Meta tags and descriptions
- Open Graph tags
- Structured data ready

## 🔧 Customization

### Adding New Pages
1. Create a new folder in `app/`
2. Add a `page.tsx` file
3. Update navigation in `components/navbar.tsx`

### Modifying Colors
Update the color palette in `tailwind.config.ts`:

\`\`\`typescript
theme: {
  extend: {
    colors: {
      // Add your custom colors here
    }
  }
}

## 📱 Contact Information

- **Location**: Changa Manga Road, Kot Radha Kishan, District Kasur, Pakistan-55180
- **Phone**: +92 347 8448101
- **Email**: atharateeq01@gmail.com
- **Website**: http://melodic-alfajores-3b3cf7.netlify.app/

## 🚀 Deployment

### Netlify (Currently Deployed) ✅
The website is currently deployed on Netlify. To deploy your own version:

1. **Connect to Netlify**
   \`\`\`bash
   # Install Netlify CLI
   npm install -g netlify-cli
   
   # Login to Netlify
   netlify login
   
   # Deploy from your project directory
   netlify deploy
   
   # For production deployment
   netlify deploy --prod
   \`\`\`

#### DigitalOcean App Platform
1. Connect your GitHub repository
2. Configure build settings:
   - Build Command: `npm run build`
   - Run Command: `npm start`
3. Deploy

#### Manual Static Export (for any static hosting)
\`\`\`bash
# Add to next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

# Build and export
npm run build
\`\`\`

## 📝 License

This project is licensed under the MIT License - By Athar Ateeq & Sajawal Khan

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Lucide](https://lucide.dev/) for the icon library
- [Netlify](https://netlify.com/) for reliable hosting and deployment

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Email: atharateeq01@gmail.com

## 🔗 Live Demo

- **Live Website**: http://melodic-alfajores-3b3cf7.netlify.app/

---

**Built with ❤️ for Skyline Residency | Deployed on Netlify**
