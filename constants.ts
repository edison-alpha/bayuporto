
import { Project, SkillGroup, Stat, Experience, Award, Testimonial } from './types';

// Import all project images
import somguessImg from '@/src/assets/somguess.png';
import sanggarbaktiImg from '@/src/assets/sanggarbakti.png';
import ventaImg from '@/src/assets/venta.png';
import inticImg from '@/src/assets/intic.png';
import omahturuImg from '@/src/assets/omahturu.png';
import hibeatsImg from '@/src/assets/hibeats.png';
import achievedieltsImg from '@/src/assets/achievedielts.png';
import momeImg from '@/src/assets/mome.png';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Somnia Guess",
    description: "A Web3 playground where every guess, every win, and every badge you earn is securely stored on-chain with provable fairness and NFT ownership.",
    tags: ["Solidity", "React.js", "Web3", "NFT"],
    image: somguessImg,
    link: "https://www.somguess.fun/",
    details: {
      client: "Somnia Guess",
      industry: "Web3 / Gaming / NFT",
      timeline: "4 Weeks",
      techStackDetailed: ["Solidity", "React.js", "Ethers.js", "Smart Contracts", "NFT"],
      overview: "Somnia Guess is not just a game — it's a Web3 playground where every guess, every win, and every badge you earn is securely stored on-chain. Players connect their wallets, place bets, and guess numbers — all while enjoying provable fairness, NFT ownership, and transparent statistics.",
      role: ["Smart Contract Development", "Frontend Development", "Web3 Integration"],
      features: ["Wallet Connection", "On-chain Betting", "NFT Badges", "Provable Fairness", "Transparent Statistics"],
      challenges: [],
      takeaways: "Built an engaging Web3 gaming experience with on-chain fairness and NFT rewards.",
      galleryImages: []
    }
  },
  {
    id: 2,
    title: "Sanggar Bakti",
    description: "A website for Karang Taruna Sanggar Bakti, showcasing youth community activities, social programs, and local engagement initiatives.",
    tags: ["React", "Tailwind CSS", "TypeScript"],
    image: sanggarbaktiImg,
    link: "#",
    details: {
      client: "Karang Taruna Sanggar Bakti",
      industry: "Community / Youth Organization",
      timeline: "3 Weeks",
      techStackDetailed: ["React", "Tailwind CSS", "TypeScript"],
      overview: "A website designed for Karang Taruna Sanggar Bakti to promote youth community activities, showcase social programs, and connect with local residents.",
      role: ["Frontend Development", "UI/UX Design"],
      features: ["Activity Showcase", "Event Calendar", "Gallery", "Contact Form", "Responsive Design"],
      challenges: [],
      takeaways: "Successfully delivered a clean and engaging website for youth community engagement.",
      galleryImages: []
    }
  },
  {
    id: 3,
    title: "Venta",
    description: "A comprehensive Solana wallet directory and comparison tool that catalogues every wallet with Solana support, details key features, and flags Solana Pay QR-code compatibility.",
    tags: ["React.js", "Solana", "TypeScript", "Solana Pay"],
    image: ventaImg,
    link: "https://venta-kappa.vercel.app/",
    details: {
      client: "Superteam Bounty - Venta",
      industry: "Web3 / Blockchain / DeFi",
      timeline: "2 Weeks",
      techStackDetailed: ["React.js", "TypeScript", "Tailwind CSS", "CSV/JSON Data"],
      overview: "Venta is a comprehensive Solana wallet directory built for the Superteam Bounty. It catalogues every mobile, browser-extension, and desktop wallet that supports Solana mainnet, providing a detailed feature matrix including platforms, custody models, DEX swap, NFT gallery, staking, fiat on/off-ramps, push notifications, and critically - Solana Pay QR reader compatibility. The project achieved Top 3 in the bounty competition.",
      role: ["Frontend Development", "Data Research & Validation", "UI/UX Design"],
      features: ["Complete Wallet Inventory", "Feature Matrix with Filters", "Solana Pay QR Compatibility Flags", "Interactive Dashboard", "Export to CSV/JSON", "Mobile-friendly Design"],
      challenges: [
        {
          challenge: "Cataloguing all Solana wallets including niche and regional ones",
          solution: "Conducted extensive research across app stores, documentation, and community resources to build a comprehensive wallet database."
        },
        {
          challenge: "Validating Solana Pay QR reader compatibility",
          solution: "Tested each wallet manually and documented UX quirks, one-tap vs buried access, and error handling."
        }
      ],
      takeaways: "This project achieved Top 3 in the Superteam Bounty, demonstrating comprehensive research, accurate data validation, and clean UX design for the Solana ecosystem.",
      galleryImages: []
    }
  },
  {
    id: 4,
    title: "Intic",
    description: "A blockchain-based event ticketing platform on PushChain Universal Network with NFT tickets, fraud protection, cross-chain payments, and community governance.",
    tags: ["Solidity", "React.js", "PushChain", "NFT"],
    image: inticImg,
    link: "https://intic-official.vercel.app/",
    details: {
      client: "Intic.id",
      industry: "Web3 / Blockchain / Event Ticketing",
      timeline: "6 Weeks",
      techStackDetailed: ["Solidity", "React.js", "Ethers.js", "Viem", "Hardhat", "PushChain Universal Chain", "IPFS/Pinata", "Tailwind CSS"],
      overview: "Intic.id is an innovative blockchain-based event ticketing platform built on PushChain Universal Network. It revolutionizes the event industry by providing transparent, secure, and fraud-proof ticketing through NFT technology. The platform solves major industry problems: ticket fraud & scalping, high platform fees (reduced from 15-30% to just 2.5%), lack of transparency, and complicated refund processes. Leveraging PushChain's Universal Chain Architecture, users can purchase tickets from any supported blockchain (Ethereum, Solana, Polygon, etc.) with a single unified wallet experience.",
      role: ["Smart Contract Development", "Frontend Development", "Web3 Integration", "System Architecture"],
      features: [
        "NFT-Based Ticketing with verifiable proof of ownership",
        "Fraud Protection System (72-hour withdrawal lock, 30% community reporting threshold)",
        "Cross-Chain Payments via PushChain Universal Chain",
        "Transparent Marketplace with automatic 2.5% royalties",
        "QR Code Check-In with blockchain verification",
        "Zero-Code Smart Contract Deployment for organizers",
        "Emergency Refund System (even for used tickets)",
        "Staking & Governance for token holders"
      ],
      challenges: [
        {
          challenge: "Eliminating ticket fraud and scalping in traditional ticketing",
          solution: "Implemented NFT-based tickets with unique on-chain verification, making counterfeits impossible and enabling transparent secondary market trading."
        },
        {
          challenge: "Protecting attendees from fraudulent event organizers",
          solution: "Built advanced fraud protection with 72-hour withdrawal lock, community reporting system (30% threshold triggers emergency refunds), and refunds even for used tickets."
        },
        {
          challenge: "Enabling cross-chain accessibility without complex bridges",
          solution: "Leveraged PushChain's Universal Chain for native interoperability across Ethereum, Solana, Polygon, and more - no wrapped tokens or bridge vulnerabilities."
        }
      ],
      takeaways: "This project achieved Top 30 in the DoraHacks Hackathon, demonstrating innovative blockchain solutions for event ticketing. Intic.id proves how Web3 can solve real-world problems by reducing fees from 15-30% to 2.5%, eliminating fraud, and providing true cross-chain accessibility.",
      galleryImages: []
    }
  },
  {
    id: 5,
    title: "OmahTuru",
    description: "A modern property rental platform connecting travelers with unique accommodations and local experiences.",
    tags: ["React", "Node.js", "MongoDB"],
    image: omahturuImg,
    link: "#",
    status: "in-progress",
    details: {
      client: "OmahTuru",
      industry: "Travel / Hospitality",
      timeline: "8 Weeks",
      techStackDetailed: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      overview: "OmahTuru is a property rental marketplace that helps travelers find unique stays while enabling property owners to list and manage their accommodations.",
      role: ["Full-stack Development", "Database Design", "Payment Integration"],
      features: ["Property Listings", "Booking System", "User Reviews", "Secure Payments"],
      challenges: [],
      takeaways: "Built a scalable platform that connects hosts and guests seamlessly.",
      galleryImages: []
    }
  },
  {
    id: 6,
    title: "HiBeats",
    description: "A next-generation SocialFi platform combining AI-powered music generation, NFT marketplace, and decentralized social networking on Somnia blockchain.",
    tags: ["React", "Solidity", "Somnia", "AI", "NFT"],
    image: hibeatsImg,
    link: "https://hibeats.xyz",
    details: {
      client: "HiBeats",
      industry: "Web3 / SocialFi / Music",
      timeline: "8 Weeks",
      techStackDetailed: ["React 18", "TypeScript", "Solidity", "Somnia Blockchain", "Somnia Data Streams", "Sequence Wallet", "IPFS", "The Graph", "Wagmi/Viem", "Tailwind CSS"],
      overview: "HiBeats is a next-generation SocialFi platform that converges AI-powered music generation, NFT marketplace infrastructure, and decentralized social networking into a unified Web3 ecosystem. Built on Somnia's high-performance blockchain with sub-second finality, HiBeats empowers creators to generate professional music from text prompts, tokenize them as NFTs, and distribute through a permissionless, community-driven economy. The platform addresses critical inefficiencies in traditional music industry: centralized gatekeeping, opaque revenue distribution, and limited creator ownership.",
      role: ["Smart Contract Development", "Frontend Development", "System Architecture", "AI Integration", "Data Streams Implementation"],
      features: [
        "AI Music Generation (V3.5, V4, V4.5 models) with custom lyrics and style parameters",
        "NFT Minting & Marketplace with automated royalty distribution",
        "Real-time Social Features via Somnia Data Streams (15-100ns latency)",
        "BeatsXP (BXP) Gamification System with XP rewards, streaks, and leaderboards",
        "Playlist Management with multi-publisher support",
        "STT Token Tipping System for direct creator support",
        "Subgraph Integration for NFT and trading analytics"
      ],
      challenges: [
        {
          challenge: "Achieving Web2-level performance for social features on Web3",
          solution: "Implemented Somnia Data Streams for real-time data synchronization with 15-100ns read/write latency, enabling instant posts, likes, comments, and messaging without gas costs."
        },
        {
          challenge: "Building comprehensive gamification without expensive on-chain transactions",
          solution: "Designed BeatsXP system using dedicated Data Streams schemas (bxp_transactions, bxp_profiles, bxp_quests, bxp_leaderboard) for real-time XP tracking with zero gas costs."
        },
        {
          challenge: "Enabling AI music generation with blockchain ownership",
          solution: "Integrated multi-model AI engine with smart contract NFT minting, allowing users to generate music from prompts and instantly tokenize as ERC-721 NFTs with programmable royalties."
        }
      ],
      takeaways: "HiBeats demonstrates how Web3 can revolutionize the music industry by combining AI creativity with blockchain ownership. The platform achieves Web2-level UX through Somnia's Data Streams while maintaining true decentralization, enabling anyone to create, own, and monetize music without intermediaries.",
      galleryImages: []
    }
  },
  {
    id: 7,
    title: "achieved.test",
    description: "An educational platform helping students prepare for IELTS exams with interactive lessons and practice tests.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: achievedieltsImg,
    link: "#",
    status: "in-progress",
    details: {
      client: "achieved.test",
      industry: "Education / E-Learning",
      timeline: "6 Weeks",
      techStackDetailed: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
      overview: "achieved.test provides comprehensive IELTS preparation with structured courses, practice tests, and progress tracking.",
      role: ["Full-stack Development", "Database Design", "UI Implementation"],
      features: ["Interactive Lessons", "Practice Tests", "Progress Tracking", "Score Analytics"],
      challenges: [],
      takeaways: "Helped thousands of students improve their IELTS scores through effective learning tools.",
      galleryImages: []
    }
  },
  {
    id: 8,
    title: "MoME",
    description: "The first decentralized raffle platform on Movement Network with verifiable randomness and cryptographically provable fairness.",
    tags: ["Move", "React", "Movement Network", "Web3"],
    image: momeImg,
    link: "https://mome-three.vercel.app/",
    details: {
      client: "MoME",
      industry: "Web3 / DeFi / Gaming",
      timeline: "4 Weeks",
      techStackDetailed: ["Move", "React", "Movement Network", "Aptos Native Randomness API", "Smart Contracts"],
      overview: "MoME (Movement Raffle) is an on-chain raffle platform built on Movement Network. It brings a new way to host and participate in digital raffles with full transparency and cryptographically provable fairness. Unlike traditional raffle platforms that rely on centralized systems, MoME leverages blockchain technology to ensure every draw is truly random and cannot be manipulated by anyone — including the team. Once a raffle is created, its parameters are locked in immutable smart contracts.",
      role: ["Smart Contract Development", "Frontend Development", "Web3 Integration"],
      features: [
        "Verifiable Randomness using Aptos Native Randomness API",
        "On-chain Raffle Creation with any digital asset on Movement Network",
        "Audited Smart Contracts for prize locking",
        "Immutable Raffle Parameters - no one can change rules after creation",
        "Cryptographically Provable Fairness",
        "High-performance infrastructure on Movement Network"
      ],
      challenges: [
        {
          challenge: "Eliminating trust issues in traditional raffle platforms",
          solution: "Built on-chain raffle system using Movement Network's blockchain technology, ensuring every draw is truly random and verifiable by anyone."
        },
        {
          challenge: "Ensuring provably fair winner selection",
          solution: "Integrated Aptos Native Randomness API for cryptographically secure and verifiable random number generation."
        }
      ],
      takeaways: "MoME demonstrates how blockchain can solve fundamental trust issues in raffle systems. By making everything on-chain and using verifiable randomness, we created a protocol where no one — not even the team — can manipulate outcomes.",
      galleryImages: []
    }
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Three.js", "Redux"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Python", "PostgreSQL", "Redis"]
  },
  {
    category: "Blockchain & Smart Contract",
    items: ["Solidity", "Move", "Hardhat", "Foundry", "Ethers.js", "Web3.js", "OpenZeppelin"]
  },
  {
    category: "UI/UX",
    items: ["Figma"]
  }
];

