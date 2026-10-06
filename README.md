# SkillCraft - High-Fidelity Hackathon Web Application Demo

**SkillCraft** is a modern, high-contrast peer-to-peer career learning and candidate matching platform designed for students, recruiters, instructors, and platform administrators.

---

## Key Highlights & Architectural Features

### 1. Modern Glassmorphism Dock / Taskbar
- Floating taskbar navigation bar with blur effect (`backdrop-filter: blur(20px)`).
- Quick-access controls:
  - **Global Search (`Ctrl + K`)**: Command palette searching peers, skills, jobs, vouchers, and leaderboards.
  - **Role Switcher**: Seamlessly switch between **Student Portal**, **Company / Recruiter Portal**, **Instructor Portal**, and **Admin Dashboard** without full page reloads.
  - **Interactive Daily Streak Status Widget**: Live streak pill (`12-Day Streak`) with daily check-in modal that increments days, awards XP, and updates the calendar.
  - **Notifications Drawer**: Interactive flyout with recruiter views, session approvals, and milestone updates.
  - **User Profile Management**: Avatar with online status and profile editor.

### 2. Student Portal & Profile Management
- Full profile editor: Target role selection (`Junior Full Stack Developer`), education, bio, GitHub/portfolio links, and simulated resume parser.
- **Interactive Real-Time Skill Sliders**:
  - Live sliders for React, Node.js, SQL, TypeScript, System Design, and Docker.
  - Dragging sliders dynamically recalculates peer gap roadmaps and recruiter matching scores in real-time!
- Verified Skill Badges with native interactive assessment verification quiz.

### 3. Peer-to-Peer Dynamic Roadmap Generator (Simulated AI)
- Browse verified senior peers & alumni (e.g., Sarah Chen @ TechCorp, Marcus Vance @ CloudScale).
- **Simulated AI Vector Delta**:
  - Compares current skill vectors against senior alumni.
  - Generates side-by-side disparity deltas (e.g., React: 20% vs 90% = +70% Gap).
  - Produces an adaptive 4-phase milestone roadmap including course modules, weekly goals, and an **Open Project Blueprint** ("E-Commerce Microservices & Event Stream") mirroring the peer's actual landed portfolio.

### 4. 1:1 Learning Sessions & Dynamic Platform Commission Engine
- **Requirement**: Direct peer pairing sessions with dynamic platform commission scaled by skill magnitude:
  - **Formula**: `Commission % = 2.5% + ((Skill Magnitude / 100) × 7.5%)`
  - **Range**: Strictly bounded between **2.5%** (foundational skills, magnitude 1-20) and **10.0%** (high-magnitude distributed systems, magnitude 80-100).
- Transparent real-time financial breakdown (Base Mentor Rate + Dynamic Fee = Total Payable).
- Instant integration with the Simulated Razorpay checkout gateway.

### 5. Simulated Razorpay Payment Gateway
- Authentic Razorpay sandbox modal with brand header, order summary, and payment options:
  - **UPI / QR**: Google Pay, PhonePe, Paytm, BHIM, and custom UPI ID.
  - **Cards**: Credit/Debit card form.
  - **NetBanking**: Major bank selection.
- Multi-step loading animation (`Authorizing transaction with bank...`).
- Sleek "Payment Successful!" checkmark modal with auto-generated Payment ID (`pay_...`), invoice log, and instant ledger update in both student sessions and admin financial audit logs.

### 6. Recruiter Automated Candidate Matching Engine
- Active job listing selector with **weighted skill criteria tags** (High 4x, Medium 2x, Low 1x).
- Candidate table ranked by automated weighted fit percentages (High Priority, Moderate Match, Skill Gap Identified).
- **Live Vector Linking**: Changing Alex's skill sliders in the Student Profile immediately updates Alex's candidate fit percentage on the recruiter board!
- "Post New Job" modal with weighted requirement builder.

### 7. Instructor & Admin Portals
- **Instructor**: Revenue overview, course curriculum publishing, quiz builder, and payout tracking.
- **Admin**: User approval toggles (Students, Mentors, Recruiters), content moderation queue, and financial transaction audit logs.

---

## Design System & Constraints Compliance
- **Color Palette**: High-contrast modern Black (`#111827`, `#0F172A`), White (`#FFFFFF`, `#F8FAFC`), and Accent Yellow (`#EAB308` / `#FACC15`).
- **Emoji Policy**: 100% compliant — zero emojis used; crisp SVG vector icons throughout (Lucide via CDN).
- **Content Constraints**: Zero references to "SDG points", "SDGs", or "Sustainable Development Goals". Exact product name: **SkillCraft**.

---

## How to Run
Open `index.html` in any modern web browser:
```bash
# You can open it directly or serve with any static server:
npx serve .
# Or simply double-click index.html
```

