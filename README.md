# Vasundhara Public School, Punjapura (Dewas)

Official modern web application for **Vasundhara Public School**, located in Punjapura, Tehsil Bagli, District Dewas (M.P.) - 455227.

- **UDISE Code**: `23230413310`
- **Institution Type**: Co-Educational Secondary School (Pre-Nursery to Class X)
- **Classrooms**: 28 Modern & Spacious Classrooms
- **Faculty**: 24+ Experienced Educators
- **Student Strength**: 670+ Enrolled Students
- **Campus Transport**: 3 Dedicated School Buses
- **Official Ratings**: 4.3★ (19 Verified Reviews on Justdial)

---

## 🚀 Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler / Dev Server**: Vite 8
- **Styling**: Vanilla CSS (Responsive Flexbox/Grid, Custom CSS Variables, Glassmorphism, Micro-interactions)
- **Icons**: Lucide React + Custom SVG Brand Icons
- **Deployment Ready**: Vercel (`vercel.json`), Netlify, or GitHub Pages

---

## 🛠️ Getting Started Locally

```bash
# Install dependencies
npm install

# Run Vite dev server
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Deploy to Vercel

### Option 1: Automatic Deployment via Git & Vercel Dashboard (Recommended)
1. Push this repository to your GitHub account:
   ```bash
   git remote add origin https://github.com/akki120781/vasundhara-public-school.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset will automatically detect **Vite** with build command `npm run build` and output directory `dist`.
5. Click **"Deploy"**.

### Option 2: Deploy from Terminal via Vercel CLI
```bash
npx vercel
```
Follow the interactive prompts to log in and deploy within seconds.

---

## 🏫 Architecture & Key Features

- **Responsive TopBar & Middle-Right Fixed Admission Tab**: Seamless, non-intrusive admission inquiry access.
- **Left Slide-Out Navigation Drawer**: Smooth off-canvas navigation featuring all academic wings, mandatory public disclosures, facilities, and contact details.
- **Campus Hero Banner**: Real facade photography of Vasundhara Public School Punjapura campus.
- **Connected Flush Highlights**: 4 connected cards showcasing Calendar, Events, News, and Notifications.
- **Interactive Modals**:
  - Admission Enquiry Form (with class selection from Pre-Nursery to Class X and transport requirements)
  - Timed Announcement Poster Modal with authentic campus highlights
  - Global Search Modal with real-time filtering across school wings and services
  - High-res Lightbox for Campus Gallery & Social Milestones
