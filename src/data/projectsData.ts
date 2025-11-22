export interface Project {
  id: number;
  title: string;
  description: string;
  image: string; // Path to the image file
  githubLink: string; // GitHub repository link
  linkedinLink: string; // LinkedIn post link
  technologies: string[]; // Technologies used
  visitLink?: string; // Optional visit link for the project
}

export const projects: Project[] = [
  {
    id: 1,
    title: "HotDrop",
    description:
      "A real-time and efficient web platform where users can place pickup orders in advance, and shopkeepers receive instant notifications to prepare items before arrival. Includes partner dashboards for item management, secure authentication, and order tracking to reduce wait time and improve customer satisfaction.",
    image: "/images/hotdrop.png",
    githubLink: "https://github.com/SHASHI9705/HotDrop",
    linkedinLink: "https://www.linkedin.com/posts/shashiranjan-singh9_nextjs-aws-webapp-activity-7379843481130778624-D4CC?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFXiSDUBMRX_NEvjsKl4GEvCMLDb8TxRyho",
    technologies: ["AWS S3", "MERN", "AWS EC2", "Next.js"],
    visitLink: "https://www.hotdrop.tech/",
  },
  {
    id: 2,
    title: "SleekRoad",
    description:
      "A convenient campus marketplace platform where students can buy and sell products locally, saving time and money inside the university. Supports quick listings, communication, interactions, and fast meet, making trading simpler and reliable for both buyers and sellers in the campus community.",
    image: "/images/sleek.png",
    githubLink: "https://github.com/SHASHI9705/sleekroad",
    linkedinLink: "https://www.linkedin.com/feed/update/urn:li:activity:7295448706152103939/",
    technologies: ["MERN", "AWS S3", "AWS EC2", "Next.js"],
    visitLink: "https://sleekroad-sleek-fe.vercel.app/",
  },
  {
    id: 3,
    title: "Lovely Skins",
    description:
      "An AI-powered web platform that allows users to analyze skin conditions from uploaded photos and receive personalized tips. Provides real-time suggestions, precautions, and dermatologist recommendations, helping users manage skin health effectively with an intuitive, secure, and user-friendly interface.",
    image: "/images/skincare.png",
    githubLink: "https://github.com/SHASHI9705/SkinCare",
    linkedinLink: "https://www.linkedin.com/feed/update/urn:li:activity:7295448706152103939/",
    technologies: ["Node.js", "Express", "MongoDB", "EJS"],
    visitLink: "https://github.com/SHASHI9705/SkinCare",
  },
  {
    id: 4,
    title: "AWSphere",
    description:
      "A cloud-focused blogging platform where users can create accounts, write AWS-related blogs, comment on posts, and manage their content seamlessly. Designed to foster a collaborative community for sharing AWS knowledge, practical insights, and best practices while encouraging learning and engagement among cloud enthusiasts.",
    image: "/images/awsphere.png",
    githubLink: "https://github.com/SHASHI9705/Blogit",
    linkedinLink: "https://www.linkedin.com/feed/update/urn:li:activity:7315308063702355969/",
    technologies: ["MongoDB", "Node.js", "JavaScript", "EJS"],
    visitLink: "https://github.com/SHASHI9705/Blogit",
  },
  
  {
  id: 5,
    title: "AWSphere Architecture",
    description:
      "AWSphere demonstrates a fully managed 3-tier AWS deployment architecture. Users can create accounts, post blogs, upload images, comment on posts, and manage profiles securely. Built on scalable, highly available, and secure AWS services with no third-party dependencies, ensuring robust performance and reliability.",
    image: "/images/cloudproj1.png",
    githubLink: "https://github.com/SHASHI9705/AWSphere-Deployment-on-AWS",
    linkedinLink: "https://www.linkedin.com/feed/update/urn:li:activity:7316004115308843008/",
    technologies: ["AWS S3", "AWS IAM", "AWS EC2", "Node.js"],
    visitLink: "https://github.com/SHASHI9705/AWSphere-Deployment-on-AWS",
  },
  {
    id: 6,
    title: "EC2 Cost Optimizer",
    description:
      "Automated EC2 Cost Optimizer is a serverless solution that continuously monitors EC2 instance usage and automatically stops idle instances to reduce cloud costs. Built using AWS Lambda, CloudWatch, and SNS, it streamlines cost, improves resource efficiency, and enhances overall AWS management.",
    image: "/images/ec2cost.png",
    githubLink: "https://github.com/SHASHI9705/Cost-Optimization",
    linkedinLink: "https://www.linkedin.com/feed/update/urn:li:activity:7337345468533784576/",
    technologies: ["EC2", "Cloud Watch", "AWS Lambda", "IAM"],
    visitLink: "https://github.com/SHASHI9705/Cost-Optimization",
  },
 
  {
    id: 7,
    title: "Serverless web",
    description:
      "Serverless Static Website Deployment is a lightweight, fully AWS-powered solution using S3, CloudFront, Route 53, and ACM. It delivers fast, secure, and highly available static websites, ideal for portfolios, product pages, or frontend applications, ensuring seamless performance and global accessibility.",
    image: "/images/staticserverless.png",
    githubLink: "https://github.com/SHASHI9705/Serverless-Static-Website-AWS-Deployment",
    linkedinLink:
      "https://www.linkedin.com/posts/shashiranjan-singh9_aws-serverless-cloudcomputing-activity-7318538510984974336-xAG_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFXiSDUBMRX_NEvjsKl4GEvCMLDb8TxRyho",
    technologies: ["AWS S3", "ACM", "Cloud Front", "Route 53"],
    visitLink: "https://github.com/SHASHI9705/Serverless-Static-Website-AWS-Deployment",
  },
   {
    id: 8,
    title: "AWS S3 – Static Website",
    description:
      "A hands-on project demonstrating the complete flow of deploying a static website on AWS S3. Covers bucket creation, static hosting setup, file uploads, permission configuration, and accessing the site via S3 URL. Built using HTML, CSS, and JavaScript for ui development.",
    image: "/images/stat.png",
    githubLink: "https://github.com/SHASHI9705/Satic-website-deployment-on-aws",
    linkedinLink: "https://www.linkedin.com/feed/update/urn:li:activity:7286305225672425472/",
    technologies: ["AWS", "HTML", "CSS", "JavaScript"],
    visitLink: "https://github.com/SHASHI9705/Satic-website-deployment-on-aws",
  },
   {
    id: 9,
    title: "AWS Console",
    description:
      "AWS Console Clone is a frontend project built with HTML, CSS, and minimal JavaScript to replicate the look and feel of the AWS Console. Includes a dark mode toggle and interactive components, designed to enhance UI design skills through hands-on cloning practice.",
    image: "/images/awsconsole.png",
    githubLink: "https://github.com/SHASHI9705/AWS-Console?tab=readme-ov-file",
    linkedinLink: "https://www.linkedin.com/feed/update/urn:li:activity:7286305225672425472/",
    technologies: ["AWS", "HTML", "CSS", "JavaScript"],
    visitLink: "https://www.aws.xshashi.me/",
  },
  {
    id: 10,
    title: "Account Creation Script",
    description:
      "User Account Creation Script is a Bash-based automation tool that quickly provisions Linux user accounts. It ensures proper root access, generates time-based passwords, and enforces password reset on first login, streamlining user setup while maintaining strong security and administrative efficiency.",
    image: "/images/shellacount.png",
    githubLink: "https://github.com/SHASHI9705/User-Account-Creation",
    linkedinLink:
      "https://www.linkedin.com/posts/shashiranjan-singh9_shellscripting-linux-useraccount-activity-7280904493016219648-dOvp?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFXiSDUBMRX_NEvjsKl4GEvCMLDb8TxRyho",
    technologies: ["Linux", "Shell Script", "User", "Security"],
    visitLink: "https://github.com/SHASHI9705/User-Account-Creation",
  },
  
  {
    id: 11,
    title: "Dots & Boxes",
    description:
      "Dots & Boxes is a nostalgic browser-based game built with HTML, CSS, and JavaScript. Players take turns connecting dots to complete boxes, recreating the classic notebook game experience. Simple rules, interactive gameplay, and endless fun make it engaging for all ages.",
    image: "/images/dotbox.png",
    githubLink: "https://github.com/SHASHI9705/Dots-Boxes",
    linkedinLink:
      "https://www.linkedin.com/posts/shashiranjan-singh9_webdev-chilhood-html-activity-7280525124406050816-euiU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFXiSDUBMRX_NEvjsKl4GEvCMLDb8TxRyho",
    technologies: ["HTML", "CSS", "JavaScript", "Games"],
    visitLink: "https://www.dotsandboxes.xshashi.me/",
  },
  {
    id: 12,
    title: "Own Excalidraw",
    description:
      "A browser-based collaborative whiteboard built from scratch using TypeScript, React, Next.js, and TurboRepo. Supports freehand drawing, shapes, arrows, and real-time collaboration via WebSockets. Focused on core canvas logic and live sync between users, offering an interactive and educational drawing experience.",
    image: "/images/excal.png",
    githubLink: "https://github.com/SHASHI9705/Draw-now",
    linkedinLink:
      "https://www.linkedin.com/posts/shashiranjan-singh9_webdev-reactjs-typescript-activity-7344745000083095552-TlEh?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFXiSDUBMRX_NEvjsKl4GEvCMLDb8TxRyho",
    technologies: ["React.js", "CSS", "JavaScript", "Draw tool"],
    visitLink: "https://github.com/SHASHI9705/Draw-now",
  },
];