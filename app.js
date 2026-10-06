/**
 * SkillCraft - High-Fidelity Prototype Engine
 * Architecture: Clean Vanilla ES6+ with State Management, Dynamic Commission Engine,
 * Simulated AI Delta Roadmap Generator, Recruiter Matching Engine, and Razorpay Checkout.
 */

// Initial Mock State
const DEFAULT_STATE = {
  currentRole: 'student', // 'student' | 'recruiter' | 'instructor' | 'admin'
  currentTab: 'dashboard',
  userProfile: {
    name: 'Alex Rivera',
    initials: 'AR',
    targetRole: 'Junior Full Stack Developer',
    education: 'B.Tech Computer Science, 3rd Year',
    bio: 'Passionate junior engineer focusing on React, scalable Node.js microservices, and database optimization. Actively building capstones to mirror industry senior peers.',
    github: 'https://github.com/alexrivera-dev',
    portfolio: 'https://alexrivera.craft',
    resumeName: 'Alex_Rivera_Resume_2026.pdf',
    streak: 12,
    checkedInToday: false,
    xp: 1850,
    verifiedBadges: [
      'SQL Intermediate (Verified)',
      'React Fundamentals (Verified)',
      'Git & GitHub Pro'
    ],
    skills: {
      'React': 20,
      'Node.js': 15,
      'SQL': 50,
      'TypeScript': 30,
      'System Design': 10,
      'Docker': 15
    }
  },
  peers: [
    {
      id: 'sarah',
      name: 'Sarah Chen',
      role: 'Junior Dev @ TechCorp',
      targetRole: 'Full Stack',
      company: 'TechCorp',
      hourlyRate: 1500,
      keyProject: 'E-commerce Microservices & Event Stream',
      skills: {
        'React': 90,
        'Node.js': 80,
        'SQL': 60,
        'TypeScript': 85,
        'System Design': 75,
        'Docker': 70
      }
    },
    {
      id: 'marcus',
      name: 'Marcus Vance',
      role: 'Backend Engineer @ CloudScale',
      targetRole: 'Backend',
      company: 'CloudScale',
      hourlyRate: 1800,
      keyProject: 'High-Throughput Redis-Backed API Gateway',
      skills: {
        'React': 40,
        'Node.js': 95,
        'SQL': 90,
        'TypeScript': 65,
        'System Design': 80,
        'Docker': 85
      }
    },
    {
      id: 'elena',
      name: 'Elena Rostova',
      role: 'Frontend Engineer @ DesignHub',
      targetRole: 'Frontend',
      company: 'DesignHub',
      hourlyRate: 1600,
      keyProject: 'Real-time Collaborative Canvas with WebSockets',
      skills: {
        'React': 95,
        'Node.js': 45,
        'SQL': 30,
        'TypeScript': 90,
        'System Design': 55,
        'Docker': 40
      }
    },
    {
      id: 'aarav',
      name: 'Aarav Patel',
      role: 'AI & Full Stack Engineer @ NeoLabs',
      targetRole: 'Full Stack',
      company: 'NeoLabs',
      hourlyRate: 2200,
      keyProject: 'Multi-Agent RAG Orchestration Platform',
      skills: {
        'React': 80,
        'Node.js': 85,
        'SQL': 80,
        'TypeScript': 75,
        'System Design': 85,
        'Docker': 80
      }
    }
  ],
  bookedSessions: [
    {
      id: 'SC-8921',
      mentorName: 'Sarah Chen',
      topic: 'Node.js Architecture Review & Prisma ORM',
      magnitude: 60,
      baseRate: 1500,
      commissionPercent: 7.0,
      commissionAmount: 105,
      totalPaid: 1605,
      status: 'Confirmed'
    }
  ],
  jobs: [
    {
      id: 'job-1',
      title: 'Junior Full Stack Developer',
      company: 'Stripe Integrations Lab',
      weights: {
        'React': { level: 'High', weight: 4 },
        'Node.js': { level: 'High', weight: 3 },
        'SQL': { level: 'Medium', weight: 2 },
        'TypeScript': { level: 'Medium', weight: 2 }
      }
    },
    {
      id: 'job-2',
      title: 'Backend Platform Engineer',
      company: 'CloudScale Systems',
      weights: {
        'Node.js': { level: 'High', weight: 4 },
        'SQL': { level: 'High', weight: 4 },
        'System Design': { level: 'Medium', weight: 2 },
        'Docker': { level: 'Medium', weight: 2 }
      }
    },
    {
      id: 'job-3',
      title: 'Frontend Engineer (Next.js)',
      company: 'Vercel Ecosystem',
      weights: {
        'React': { level: 'High', weight: 5 },
        'TypeScript': { level: 'High', weight: 3 },
        'Node.js': { level: 'Low', weight: 1 }
      }
    }
  ],
  staticCandidates: [
    {
      name: 'Sarah Chen',
      role: 'Full Stack Developer',
      badges: 5,
      skills: { 'React': 90, 'Node.js': 80, 'SQL': 60, 'TypeScript': 85, 'System Design': 75, 'Docker': 70 }
    },
    {
      name: 'David Kim',
      role: 'Frontend Specialist',
      badges: 3,
      skills: { 'React': 85, 'Node.js': 40, 'SQL': 45, 'TypeScript': 75, 'System Design': 40, 'Docker': 30 }
    },
    {
      name: 'Priya Sharma',
      role: 'Backend Apprentice',
      badges: 2,
      skills: { 'React': 30, 'Node.js': 70, 'SQL': 65, 'TypeScript': 40, 'System Design': 35, 'Docker': 45 }
    }
  ],
  marketplaceVouchers: [
    {
      id: 'voucher-1',
      title: 'Full-Stack Production Readiness Certification',
      author: 'Industry Review Board',
      price: 1499,
      tags: ['Verified Badge', 'Recruiter Fast-Track', 'Code Review'],
      desc: 'Comprehensive end-to-end evaluation covering React 18, Node.js concurrency, and SQL schema tuning.'
    },
    {
      id: 'voucher-2',
      title: 'Distributed Systems & Cloud Architecture Voucher',
      author: 'CloudScale Engineering',
      price: 2499,
      tags: ['Senior Level', 'Microservices', 'Docker / K8s'],
      desc: 'Rigorous capstone exam requiring live deployment of event-driven asynchronous microservices.'
    },
    {
      id: 'voucher-3',
      title: 'Modern TypeScript & Frontend Mastery Track',
      author: 'DesignHub Academy',
      price: 999,
      tags: ['TypeScript Pro', 'State Machines', 'Next.js'],
      desc: 'Master generic types, AST analysis, and high-performance DOM virtualization patterns.'
    }
  ],
  adminApprovals: [
    { id: 'usr-1', name: 'Rohan Mehta', role: 'Company Recruiter', credentials: 'Uber Engineering Lead', status: 'Pending' },
    { id: 'usr-2', name: 'Lisa Taylor', role: 'Instructor / Peer Mentor', credentials: 'Staff Dev @ Amazon', status: 'Approved' },
    { id: 'usr-3', name: 'Devon Miles', role: 'Student Candidate', credentials: 'Georgia Tech Student', status: 'Approved' }
  ],
  adminModeration: [
    { id: 'mod-1', title: 'React Server Components Masterclass', author: 'Elena Rostova', type: 'Course Track', status: 'Pending Review' },
    { id: 'mod-2', title: 'Junior Cloud DevOps Engineer', author: 'Stripe Integrations', type: 'Job Posting', status: 'Approved' },
    { id: 'mod-3', title: 'Redis Streams & Event Brokers', author: 'Marcus Vance', type: 'Course Track', status: 'Approved' }
  ],
  adminFinancialLogs: [
    { id: 'tx_984321', student: 'Alex Rivera', item: '1:1 Session with Sarah Chen', magnitude: 60, commissionRate: 7.0, fee: 105, gross: 1605, status: 'Settled' },
    { id: 'tx_984320', student: 'Kevin Zhao', item: 'Certification Voucher: Full Stack', magnitude: 80, commissionRate: 8.5, fee: 127, gross: 1499, status: 'Settled' },
    { id: 'tx_984319', student: 'Maria Garcia', item: '1:1 Session with Marcus Vance', magnitude: 95, commissionRate: 9.6, fee: 173, gross: 1973, status: 'Settled' }
  ],
  activePeerRoadmapId: 'sarah'
};