export const STATS: Stat[] = [
  { label: "Years of Experience", value: "1+" },
  { label: "Projects Completed", value: "10+" },
  { label: "Hackathon Achievements", value: "Top 30" }
];

export const EXPERIENCES: Experience[] = [
  { company: "Front End Web Developer", period: "December 2024 — Juni 2025", role: "Freelance" },
  { company: "Freelance", period: "2025 — Present", role: "Web Developer" }
];

export const AWARDS: Award[] = [
  { title: "KSCSS Award", description: "Recognized for consistent delivery, code quality, and client satisfaction.", year: "2024" },
  { title: "Awards DEV", description: "Recognitions earned for excellence in modern web development.", year: "2022" },
  { title: "Best Experience", description: "Celebrating milestones in software, design, and technical impact.", year: "2020" },
  { title: "DEVIES Awards", description: "Proof of passion, skill, and results in development journey.", year: "2018" }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Working with Bayu was one of the best decisions we made for our web platform. He understood our vision, delivered clean & scalable code, and communicated clearly throughout the project.",
    author: "Akhfiyan",
    role: "CEO, Achieved",
    image: "https://i.pravatar.cc/150?u=akhfiyan"
  },
  {
    quote: "Exceptional attention to detail and a deep understanding of modern web architectures. Bayu is our go-to for complex React applications.",
    author: "Jane Cooper",
    role: "Product Manager, InnovateX",
    image: "https://i.pravatar.cc/150?u=jane"
  }
];
