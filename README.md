# Krit Website

A modern Next.js website for Krit, featuring a clean design with custom typography and smooth animations.

## 🚀 Tech Stack

- **Next.js** 15.5.4 (with Turbopack)
- **React** 19.1.0
- **Tailwind CSS** 4
- **Bootstrap Icons** 1.13.1

## 📄 Pages

### Main Pages (Navbar)

- **Home** (`/`) - Landing page featuring hero section with mascot, project showcase, carousel, and FAQ
- **Us** (`/us`) - About the company/team
- **Works** (`/works`) - Portfolio/work showcase
- **Initiatives** (`/initiatives`) - Company initiatives and programs
- **Stories** (`/stories`) - Blog or case studies
- **Goods** (`/goods`) - Products or merchandise
- **Team** (`/team`) - Team member profiles

### Additional Pages (Footer)

- **Company** (`/company`) - Company information and mission
- **Services** (`/services`) - Services offered
- **Journal** (`/journal`) - Thoughts, insights, and updates
- **SME Initiative** (`/sme-initiative`) - Small and medium enterprise support program
- **Kriatolks** (`/kriatolks`) - Community discussions about design and creativity
- **Let's Talk** (`/lets-talk`) - Contact and project inquiry page
- **Career** (`/career`) - Job opportunities and careers at Krit

### Project Pages

- **Project Gallery** (`/project`) - Project overview page
- **The Playlist** (`/project/The_Playlist`) - Individual project showcase

## 🎨 Design Features

- Custom fonts: Blender, Montserrat, and Reenie Beanie
- Responsive navigation with hamburger menu
- Full-screen menu overlay with smooth transitions
- Custom mascot illustrations
- Grain texture background effects

## 🚦 Getting Started

### Prerequisites

- Node.js (recommended: latest LTS version)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

The development server will start at [http://localhost:3000](http://localhost:3000).

## 📂 Project Structure

```
krit-website/
├── public/              # Static assets
│   ├── fonts/          # Custom font files
│   ├── SVG/            # SVG graphics
│   └── *.svg, *.jpg    # Images and icons
├── src/
│   ├── app/            # Next.js app directory
│   │   ├── globals.css # Global styles
│   │   ├── layout.js   # Root layout
│   │   ├── page.js     # Home page
│   │   ├── us/         # About Us page
│   │   ├── works/      # Works portfolio page
│   │   ├── initiatives/ # Initiatives page
│   │   ├── stories/    # Stories page
│   │   ├── goods/      # Goods/Products page
│   │   ├── team/       # Team page
│   │   ├── company/    # Company page
│   │   ├── services/   # Services page
│   │   ├── journal/    # Journal page
│   │   ├── sme-initiative/ # SME Initiative page
│   │   ├── kriatolks/  # Kriatolks page
│   │   ├── lets-talk/  # Contact page
│   │   ├── career/     # Career page
│   │   └── project/    # Project pages
│   │       ├── page.js # Project gallery
│   │       └── The_Playlist/ # Individual project
│   ├── assets/         # Additional assets
│   └── components/     # React components
│       ├── layout/     # Layout components (Navbar, Footer)
│       ├── sections/   # Page sections (Carousel, FAQ, HomeProject)
│       └── ui/         # UI components (ButtonRound)
└── package.json
```

## 🎯 Component Overview

### Layout Components
- **Navbar** - Responsive navigation with full-screen menu overlay
- **Footer** - Site footer

### Section Components
- **Carousel** - Image/content carousel
- **FAQ** - Frequently asked questions section
- **HomeProject** - Featured project showcase on homepage

### UI Components
- **ButtonRound** - Reusable rounded button component

## 🎨 Custom Fonts

The project uses three custom font families:
- **Blender** (Bold, Book)
- **Montserrat** (Regular, SemiBold, Bold)
- **Reenie Beanie** (Regular)

## 📱 Responsive Design

The website is fully responsive with breakpoints optimized for:
- Mobile devices
- Tablets
- Desktop screens (up to 2xl: 1536px max-width)

## 🔧 Configuration Files

- `next.config.mjs` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.mjs` - PostCSS configuration
- `eslint.config.mjs` - ESLint configuration
- `jsconfig.json` - JavaScript configuration with path aliases

## 📝 License

Private project.

---

Built with ❤️ by the Krit team
