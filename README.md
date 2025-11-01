# Personal Portfolio Website

This is the source code for my personal portfolio website, designed to showcase my skills, projects, and professional experience. It is built using modern web technologies to be fast, responsive, and visually engaging.

## ✨ Key Features

* **Responsive Design**: Fully responsive layout that looks great on all devices, from mobile phones to desktop monitors.
* **Project Showcase**: A dedicated section to display my projects with descriptions, technologies used, and links to the live demo and source code.
* **Skills & Experience**: Sections detailing my technical skills, work experience, and education history in an easy-to-read format.
* **Certifications**: A gallery to display my professional certifications and achievements.
* **GitHub Integration**: Displays my GitHub contribution calendar and repository statistics dynamically.
* **Smooth Animations**: Utilizes Framer Motion for subtle and smooth page transitions and component animations.
* **Backend Integration**: Uses Supabase for managing and serving content like project details and certificate images.

## 🛠️ Technologies Used

This project is built with a modern tech stack:

* **Framework**: [Next.js](https://nextjs.org/) (using App Router)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **UI Library**: [React](https://reactjs.org/)
* **Animation**: [Framer Motion](https://www.framer.com/motion/)
* **Backend & Database**: [Supabase](https://supabase.com/)
* **Deployment**: [Vercel](https://vercel.com/)
* **Analytics**: Vercel Analytics & Speed Insights
* **Components**:
    * [React GitHub Calendar](https://github.com/grubersjo/react-github-calendar)
    * [React Icons](https://react-icons.github.io/react-icons/)
 
## 📂 Project Structure

```
.
├── app/
│   ├── components/
│   │   ├── AboutMe.tsx               # Component for the 'About Me' section (homepage)
│   │   ├── ActivityAndProjects.tsx   # Component displaying GitHub activity and projects (homepage)
│   │   ├── AnimatedCounter.tsx       # Component for an animated number counter
│   │   ├── AnimatedTimelineItem.tsx  # Component for an animated item in a timeline (used in work/education)
│   │   ├── CertificateCard.tsx       # Component for displaying a single certificate
│   │   ├── EducationHistory.tsx      # Component for the 'Education History' section
│   │   ├── Footer.tsx                # Site-wide Footer component
│   │   ├── GithubActivityCalendar.tsx # Component to display the GitHub contribution calendar
│   │   ├── Hero.tsx                  # Hero/Welcome section component (homepage)
│   │   ├── MainContent.tsx           # Main content wrapper for layout
│   │   ├── Navbar.tsx                # Site-wide Navigation Bar component
│   │   ├── Portfolio.tsx             # Main portfolio/projects section component (homepage)
│   │   ├── ProjectCard.tsx           # Component for displaying a single project card
│   │   ├── RightGutter.tsx           # Right-side gutter/column component (server)
│   │   ├── RightGutterClient.tsx     # Client-side logic for the right gutter
│   │   ├── Services.tsx              # Component for the 'Services' section (homepage)
│   │   ├── Sidebar.tsx               # Main Sidebar navigation component
│   │   ├── SidebarNavItem.tsx        # Component for a single item in the Sidebar
│   │   ├── SkillIcon.tsx             # Component to display a single technology/skill icon
│   │   ├── Skills.tsx                # Component for the 'Skills' section (homepage)
│   │   ├── StatCard.tsx              # Component for displaying a single statistic (e.g., GitHub stats)
│   │   └── WorkExperience.tsx        # Component for the 'Work Experience' section
│   │
│   ├── aboutme/
│   │   └── page.tsx                  # Page route for /aboutme
│   ├── certificate/
│   │   └── page.tsx                  # Page route for /certificate
│   ├── projects/
│   │   ├── ProjectList.tsx           # Client component to list all projects
│   │   └── page.tsx                  # Page route for /projects
│   ├── statics/
│   │   └── page.tsx                  # Page route for /statics (GitHub stats)
│   │
│   ├── favicon.ico                   # Application favicon
│   ├── globals.css                 # Global CSS styles (Tailwind base/utils)
│   ├── layout.tsx                  # Root layout for the Next.js application
│   └── page.tsx                    # Main entry point/homepage (/)
│
├── lib/
│   ├── github.ts                     # Utility functions for fetching data from GitHub API
│   └── supabaseClient.ts           # Supabase client configuration and initialization
│
├── public/
│   ├── assets/
│   │   ├── fonts/                    # Font files (Gabarito)
│   │   ├── icons/                    # General application icons (social media, UI icons)
│   │   │   └── iconSkills/           # Specific icons for technologies (React, Next.js, etc.)
│   │   └── images/                   # Static images (profile picture, etc.)
│   │
│   ├── file.svg                      # Static SVG asset
│   ├── globe.svg                     # Static SVG asset
│   ├── next.svg                      # Static SVG asset
│   ├── vercel.svg                    # Static SVG asset
│   └── window.svg                    # Static SVG asset
│
├── types/
│   └── index.ts                      # TypeScript type definitions (e.g., for Project, Certificate)
│
├── .gitignore                        # Git ignore file
├── eslint.config.mjs                 # ESLint configuration
├── next.config.ts                    # Next.js configuration file
├── package.json                      # Project dependencies and scripts
├── postcss.config.mjs                # PostCSS configuration (for Tailwind CSS)
├── README.md                         # Project README file
└── tsconfig.json                     # TypeScript configuration
```
