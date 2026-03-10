# EE-Portfolio_Website
This portfolio site of mine was made to showcase the skills I learned along the way from previous projects and what I'm willing and able to learn now. The design of the site was inspired by Slobodan Gajic.
# 🛠️ Tech Stack
Core: React 19, Vite, React Router 7

Animations: GSAP (GreenSock), @gsap/react, Animate.css, react-spinners

Styling: Sass (SCSS), react-icons

SEO & Meta: React Helmet Async, Vite Sitemap Plugin

Contact: EmailJS

# 💻 Local Setup
1) Clone the repository:
git clone https://github.com/EAE00-src/EE-Portfolio_Website.git

2) Install dependencies:
npm install

3) Environment Variables:
In order for the contact form to work you'll need your own EmailJS credentials which requires account creation.
Once an account is created, email service is linked, and an email template is made...

Create a .env file in the root directory and add your EmailJS credentials:
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

Regardless of EmailJS usage or configuration, to run the development server simply use:
npm run dev