class SkillCraftApp {
  constructor() {
    this.state = this.loadState();
    this.pendingPayment = null;
    this.init();
  }

  loadState() {
    try {
      const saved = localStorage.getItem('skillcraft_state_v1');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Failed to parse saved state, using default', e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_STATE));
  }

  saveState() {
    try {
      localStorage.setItem('skillcraft_state_v1', JSON.stringify(this.state));
    } catch (e) {
      console.error('Storage save error', e);
    }
  }

  init() {
    this.renderDockTabs();
    this.renderHeader();
    this.renderStudentDashboard();
    this.renderPeers();
    this.render1on1Sessions();
    this.renderMarketplace();
    this.renderLeaderboard();
    this.renderRecruiterPortal();
    this.renderInstructorPortal();
    this.renderAdminPortal();
    this.renderNotifications();
    this.setupKeyboardShortcuts();
    this.updateIcons();
  }

  updateIcons() {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // =========================================================================
  // DOCK NAVIGATION & ROLE SWITCHING
  // =========================================================================
  renderDockTabs() {
    const dockContainer = document.getElementById('dock-dynamic-tabs');
    if (!dockContainer) return;

    let tabs = [];
    const role = this.state.currentRole;

    if (role === 'student') {
      tabs = [
        { id: 'dashboard', label: 'Dashboard', icon: 'layout-dashboard' },
        { id: 'roadmaps', label: 'Peer Roadmaps', icon: 'map' },
        { id: 'sessions', label: '1:1 Sessions', icon: 'video' },
        { id: 'marketplace', label: 'Marketplace', icon: 'shopping-bag' },
        { id: 'leaderboard', label: 'Leaderboard', icon: 'award' }
      ];
    } else if (role === 'recruiter') {
      tabs = [
        { id: 'matching', label: 'Candidate Matching Engine', icon: 'users' },
        { id: 'post', label: 'Post Job Listing', icon: 'plus-circle' }
      ];
    } else if (role === 'instructor') {
      tabs = [
        { id: 'courses', label: 'Courses & Studio', icon: 'book-open' },
        { id: 'assessments', label: 'Assessments', icon: 'file-question' },
        { id: 'payouts', label: 'Earnings & Payouts', icon: 'dollar-sign' }
      ];
    } else if (role === 'admin') {
      tabs = [
        { id: 'analytics', label: 'Platform Telemetry', icon: 'bar-chart-2' },
        { id: 'approvals', label: 'User Approvals', icon: 'user-check' },
        { id: 'financials', label: 'Financial Audit', icon: 'shield-check' }
      ];
    }

    dockContainer.innerHTML = tabs.map(tab => `
      <button class="dock-tab-btn ${this.state.currentTab === tab.id ? 'active' : ''}" onclick="app.switchPortal('${role}', '${tab.id}')">
        <i data-lucide="${tab.icon}" class="icon-svg"></i>
        <span>${tab.label}</span>
      </button>
    `).join('');

    this.updateIcons();
  }

  switchPortal(role, tab = null) {
    this.state.currentRole = role;

    // Default tab for role if not provided
    if (!tab) {
      if (role === 'student') tab = 'dashboard';
      else if (role === 'recruiter') tab = 'matching';
      else if (role === 'instructor') tab = 'courses';
      else if (role === 'admin') tab = 'analytics';
    }

    this.state.currentTab = tab;
    this.saveState();

    // Toggle Portals
    document.querySelectorAll('.portal-view').forEach(p => p.classList.remove('active'));
    const targetPortal = document.getElementById(`${role}-portal`);
    if (targetPortal) targetPortal.classList.add('active');

    // Toggle Sub-tabs within portal
    document.querySelectorAll(`#${role}-portal .tab-content`).forEach(t => t.classList.remove('active'));
    const targetTab = document.getElementById(`tab-${role}-${tab}`);
    if (targetTab) {
      targetTab.classList.add('active');
    } else {
      // Fallback activate first tab
      const firstTab = document.querySelector(`#${role}-portal .tab-content`);
      if (firstTab) firstTab.classList.add('active');
    }

    // Update Dock Tabs & Indicators
    this.renderDockTabs();
    this.renderHeader();

    // Close any open role dropdowns
    const dropdown = document.getElementById('role-dropdown-menu');
    if (dropdown) dropdown.classList.remove('show');

    this.showToast(`Switched view to ${role.toUpperCase()} Portal`);
    this.updateIcons();
  }

  toggleRoleDropdown() {
    const dropdown = document.getElementById('role-dropdown-menu');
    if (dropdown) dropdown.classList.toggle('show');
  }

  renderHeader() {
    const roleBadge = document.getElementById('header-role-text');
    const dockRoleLabel = document.getElementById('dock-role-label');
    const quickActionBtn = document.getElementById('header-quick-action-text');

    const role = this.state.currentRole;
    if (roleBadge) roleBadge.textContent = `${role.toUpperCase()} PORTAL`;
    if (dockRoleLabel) dockRoleLabel.textContent = role.toUpperCase();

    if (quickActionBtn) {
      if (role === 'student') quickActionBtn.textContent = 'Verify My Skills';
      else if (role === 'recruiter') quickActionBtn.textContent = 'Post New Job';
      else if (role === 'instructor') quickActionBtn.textContent = 'Create Course';
      else if (role === 'admin') quickActionBtn.textContent = 'Audit Payouts';
    }
  }

  handleHeaderAction() {
    const role = this.state.currentRole;
    if (role === 'student') {
      this.openModal('assessment-modal');
    } else if (role === 'recruiter') {
      this.openModal('post-job-modal');
    } else if (role === 'instructor') {
      this.openModal('create-course-modal');
    } else if (role === 'admin') {
      this.showToast('All dynamic platform commission ledgers are verified and balanced.');
    }
  }

  // =========================================================================
  // STUDENT PORTAL & PROFILE MANAGEMENT
  // =========================================================================
  renderStudentDashboard() {
    const prof = this.state.userProfile;
    document.getElementById('profile-display-name').textContent = prof.name;
    document.getElementById('profile-display-role').textContent = `Target Role: ${prof.targetRole} • ${prof.education}`;
    document.getElementById('card-streak-count').textContent = `${prof.streak} Days`;
    document.getElementById('card-badges-count').textContent = `${prof.verifiedBadges.length} Badges`;
    document.getElementById('card-xp-count').textContent = `${prof.xp.toLocaleString()} XP`;
    document.getElementById('dock-streak-text').textContent = `${prof.streak}-Day Streak`;

    // Calculate Alex's match against Job 1
    const matchScore = this.calculateMatchScore(prof.skills, this.state.jobs[0].weights);
    document.getElementById('card-recruiter-fit').textContent = `${matchScore}% Match`;

    // Render interactive Skill Sliders
    const slidersContainer = document.getElementById('skills-sliders-container');
    if (slidersContainer) {
      slidersContainer.innerHTML = Object.entries(prof.skills).map(([skill, val]) => `
        <div class="skill-slider-card">
          <div class="skill-slider-header">
            <span class="skill-slider-name">${skill}</span>
            <span class="skill-slider-badge" id="slider-val-${skill.replace(/\s+/g, '')}">${val}%</span>
          </div>
          <input type="range" min="0" max="100" value="${val}" class="skill-range-input"
            oninput="app.updateSkillSlider('${skill}', this.value)">
          <div style="display: flex; justify-content: space-between; font-size: 0.72rem; color: var(--text-muted);">
            <span>Beginner</span>
            <span>Intermediate</span>
            <span>Senior</span>
          </div>
        </div>
      `).join('');
    }
  }

  updateSkillSlider(skillName, newVal) {
    const num = parseInt(newVal, 10);
    this.state.userProfile.skills[skillName] = num;

    const valBadge = document.getElementById(`slider-val-${skillName.replace(/\s+/g, '')}`);
    if (valBadge) valBadge.textContent = `${num}%`;

    // Recalculate recruiter fit score live
    const matchScore = this.calculateMatchScore(this.state.userProfile.skills, this.state.jobs[0].weights);
    document.getElementById('card-recruiter-fit').textContent = `${matchScore}% Match`;

    // Update Recruiter candidate table live
    this.renderRecruiterCandidateTable();

    // If currently viewing roadmap comparison, update the deltas immediately!
    if (document.getElementById('roadmap-output-section').style.display !== 'none') {
      this.generateRoadmapForPeer(this.state.activePeerRoadmapId, false);
    }

    this.saveState();
  }

  saveProfileChanges() {
    this.state.userProfile.name = document.getElementById('edit-name').value;
    this.state.userProfile.targetRole = document.getElementById('edit-target-role').value;
    this.state.userProfile.bio = document.getElementById('edit-bio').value;
    this.state.userProfile.github = document.getElementById('edit-github').value;
    this.state.userProfile.portfolio = document.getElementById('edit-portfolio').value;

    this.saveState();
    this.renderStudentDashboard();
    this.closeModal('edit-profile-modal');
    this.showToast('Student profile and career target updated successfully!');
  }

  simulateResumeUpload() {
    const filenameEl = document.getElementById('resume-filename');
    filenameEl.textContent = 'Parsing new resume with skill-vector extractor...';
    setTimeout(() => {
      filenameEl.textContent = 'Alex_Rivera_FullStack_Resume_v2.pdf (Parsed 6 Skills)';
      this.showToast('Resume parsed: Extracted verified skill vector & capstone links');
    }, 1000);
  }

  submitAssessment() {
    this.state.userProfile.skills['Node.js'] = Math.max(this.state.userProfile.skills['Node.js'], 75);
    if (!this.state.userProfile.verifiedBadges.includes('Node.js REST Architect (Verified)')) {
      this.state.userProfile.verifiedBadges.push('Node.js REST Architect (Verified)');
    }
    this.state.userProfile.xp += 150;
    this.saveState();
    this.renderStudentDashboard();
    this.closeModal('assessment-modal');
    this.showToast('Assessment Passed! Verified badge unlocked (+150 XP)');
  }

  // =========================================================================
  // PEER DISCOVERY & DYNAMIC ROADMAP GENERATOR (SIMULATED AI)
  // =========================================================================
  renderPeers(filterRole = 'all') {
    const grid = document.getElementById('peer-discovery-grid');
    if (!grid) return;

    let peers = this.state.peers;
    if (filterRole !== 'all') {
      peers = peers.filter(p => p.targetRole.toLowerCase().includes(filterRole.toLowerCase()));
    }

    grid.innerHTML = peers.map(peer => `
      <div class="peer-card">
        <div class="peer-card-header">
          <div class="peer-avatar-wrap">
            <div class="peer-avatar">${peer.name.split(' ').map(n=>n[0]).join('')}</div>
            <div>
              <div class="peer-name">${peer.name}</div>
              <div class="peer-role">${peer.role}</div>
            </div>
          </div>
          <span class="badge badge-dark">Alumni Peer</span>
        </div>

        <div class="peer-blueprint-preview">
          <div style="font-weight: 700; font-size: 0.78rem; text-transform: uppercase; color: var(--dark-primary); margin-bottom: 0.2rem;">Featured Capstone:</div>
          <div>${peer.keyProject}</div>
        </div>

        <div>
          <div style="font-size: 0.78rem; font-weight: 700; color: var(--text-muted); margin-bottom: 0.35rem;">Senior Competencies:</div>
          <div class="peer-skills-pills">
            ${Object.entries(peer.skills).slice(0, 4).map(([s, val]) => `
              <span class="peer-skill-pill">${s} ${val}%</span>
            `).join('')}
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-subtle); padding-top: 1rem; margin-top: auto;">
          <div>
            <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase;">1:1 Live Pairing</div>
            <div style="font-weight: 800; font-size: 1rem;">₹${peer.hourlyRate}/hr</div>
          </div>
          <button class="btn-yellow btn-sm" onclick="app.generateRoadmapForPeer('${peer.id}', true)">
            <i data-lucide="zap" class="icon-svg"></i>
            <span>Generate Gap Roadmap</span>
          </button>
        </div>
      </div>
    `).join('');

    this.updateIcons();
  }

  filterPeers(role) {
    this.renderPeers(role);
  }

  generateRoadmapForPeer(peerId, showLoading = true) {
    const peer = this.state.peers.find(p => p.id === peerId) || this.state.peers[0];
    this.state.activePeerRoadmapId = peer.id;

    const outputSection = document.getElementById('roadmap-output-section');
    const titleEl = document.getElementById('roadmap-peer-target-title');
    const deltaRowsEl = document.getElementById('roadmap-delta-rows');
    const timelineEl = document.getElementById('roadmap-milestones-timeline');

    if (showLoading) {
      this.showToast(`Synthesizing AI Skill Gap Vector vs. ${peer.name}...`);
      outputSection.style.display = 'block';
      outputSection.scrollIntoView({ behavior: 'smooth' });
    }

    titleEl.textContent = `My Skill Profile vs. ${peer.name} (${peer.role})`;

    // Calculate Deltas for each skill
    const userSkills = this.state.userProfile.skills;
    const deltas = Object.keys(peer.skills).map(skillName => {
      const userVal = userSkills[skillName] || 0;
      const peerVal = peer.skills[skillName];
      const gap = Math.max(0, peerVal - userVal);
      return { skillName, userVal, peerVal, gap };
    });

    deltaRowsEl.innerHTML = deltas.map(d => `
      <div class="delta-item-row">
        <div>
          <div style="font-weight: 700; font-size: 0.92rem;">${d.skillName}</div>
          <div style="font-size: 0.75rem; color: var(--text-muted);">You: ${d.userVal}% | Target: ${d.peerVal}%</div>
        </div>
        <div class="delta-bars-wrapper">
          <div class="delta-bar-track">
            <div class="delta-bar-target" style="width: ${d.peerVal}%;"></div>
            <div class="delta-bar-user" style="width: ${d.userVal}%;"></div>
          </div>
        </div>
        <div style="text-align: right;">
          <span class="delta-pill-tag">+${d.gap}% Gap</span>
        </div>
      </div>
    `).join('');

    // Generate Adaptive Milestone Learning Path
    timelineEl.innerHTML = `
      <div class="timeline-step">
        <div class="timeline-step-dot"></div>
        <div class="timeline-step-content">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.35rem;">
            <div class="badge badge-dark">Phase 1 • Weeks 1-2</div>
            <span style="font-size: 0.78rem; font-weight: 700; color: #10B981;">Targeting React +${deltas.find(d=>d.skillName==='React')?.gap || 70}% Delta</span>
          </div>
          <h4 style="font-weight: 800; font-size: 1.05rem;">Deep Dive: React 18 Concurrent Patterns & State Management</h4>
          <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.25rem;">
            Master complex custom hooks, optimistic mutations, and memory leak diagnosis matching ${peer.name}'s frontend proficiency.
          </p>
          <div style="margin-top: 0.75rem; display: flex; gap: 0.5rem;">
            <button class="btn-sm btn-secondary" onclick="app.openModal('assessment-modal')">Take Module Quiz</button>
          </div>
        </div>
      </div>

      <div class="timeline-step">
        <div class="timeline-step-dot"></div>
        <div class="timeline-step-content">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.35rem;">
            <div class="badge badge-dark">Phase 2 • Weeks 3-5</div>
            <span style="font-size: 0.78rem; font-weight: 700; color: #10B981;">Targeting Node.js & SQL Delta</span>
          </div>
          <h4 style="font-weight: 800; font-size: 1.05rem;">Production Backend Architecture with Node.js & Prisma</h4>
          <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.25rem;">
            Construct authenticated microservices with relational schema migrations, connection pooling, and JWT authorization.
          </p>
        </div>
      </div>

      <div class="timeline-step">
        <div class="timeline-step-dot"></div>
        <div class="timeline-step-content">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.35rem;">
            <div class="badge badge-yellow">Phase 3 • Weeks 6-8 (Capstone Blueprint)</div>
            <span class="badge badge-success">Mirrors ${peer.name}'s Portfolio</span>
          </div>
          <h4 style="font-weight: 800; font-size: 1.05rem;">Open Project Blueprint: "${peer.keyProject}"</h4>
          <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.25rem;">
            Build the exact project architecture that earned ${peer.name} offers from ${peer.company}. Verified against automated rubric tests.
          </p>
          <div style="margin-top: 0.75rem; display: flex; gap: 0.5rem;">
            <button class="btn-sm btn-primary" onclick="app.openBlueprintModal()">Inspect Project Blueprint</button>
            <button class="btn-sm btn-yellow" onclick="app.openBookingModalForCurrentPeer()">Book 1:1 Live Code Review</button>
          </div>
        </div>
      </div>

      <div class="timeline-step">
        <div class="timeline-step-dot"></div>
        <div class="timeline-step-content">
          <div class="badge badge-dark" style="margin-bottom: 0.35rem;">Phase 4 • Week 9</div>
          <h4 style="font-weight: 800; font-size: 1.05rem;">Automated Recruiter Talent Pool Promotion</h4>
          <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.25rem;">
            Upon capstone verification, your match rating leaps directly into the <strong>High Priority Review</strong> tier on active recruiter dashboards.
          </p>
        </div>
      </div>
    `;

    this.updateIcons();
  }

  openBlueprintModal() {
    this.openModal('blueprint-modal');
  }

  cloneBlueprintTemplate() {
    this.closeModal('blueprint-modal');
    this.showToast('Git repository template cloned to workspace! Ready to start Phase 3.');
  }

  // =========================================================================
  // 1:1 LEARNING SESSIONS & DYNAMIC COMMISSION ENGINE (2.5% to 10%)
  // =========================================================================
  /**
   * Dynamic Commission Engine:
   * Base commission starts at 2.5% for basic foundational magnitude (1),
   * and scales linearly up to 10.0% for high-magnitude complex topics (100).
   * Formula: Commission % = 2.5 + ((magnitude / 100) * 7.5)
   */
  calculateDynamicCommission(magnitude, baseRate) {
    const mag = Math.max(1, Math.min(100, parseInt(magnitude, 10)));
    const commissionPercent = 2.5 + ((mag / 100) * 7.5);
    const roundedPercent = Math.round(commissionPercent * 100) / 100;
    const feeAmount = Math.round((baseRate * roundedPercent) / 100);
    const totalAmount = baseRate + feeAmount;
    return {
      magnitude: mag,
      percent: roundedPercent,
      fee: feeAmount,
      total: totalAmount
    };
  }

  updateCommissionCalculator() {
    const mentorSelect = document.getElementById('booking-mentor-select');
    const magnitudeSlider = document.getElementById('booking-magnitude-slider');
    const magnitudeBadge = document.getElementById('booking-magnitude-badge');

    const selectedOption = mentorSelect.options[mentorSelect.selectedIndex];
    const baseRate = parseInt(selectedOption.getAttribute('data-rate'), 10) || 1500;
    const magnitude = parseInt(magnitudeSlider.value, 10);

    let tierLabel = 'Foundational';
    if (magnitude > 35 && magnitude <= 70) tierLabel = 'Intermediate';
    else if (magnitude > 70) tierLabel = 'High-Magnitude Advanced';

    magnitudeBadge.textContent = `Magnitude: ${magnitude} (${tierLabel})`;

    const calc = this.calculateDynamicCommission(magnitude, baseRate);

    document.getElementById('calc-base-rate').textContent = `₹${baseRate.toLocaleString()}`;
    document.getElementById('calc-commission-rate').textContent = `${calc.percent.toFixed(2)}% (₹${calc.fee})`;
    document.getElementById('calc-total-payable').textContent = `₹${calc.total.toLocaleString()}`;

    const noteEl = document.querySelector('.commission-formula-note span');
    if (noteEl) {
      noteEl.textContent = `Formula: 2.5% + ((${magnitude}/100) × 7.5%) = ${calc.percent.toFixed(2)}% dynamic platform fee`;
    }
  }

  render1on1Sessions() {
    // Render Mentors Grid
    const grid = document.getElementById('mentors-grid-container');
    if (grid) {
      grid.innerHTML = this.state.peers.map(p => `
        <div class="card" style="display: flex; flex-direction: column; gap: 1rem;">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <div class="peer-avatar" style="width: 44px; height: 44px; font-size: 1rem;">${p.name.split(' ').map(n=>n[0]).join('')}</div>
            <div>
              <div style="font-weight: 800; font-size: 1rem;">${p.name}</div>
              <div style="font-size: 0.8rem; color: var(--text-muted);">${p.role}</div>
            </div>
          </div>
          <div style="font-size: 0.85rem; color: var(--text-secondary);">
            Expertise: ${Object.keys(p.skills).slice(0, 3).join(', ')}
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: auto; padding-top: 0.75rem; border-top: 1px solid var(--border-subtle);">
            <div>
              <span style="font-size: 0.75rem; color: var(--text-muted);">Base Rate</span>
              <div style="font-weight: 800;">₹${p.hourlyRate}/hr</div>
            </div>
            <button class="btn-yellow btn-sm" onclick="app.openBookingModalForPeer('${p.id}')">
              <span>Book 1:1 Session</span>
            </button>
          </div>
        </div>
      `).join('');
    }

    // Render My Sessions Table
    const tbody = document.getElementById('my-sessions-tbody');
    if (tbody) {
      tbody.innerHTML = this.state.bookedSessions.map(s => `
        <tr>
          <td style="font-family: monospace; font-weight: 700;">${s.id}</td>
          <td style="font-weight: 700;">${s.mentorName}</td>
          <td>${s.topic}</td>
          <td><span class="badge badge-dark">Mag: ${s.magnitude}</span></td>
          <td>₹${s.baseRate}</td>
          <td style="color: #B45309; font-weight: 700;">${s.commissionPercent}% (₹${s.commissionAmount})</td>
          <td style="font-weight: 800;">₹${s.totalPaid}</td>
          <td><span class="badge badge-success">${s.status}</span></td>
        </tr>
      `).join('');
    }
  }

  openBookingModal() {
    this.openModal('booking-modal');
    this.updateCommissionCalculator();
  }

  openBookingModalForPeer(peerId) {
    const select = document.getElementById('booking-mentor-select');
    if (select) {
      select.value = peerId;
    }
    this.openModal('booking-modal');
    this.updateCommissionCalculator();
  }

  openBookingModalForCurrentPeer() {
    this.openBookingModalForPeer(this.state.activePeerRoadmapId);
  }

  proceedToBookingRazorpay() {
    const mentorSelect = document.getElementById('booking-mentor-select');
    const selectedOption = mentorSelect.options[mentorSelect.selectedIndex];
    const mentorName = selectedOption.text.split('(')[0].trim();
    const baseRate = parseInt(selectedOption.getAttribute('data-rate'), 10) || 1500;
    const magnitude = parseInt(document.getElementById('booking-magnitude-slider').value, 10);
    const topic = document.getElementById('booking-topic-input').value;

    const calc = this.calculateDynamicCommission(magnitude, baseRate);

    this.pendingPayment = {
      type: '1on1_session',
      mentorName: mentorName,
      topic: topic,
      magnitude: magnitude,
      baseRate: baseRate,
      commissionPercent: calc.percent,
      commissionAmount: calc.fee,
      totalAmount: calc.total,
      title: `1:1 Session: ${topic}`,
      desc: `Peer: ${mentorName} • Base ₹${baseRate} + Dynamic Platform Fee ${calc.percent}% (₹${calc.fee})`
    };

    this.closeModal('booking-modal');
    this.openRazorpayModal(this.pendingPayment.title, this.pendingPayment.desc, calc.total);
  }

  // =========================================================================
  // SIMULATED RAZORPAY PAYMENT GATEWAY
  // =========================================================================
  openRazorpayModal(itemName, itemDesc, amount) {
    document.getElementById('razorpay-amount-text').textContent = `₹${amount.toLocaleString()}`;
    document.getElementById('razorpay-item-name').textContent = itemName;
    document.getElementById('razorpay-item-desc').textContent = itemDesc;
    document.getElementById('razorpay-btn-label').textContent = `Pay ₹${amount.toLocaleString()}`;

    // Reset views
    document.getElementById('razorpay-body-content').style.display = 'block';
    document.getElementById('razorpay-processing-state').classList.remove('show');
    document.getElementById('razorpay-success-state').classList.remove('show');

    this.openModal('razorpay-modal');
  }

  switchPaymentTab(tabName) {
    document.querySelectorAll('.payment-method-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.payment-content-view').forEach(v => v.classList.remove('active'));

    const activeTab = event.currentTarget;
    if (activeTab) activeTab.classList.add('active');

    const targetView = document.getElementById(`pay-view-${tabName}`);
    if (targetView) targetView.classList.add('active');
  }

  selectUpiApp(btn, appName) {
    document.querySelectorAll('.upi-app-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    document.getElementById('upi-id-input').value = `alex.rivera@ok${appName.toLowerCase()}`;
  }

  executePayment() {
    const bodyContent = document.getElementById('razorpay-body-content');
    const processingState = document.getElementById('razorpay-processing-state');
    const successState = document.getElementById('razorpay-success-state');
    const statusText = document.getElementById('processing-status-text');

    bodyContent.style.display = 'none';
    processingState.classList.add('show');

    // Step 1: Simulated Handshake
    setTimeout(() => {
      statusText.textContent = 'Verifying with bank payment gateway...';
    }, 600);

    // Step 2: Confirmation
    setTimeout(() => {
      statusText.textContent = 'Authorizing transaction & generating token...';
    }, 1100);

    // Step 3: Success
    setTimeout(() => {
      processingState.classList.remove('show');
      successState.classList.add('show');

      const payId = 'pay_' + Math.random().toString(36).substr(2, 9);
      const grossAmount = this.pendingPayment ? this.pendingPayment.totalAmount : 1593;

      document.getElementById('success-pay-id').textContent = payId;
      document.getElementById('success-pay-amount').textContent = `₹${grossAmount.toLocaleString()}`;

      // Record transaction if it was a 1:1 session booking
      if (this.pendingPayment && this.pendingPayment.type === '1on1_session') {
        const newSession = {
          id: `SC-${Math.floor(1000 + Math.random() * 9000)}`,
          mentorName: this.pendingPayment.mentorName,
          topic: this.pendingPayment.topic,
          magnitude: this.pendingPayment.magnitude,
          baseRate: this.pendingPayment.baseRate,
          commissionPercent: this.pendingPayment.commissionPercent,
          commissionAmount: this.pendingPayment.commissionAmount,
          totalPaid: this.pendingPayment.totalAmount,
          status: 'Confirmed'
        };
        this.state.bookedSessions.unshift(newSession);

        // Record in Admin financial log
        this.state.adminFinancialLogs.unshift({
          id: payId,
          student: this.state.userProfile.name,
          item: `1:1 Session with ${this.pendingPayment.mentorName}`,
          magnitude: this.pendingPayment.magnitude,
          commissionRate: this.pendingPayment.commissionPercent,
          fee: this.pendingPayment.commissionAmount,
          gross: this.pendingPayment.totalAmount,
          status: 'Settled'
        });

        this.saveState();
        this.render1on1Sessions();
        this.renderAdminPortal();
      } else if (this.pendingPayment && this.pendingPayment.type === 'marketplace_voucher') {
        // Record course purchase
        this.state.adminFinancialLogs.unshift({
          id: payId,
          student: this.state.userProfile.name,
          item: this.pendingPayment.title,
          magnitude: 70,
          commissionRate: 7.75,
          fee: Math.round(this.pendingPayment.price * 0.0775),
          gross: this.pendingPayment.price,
          status: 'Settled'
        });
        this.state.userProfile.verifiedBadges.push(`${this.pendingPayment.title} (Voucher Active)`);
        this.saveState();
        this.renderStudentDashboard();
        this.renderAdminPortal();
      }

      this.showToast('Razorpay Payment Succeeded! Confirmation stored in ledger.');
    }, 1800);
  }

  dismissPaymentSuccess() {
    this.closeModal('razorpay-modal');
    this.pendingPayment = null;
  }

  // =========================================================================
  // MARKETPLACE & CERTIFICATION VOUCHERS
  // =========================================================================
  renderMarketplace() {
    const grid = document.getElementById('marketplace-courses-grid');
    if (!grid) return;

    grid.innerHTML = this.state.marketplaceVouchers.map(v => `
      <div class="card" style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <div class="badge badge-yellow">Verified Voucher</div>
          <span style="font-weight: 800; font-size: 1.25rem;">₹${v.price}</span>
        </div>
        <h3 style="font-weight: 800; font-size: 1.15rem;">${v.title}</h3>
        <p style="font-size: 0.85rem; color: var(--text-secondary);">${v.desc}</p>
        <div style="display: flex; gap: 0.35rem; flex-wrap: wrap;">
          ${v.tags.map(t => `<span class="badge badge-dark" style="font-size: 0.7rem;">${t}</span>`).join('')}
        </div>
        <div style="margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--border-subtle);">
          <button class="btn-yellow" style="width: 100%;" onclick="app.purchaseVoucher('${v.id}')">
            <i data-lucide="shopping-cart" class="icon-svg"></i>
            <span>Purchase with Razorpay</span>
          </button>
        </div>
      </div>
    `).join('');

    this.updateIcons();
  }

  purchaseVoucher(voucherId) {
    const v = this.state.marketplaceVouchers.find(i => i.id === voucherId);
    if (!v) return;

    this.pendingPayment = {
      type: 'marketplace_voucher',
      voucherId: v.id,
      title: v.title,
      price: v.price
    };

    this.openRazorpayModal(v.title, 'SkillCraft Official Certification Voucher', v.price);
  }

  // =========================================================================
  // GAMIFIED LEADERBOARDS & DAILY STREAK
  // =========================================================================
  renderLeaderboard(filter = 'global') {
    const tbody = document.getElementById('leaderboard-table-tbody');
    if (!tbody) return;

    const data = [
      { rank: 1, name: 'Sarah Chen', role: 'Full Stack Dev', badges: 6, streak: 45, xp: 4890 },
      { rank: 2, name: 'Marcus Vance', role: 'Backend Eng', badges: 5, streak: 38, xp: 4210 },
      { rank: 3, name: 'Elena Rostova', role: 'Frontend Eng', badges: 5, streak: 31, xp: 3950 },
      { rank: 4, name: 'Alex Rivera (You)', role: this.state.userProfile.targetRole, badges: this.state.userProfile.verifiedBadges.length, streak: this.state.userProfile.streak, xp: this.state.userProfile.xp, isUser: true },
      { rank: 5, name: 'Aarav Patel', role: 'AI Platform Eng', badges: 4, streak: 22, xp: 3100 },
      { rank: 6, name: 'David Kim', role: 'Frontend Specialist', badges: 3, streak: 19, xp: 2750 },
      { rank: 7, name: 'Priya Sharma', role: 'Backend Apprentice', badges: 3, streak: 14, xp: 2420 }
    ];

    tbody.innerHTML = data.map(item => `
      <tr style="${item.isUser ? 'background: #FEF9C3; font-weight: 700;' : ''}">
        <td>
          <span class="rank-badge ${item.rank === 1 ? 'rank-1' : item.rank === 2 ? 'rank-2' : item.rank === 3 ? 'rank-3' : 'rank-normal'}">
            ${item.rank}
          </span>
        </td>
        <td style="font-weight: 800;">
          ${item.name} ${item.isUser ? '<span class="badge badge-dark" style="font-size: 0.65rem; margin-left: 0.35rem;">YOU</span>' : ''}
        </td>
        <td style="color: var(--text-secondary);">${item.role}</td>
        <td><span class="badge badge-dark">${item.badges} Badges</span></td>
        <td style="font-weight: 700; color: #B45309;"><i data-lucide="zap" class="icon-svg" style="width: 14px; height: 14px; stroke: #D97706;"></i> ${item.streak} Days</td>
        <td style="font-weight: 800;">${item.xp.toLocaleString()} XP</td>
        <td>
          ${item.isUser ? '<span style="color: var(--text-muted); font-size: 0.8rem;">Current Account</span>' : `
            <button class="btn-sm btn-secondary" onclick="app.generateRoadmapForPeer('${item.name.toLowerCase().split(' ')[0]}', true)">
              <span>Compare Gap</span>
            </button>
          `}
        </td>
      </tr>
    `).join('');

    this.updateIcons();
  }

  filterLeaderboard(mode) {
    this.renderLeaderboard(mode);
    this.showToast(`Leaderboard filtered: ${mode.toUpperCase()} rankings.`);
  }

  executeDailyCheckIn() {
    const prof = this.state.userProfile;
    if (prof.checkedInToday) {
      this.showToast('Already checked in today! Keep learning to maintain your streak.');
      this.closeModal('streak-modal');
      return;
    }

    prof.streak += 1;
    prof.xp += 50;
    prof.checkedInToday = true;

    this.saveState();
    this.renderStudentDashboard();
    this.renderLeaderboard();

    document.getElementById('streak-modal-title').textContent = `${prof.streak}-Day Active Streak!`;
    document.getElementById('streak-modal-today').innerHTML = `<span>Today</span><i data-lucide="check" style="width: 14px; height: 14px;"></i>`;
    document.getElementById('streak-modal-today').style.background = '#DCFCE7';
    document.getElementById('streak-modal-today').style.color = '#166534';
    this.updateIcons();

    this.closeModal('streak-modal');
    this.showToast(`Daily Check-in Successful! Streak incremented to ${prof.streak} Days (+50 XP)`);
  }

  // =========================================================================
  // RECRUITER PORTAL & AUTOMATED MATCHING ENGINE
  // =========================================================================
  calculateMatchScore(candidateSkills, jobWeights) {
    let totalWeightedScore = 0;
    let totalMaxScore = 0;

    for (const [skill, weightObj] of Object.entries(jobWeights)) {
      const weight = weightObj.weight;
      const candidateVal = candidateSkills[skill] || 0;
      totalWeightedScore += candidateVal * weight;
      totalMaxScore += 100 * weight;
    }

    if (totalMaxScore === 0) return 0;
    return Math.round((totalWeightedScore / totalMaxScore) * 100);
  }

  renderRecruiterPortal() {
    const job = this.state.jobs[0];
    document.getElementById('recruiter-active-job-title').textContent = `Role: ${job.title} • ${job.company}`;

    const weightsContainer = document.getElementById('recruiter-job-weights-container');
    if (weightsContainer) {
      weightsContainer.innerHTML = Object.entries(job.weights).map(([skill, obj]) => `
        <span class="weight-tag ${obj.weight >= 4 ? 'weight-high' : obj.weight >= 3 ? 'weight-med' : 'weight-low'}">
          ${skill}: ${obj.level} (x${obj.weight})
        </span>
      `).join('');
    }

    this.renderRecruiterCandidateTable();
  }

  switchRecruiterJob(jobId) {
    const job = this.state.jobs.find(j => j.id === jobId) || this.state.jobs[0];
    document.getElementById('recruiter-active-job-title').textContent = `Role: ${job.title} • ${job.company}`;

    const weightsContainer = document.getElementById('recruiter-job-weights-container');
    if (weightsContainer) {
      weightsContainer.innerHTML = Object.entries(job.weights).map(([skill, obj]) => `
        <span class="weight-tag ${obj.weight >= 4 ? 'weight-high' : obj.weight >= 3 ? 'weight-med' : 'weight-low'}">
          ${skill}: ${obj.level} (x${obj.weight})
        </span>
      `).join('');
    }

    this.renderRecruiterCandidateTable(job);
  }

  renderRecruiterCandidateTable(activeJob = null) {
    const job = activeJob || this.state.jobs[0];
    const tbody = document.getElementById('recruiter-candidates-tbody');
    if (!tbody) return;

    // Combine Alex Rivera with static candidates
    const allCandidates = [
      {
        name: `${this.state.userProfile.name} (Active Candidate)`,
        role: this.state.userProfile.targetRole,
        badges: this.state.userProfile.verifiedBadges.length,
        skills: this.state.userProfile.skills,
        isUser: true
      },
      ...this.state.staticCandidates
    ];

    // Calculate score for each against current job
    const ranked = allCandidates.map(c => {
      const score = this.calculateMatchScore(c.skills, job.weights);
      let tier = 'match-high';
      let priorityText = 'High Priority';
      if (score < 70 && score >= 55) {
        tier = 'match-medium';
        priorityText = 'Moderate Match';
      } else if (score < 55) {
        tier = 'match-low';
        priorityText = 'Skill Gap Identified';
      }
      return { ...c, score, tier, priorityText };
    }).sort((a, b) => b.score - a.score);

    tbody.innerHTML = ranked.map(c => `
      <tr style="${c.isUser ? 'background: #FEF9C3;' : ''}">
        <td>
          <span class="candidate-match-pill ${c.tier}">
            <i data-lucide="${c.score >= 70 ? 'check-circle-2' : 'alert-circle'}" class="icon-svg"></i>
            <span>${c.priorityText}</span>
          </span>
        </td>
        <td style="font-weight: 800;">
          ${c.name}
          <div style="font-size: 0.78rem; color: var(--text-muted); font-weight: 400;">${c.role}</div>
        </td>
        <td>
          <div style="font-weight: 800; font-size: 1.15rem; color: var(--dark-primary);">${c.score}%</div>
          <div style="font-size: 0.72rem; color: var(--text-muted);">Weighted Fit</div>
        </td>
        <td><span class="badge badge-dark">${c.badges} Verified</span></td>
        <td style="font-size: 0.82rem; color: var(--text-secondary);">
          ${Object.entries(c.skills).filter(([k, v]) => v >= 70).map(([k, v]) => `${k} (${v}%)`).join(', ') || 'Foundational'}
        </td>
        <td style="font-size: 0.82rem; color: #B91C1C; font-weight: 600;">
          ${Object.entries(c.skills).filter(([k, v]) => v < 40).map(([k, v]) => `${k} (${v}%)`).join(', ') || 'No Critical Gaps'}
        </td>
        <td>
          <button class="btn-sm btn-primary" onclick="app.interviewCandidate('${c.name}')">
            <span>Invite to Interview</span>
          </button>
        </td>
      </tr>
    `).join('');

    this.updateIcons();
  }

  saveNewJob() {
    const title = document.getElementById('job-title-input').value;
    const company = document.getElementById('job-company-input').value;

    const newJob = {
      id: `job-${this.state.jobs.length + 1}`,
      title: title,
      company: company,
      weights: {
        'Node.js': { level: 'High', weight: 4 },
        'SQL': { level: 'Medium', weight: 3 },
        'React': { level: 'Low', weight: 1 }
      }
    };

    this.state.jobs.unshift(newJob);
    this.saveState();

    const select = document.getElementById('recruiter-job-select');
    const opt = document.createElement('option');
    opt.value = newJob.id;
    opt.textContent = newJob.title;
    select.prepend(opt);
    select.value = newJob.id;

    this.switchRecruiterJob(newJob.id);
    this.closeModal('post-job-modal');
    this.showToast(`New Job '${title}' published! Candidates ranked automatically.`);
  }

  interviewCandidate(name) {
    this.showToast(`Interview invitation & verified assessment link sent to ${name}!`);
  }

  // =========================================================================
  // INSTRUCTOR PORTAL
  // =========================================================================
  renderInstructorPortal() {
    const grid = document.getElementById('instructor-courses-grid');
    if (!grid) return;

    grid.innerHTML = this.state.marketplaceVouchers.map(c => `
      <div class="card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
          <span class="badge badge-success">Active Curriculum</span>
          <span style="font-weight: 800;">₹${c.price}</span>
        </div>
        <h4 style="font-weight: 800; font-size: 1.05rem;">${c.title}</h4>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin: 0.35rem 0 1rem;">${c.desc}</p>
        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.82rem; border-top: 1px solid var(--border-subtle); padding-top: 0.75rem;">
          <span style="color: var(--text-muted);">Enrollments: 216</span>
          <span style="color: #10B981; font-weight: 700;">Earnings: ₹${(c.price * 216 * 0.936).toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
        </div>
      </div>
    `).join('');
  }

  saveQuiz() {
    this.closeModal('quiz-builder-modal');
    this.showToast('Quiz & Coding Assessment published to SkillCraft studio!');
  }

  saveNewCourse() {
    const title = document.getElementById('new-course-title').value;
    const price = parseInt(document.getElementById('new-course-price').value, 10) || 1499;

    this.state.adminModeration.unshift({
      id: `mod-${Date.now()}`,
      title: title,
      author: 'Current Instructor',
      type: 'Course Track',
      status: 'Pending Review'
    });

    this.saveState();
    this.closeModal('create-course-modal');
    this.renderAdminPortal();
    this.showToast(`Course '${title}' submitted for platform moderation!`);
  }

  // =========================================================================
  // ADMIN DASHBOARD & GOVERNANCE
  // =========================================================================
  renderAdminPortal() {
    // User Approvals
    const approvalsTbody = document.getElementById('admin-user-approvals-tbody');
    if (approvalsTbody) {
      approvalsTbody.innerHTML = this.state.adminApprovals.map(u => `
        <tr>
          <td style="font-weight: 800;">${u.name}</td>
          <td><span class="badge badge-dark">${u.role}</span></td>
          <td style="font-size: 0.82rem; color: var(--text-secondary);">${u.credentials}</td>
          <td>
            <span class="badge ${u.status === 'Approved' ? 'badge-success' : 'badge-yellow'}">${u.status}</span>
          </td>
          <td>
            <button class="btn-sm ${u.status === 'Approved' ? 'btn-secondary' : 'btn-primary'}" onclick="app.toggleUserApproval('${u.id}')">
              ${u.status === 'Approved' ? 'Revoke' : 'Approve'}
            </button>
          </td>
        </tr>
      `).join('');
    }

    // Content Moderation
    const moderationTbody = document.getElementById('admin-moderation-tbody');
    if (moderationTbody) {
      moderationTbody.innerHTML = this.state.adminModeration.map(m => `
        <tr>
          <td style="font-weight: 700;">${m.title}</td>
          <td style="color: var(--text-secondary); font-size: 0.82rem;">${m.author}</td>
          <td><span class="badge badge-dark">${m.type}</span></td>
          <td>
            <span class="badge ${m.status === 'Approved' ? 'badge-success' : 'badge-yellow'}">${m.status}</span>
          </td>
          <td>
            <button class="btn-sm ${m.status === 'Approved' ? 'btn-secondary' : 'btn-yellow'}" onclick="app.toggleContentApproval('${m.id}')">
              ${m.status === 'Approved' ? 'Reject' : 'Approve'}
            </button>
          </td>
        </tr>
      `).join('');
    }

    // Financial & Dynamic Commission Audit Logs
    const financialTbody = document.getElementById('admin-financial-audit-tbody');
    if (financialTbody) {
      financialTbody.innerHTML = this.state.adminFinancialLogs.map(f => `
        <tr>
          <td style="font-family: monospace; font-size: 0.82rem; font-weight: 700;">${f.id}</td>
          <td style="font-weight: 700;">${f.student}</td>
          <td style="font-size: 0.85rem;">${f.item}</td>
          <td><span class="badge badge-yellow">Mag: ${f.magnitude}</span></td>
          <td style="color: #B45309; font-weight: 700;">${f.commissionRate}%</td>
          <td style="font-weight: 800; color: #10B981;">₹${f.fee}</td>
          <td style="font-weight: 800;">₹${f.gross}</td>
          <td><span class="badge badge-success">${f.status}</span></td>
        </tr>
      `).join('');
    }

    this.updateIcons();
  }

  toggleUserApproval(userId) {
    const user = this.state.adminApprovals.find(u => u.id === userId);
    if (!user) return;
    user.status = user.status === 'Approved' ? 'Pending' : 'Approved';
    this.saveState();
    this.renderAdminPortal();
    this.showToast(`User status updated: ${user.name} is now ${user.status}`);
  }

  toggleContentApproval(contentId) {
    const item = this.state.adminModeration.find(m => m.id === contentId);
    if (!item) return;
    item.status = item.status === 'Approved' ? 'Pending Review' : 'Approved';
    this.saveState();
    this.renderAdminPortal();
    this.showToast(`Content moderation updated: ${item.title} is now ${item.status}`);
  }

  refreshAdminData() {
    this.renderAdminPortal();
    this.showToast('Platform metrics and live telemetry refreshed.');
  }

  // =========================================================================
  // NOTIFICATIONS FLYOUT
  // =========================================================================
  renderNotifications() {
    const container = document.getElementById('notification-items-container');
    if (!container) return;

    const notifs = [
      {
        title: 'New Recruiter Profile View',
        desc: 'Stripe Integrations viewed your verified React & SQL vectors.',
        time: '12m ago',
        unread: true
      },
      {
        title: '1:1 Session Confirmed',
        desc: 'Sarah Chen accepted your pairing request for tomorrow 6:00 PM.',
        time: '1h ago',
        unread: true
      },
      {
        title: 'Roadmap Milestone Unlocked',
        desc: 'E-commerce microservice blueprint ready to fork.',
        time: '3h ago',
        unread: false
      }
    ];

    container.innerHTML = notifs.map(n => `
      <div class="notification-item ${n.unread ? 'unread' : ''}">
        <i data-lucide="${n.unread ? 'bell-ring' : 'bell'}" class="icon-svg" style="stroke: ${n.unread ? '#EAB308' : '#94A3B8'};"></i>
        <div>
          <div style="font-weight: 700; font-size: 0.85rem;">${n.title}</div>
          <div style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 0.15rem;">${n.desc}</div>
          <div style="font-size: 0.7rem; color: var(--text-muted); margin-top: 0.25rem;">${n.time}</div>
        </div>
      </div>
    `).join('');

    this.updateIcons();
  }

  toggleNotifications() {
    const panel = document.getElementById('notification-panel');
    if (panel) panel.classList.toggle('show');
  }

  toggleProfileMenu() {
    this.openModal('edit-profile-modal');
  }

  // =========================================================================
  // GLOBAL SEARCH COMMAND PALETTE (CTRL + K)
  // =========================================================================
  setupKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        this.openModal('search-modal');
        const input = document.getElementById('palette-search-input');
        if (input) {
          input.focus();
          this.handleGlobalSearch('');
        }
      } else if (e.key === 'Escape') {
        document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('show'));
        const notif = document.getElementById('notification-panel');
        if (notif) notif.classList.remove('show');
        const roleMenu = document.getElementById('role-dropdown-menu');
        if (roleMenu) roleMenu.classList.remove('show');
      }
    });
  }

  handleGlobalSearch(query) {
    const q = query.toLowerCase().trim();
    const container = document.getElementById('palette-results-container');
    if (!container) return;

    const searchable = [
      { type: 'Peer Profile', title: 'Sarah Chen (Junior Dev @ TechCorp)', action: () => { this.switchPortal('student', 'roadmaps'); this.generateRoadmapForPeer('sarah'); } },
      { type: 'Peer Profile', title: 'Marcus Vance (Backend Eng @ CloudScale)', action: () => { this.switchPortal('student', 'roadmaps'); this.generateRoadmapForPeer('marcus'); } },
      { type: 'Peer Profile', title: 'Elena Rostova (Frontend Eng @ DesignHub)', action: () => { this.switchPortal('student', 'roadmaps'); this.generateRoadmapForPeer('elena'); } },
      { type: 'Peer Profile', title: 'Aarav Patel (AI Engineer @ NeoLabs)', action: () => { this.switchPortal('student', 'roadmaps'); this.generateRoadmapForPeer('aarav'); } },
      { type: '1:1 Session', title: 'Book 1:1 Live Pairing (Dynamic Commission)', action: () => { this.switchPortal('student', 'sessions'); this.openBookingModal(); } },
      { type: 'Recruiter Role', title: 'Junior Full Stack Developer Listing', action: () => { this.switchPortal('recruiter', 'matching'); } },
      { type: 'Certification', title: 'Full-Stack Production Readiness Voucher', action: () => { this.switchPortal('student', 'marketplace'); } },
      { type: 'Gamification', title: 'Daily Streak Check-in & Leaderboard', action: () => { this.switchPortal('student', 'leaderboard'); this.openModal('streak-modal'); } }
    ];

    const results = q ? searchable.filter(s => s.title.toLowerCase().includes(q) || s.type.toLowerCase().includes(q)) : searchable;

    container.innerHTML = results.map((r, idx) => `
      <div class="palette-item" onclick="app.executeSearchResult(${idx})">
        <div>
          <div style="font-weight: 700; font-size: 0.9rem;">${r.title}</div>
          <div style="font-size: 0.75rem; color: var(--text-muted);">${r.type}</div>
        </div>
        <i data-lucide="arrow-right" class="icon-svg"></i>
      </div>
    `).join('');

    this._searchResults = results;
    this.updateIcons();
  }

  executeSearchResult(idx) {
    if (this._searchResults && this._searchResults[idx]) {
      this.closeModal('search-modal');
      this._searchResults[idx].action();
    }
  }

  // =========================================================================
  // MODAL & TOAST HELPERS
  // =========================================================================
  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('show');
    this.updateIcons();
  }

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('show');
  }

  showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <i data-lucide="check-circle" class="icon-svg" style="stroke: #EAB308;"></i>
      <span>${message}</span>
    `;

    container.appendChild(toast);
    this.updateIcons();

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(20px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }
}

// Global Application Instance
let app;
document.addEventListener('DOMContentLoaded', () => {
  app = new SkillCraftApp();
});
