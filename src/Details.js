
// Profile Image
import profile from "./assets/profile1.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import java from "./assets/techstack/java.png";
import mongodb from "./assets/techstack/mongodb.png";
import nodejs from "./assets/techstack/nodejs.png";
import sql from "./assets/techstack/sql.png";
import python from "./assets/techstack/python.png";
import express from "./assets/techstack/express.png";
// Porject Images
import snaplinker from "./assets/projects/snaplinker.jpg";
import codesphere from "./assets/projects/codesphere.png";
import portfolio from "./assets/projects/portfolio.png";
import leetcode from "./assets/projects/leetcode.png";
import letsblog from "./assets/projects/let's_Blog.png";

// Logos
// export const logos = {
//   logogradient: logogradient,
//   logo: logo,
// };

// Personal Details
export const personalDetails = {
  name: "Rajeeb Bhowmick",
  tagline: "I am a Software Engineer",
  img: profile,
  about: `I am a passionate software engineer with over 2 years of experience in full-stack development, dedicated to building innovative and scalable solutions. With a keen eye for detail and a commitment to continuous learning, I thrive in collaborative environments and excel at tackling complex technical challenges.`,
};
// Social Media URLs
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/rajeebbhowmick/",
  github: "https://github.com/rajeeb12",
  twitter: "https://twitter.com/rajeeb",
  instagram: "https://www.instagram.com/",
};

// Work Experience
export const workDetails = [
  {
    Position: "System Engineer",
    Company: `Tata Consultancy Services`,
    Location: "Bengaluru",
    Type: "Full Time",
    Duration: "Oct 2021 - Current",
  },
];

// Education Details 
export const eduDetails = [
  {
    Position: "Bachelor of Technology in Computer Science And Engineering",
    Company: `University Of Engineering And Management`,
    Location: "Kolkata",
    Type: "Full Time",
    Duration: "May 2016 - April 2016",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  java: java,
  mongodb: mongodb,
  nodejs: nodejs,
  sql: sql,
  python: python,
  express:express,
};

// Project Details
export const projectDetails = [
  {
    title: "SnapLinker",
    image: snaplinker,
    description: `Generate beautiful AI QR Codes and short URLs in seconds with our cutting-edge platform. Using React and Express.js, we ensure a smooth, responsive experience. Integrated with Replicate for AI-driven QR Code generation and deployed on Vercel, our solution is fast and reliable. MongoDB provides robust URL storage and management. Enjoy the convenience of creating stunning AI QR Codes and short URLs with ease.`,
    techstack: "ReactJs, Express, Replicate, Tailwind, MongoDb, Vercel",
    previewLink: "https://frontend-snaplinker.vercel.app/",
    githubLink: "https://github.com/rajeeb12/frontend-snaplinker",
  },
  {
    title: "CodeSphere.io",
    image: codesphere,
    description: `Online code and markdown editor build with react.js. Online
                Editor which supports html, css, and js code with instant view
                of website. Online markdown editor for building README file
                which supports GFM, Custom Html tags with toolbar and instant
                preview.Both the editor supports auto save of work using Local
                Storage.And deployed on Vercel.`,
    techstack: "ReactJs, Bootstrap, Vercel, CodeMirror",
    previewLink: "https://code-sphere-io.vercel.app/",
    githubLink: "https://github.com/rajeeb12/CodeSphere.io",
  },
  {
    title: "Portfolio",
    image: portfolio,
    description: `I crafted a sleek and modern portfolio website using ReactJs and deployed on Vercel. This combination allowed for a responsive and dynamic user interface, showcasing projects and skills effectively. The site features smooth animations and a clean design, enhancing user experience and engagement.`,
    techstack: "ReactJs, Tailwind, Vercel",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Let's Blog",
    image: letsblog,
    description: `I developed a blog website using the MERN stack, incorporating MongoDB, Express.js, React, and Node.js for a seamless full-stack experience. With secure JWT authentication, users can safely register and log in. The dynamic interface and secure backend provide an engaging and reliable platform for content sharing.`,
    techstack: "ReactJs,Tailwind, MongoDb, Node.js, JWT",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  
  {
    title: "Leetcode Solutions",
    image: leetcode,
    description: `I upload my LeetCode solutions to GitHub to share my problem-solving approaches and coding skills. Each solution is well-documented, showcasing various algorithms and data structures. This repository serves as a valuable resource for others and highlights my commitment to continuous learning`,
    techstack: "Java",
    previewLink: "https://github.com/rajeeb12/Leetcode-solution",
    githubLink: "https://github.com/rajeeb12/Leetcode-solution",
  },
];

// Contact Details here
export const contactDetails = {
  email: "rajeeb1206@gmail.com",
  phone: "+91 747885 9699",
};
