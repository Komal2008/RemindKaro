# RemindKaro

> **The Active AI-Powered Reminder & Intelligent Urgency Escalation Assistant**

## RemindKaro is a next-generation deadline assistant designed to help developers, students, freelancers, and professionals capture, prioritize, and complete critical tasks before they become overdue. Unlike traditional productivity tools that send easily dismissible notifications, RemindKaro implements **active engagement** using custom voice/text parsing and an aggressive **urgency escalation** system.

## Product Showcases

<p align="center">
  <img src="https://github.com/user-attachments/assets/ce05e1c3-21d9-4d7f-b40b-858985a57951" alt="RemindKaro Dark-Canvas Dashboard View" width="100%" />
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/056788c4-b39a-4583-a3ad-5e21efb09624" alt="RemindKaro Smart Tasks Analytics" width="90%" />
</p>

---

## Key Features

- **Frictionless Voice & NLP Entry:** Speak or type natural language inputs (e.g., _"remind me to review the pull request tomorrow at 3 PM"_). The system extracts title, category, priority, and parsed deadline timestamps instantly.
- **Intelligent Urgency Escalation:** If you ignore notifications, the dashboard's design transitions automatically across severity states (`Upcoming` ➔ `Today` ➔ `Urgent` ➔ `Critical` ➔ `Overdue`) with elevating color indicators, typography alerts, and increased alert frequencies.
- **Premium Dark-Canvas Aesthetics:** Linear-inspired interfaces utilizing bespoke HSL slate-canvas tones, hairline borders, smooth micro-animations, and subtle glowing gradients.
- **Seamless Payments:** Integrated Razorpay / Stripe checkout flow supporting monthly, yearly, and lifetime premium licenses.
- **Multi-Channel Nudges:** Capable of triggering fallback nudges across email, SMS, WhatsApp, and Telegram bots when a critical task is ignored.

---

## Technology Stack

| Layer                   | Technologies                | Role & Purpose                                                                       |
| :---------------------- | :-------------------------- | :----------------------------------------------------------------------------------- |
| **Frontend Framework**  | `Next.js 16.2` (React 19)   | Server-side rendering, swift client routing, search engine optimization.             |
| **Styling & Layout**    | `CSS Modules & TailwindCSS` | Highly flexible dark canvas surfaces, zero-runtime CSS, responsive grid layouts.     |
| **Animation System**    | `Framer Motion`             | Fluid dashboard entry transitions, modal spring physics, and slide-out hover states. |
| **State & Icons**       | `Lucide React`              | Premium responsive iconography suite matching the design system.                     |
| **Backend Integration** | `Next.js Server Proxy`      | Safe proxying of tasks, voice processing, and session verification.                  |
| **Payment Gateways**    | `Razorpay` & `Stripe`       | Enterprise-grade checkout flows and billing subscription lifecycle.                  |

---

## Local Development Setup

To run the web interface locally, follow these steps:

### 1. Prerequisites

Ensure you have **Node.js 20+** installed on your machine.

### 2. Clone and Install Dependencies

```bash
git clone https://github.com/Pantkartik/Remind-v1.22.10.git
cd Remind-v1.22.10
npm install
```

### 3. Configure Environment Variables

Copy the `.env.example` file to create a local environment file:

```bash
cp .env.example .env.local
```

Open `.env.local` and populate the necessary placeholder credentials (e.g., Database URLs, JWT secrets, payment sandbox keys).

### 4. Running the Dev Server

Launch the development server:

```bash
npm run dev
```

The application will be running locally at `http://localhost:3000`.

---

## Design System Tokens

RemindKaro is built on strict design rules inspired by premium dark-theme layouts. We avoid flat pure blacks (`#000000`) and instead utilize slate-blue canvas values:

```css
:root {
  /* Surface colors */
  --linear-canvas: #010102; /* Canvas backdrop */
  --linear-surface-1: #0f1011; /* Primary Card backgrounds */
  --linear-surface-2: #141516; /* Featured cards & hover fills */
  --linear-hairline: #23252a; /* Delicate 1px dividers */

  /* Interactive / Branding Hues */
  --linear-primary: #5e6ad2; /* Lavender-Blue Accent */
  --linear-primary-hover: #828fff; /* Interactive highlight */

  /* Urgency Colors */
  --color-urgent-bg: #831843; /* Urgent background glow */
  --color-urgent-accent: #e11d48; /* High priority Crimson */
  --color-medium-accent: #fbbf24; /* Medium priority Amber */
  --color-low-accent: #16a34a; /* Low priority Emerald */
}
```

---

## Contribution Guidelines

We welcome community contributions! Whether you are fixing a small CSS layout issue, translating components, or introducing major API integrations, please follow these guidelines:

1.  **Read the Community Health Docs:** Review our [CONTRIBUTING.md](CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).
2.  **Explore Active Issues:** Browse the [ISSUES.md](ISSUES.md) backlog for curated, beginner-friendly **Good First Issues**!
3.  **Create a Feature Branch:** Always check out a clear branch name (e.g., `feature/task-sorting` or `bugfix/voice-nlp-date`).
4.  **Keep it Clean:** Maintain our ESLint configuration, run `npm run format` before staging, and make sure files remain highly cohesive (under 300 lines).

For any security vulnerabilities or confidential disclosure, please refer to our [SECURITY.md](SECURITY.md) guidelines.

## ❤️ Contributors

Thanks to all contributors who helped build RemindKaro!

<!-- START_CONTRIBUTORS -->

<table align="center">
  <tr>
    <td align="center" valign="top" width="14%">
      <a href="https://github.com/Pantkartik">
        <img src="https://avatars.githubusercontent.com/u/181591353?v=4&s=100" width="80px" style="border-radius: 50%;" alt="Pantkartik"/>
        <br />
        <sub><b>Pantkartik</b></sub>
      </a>
      <br />
      <sub>Contributions: 66</sub>
    </td>
    <td align="center" valign="top" width="14%">
      <a href="https://github.com/Jyotiiii3003">
        <img src="https://avatars.githubusercontent.com/u/170449154?v=4&s=100" width="80px" style="border-radius: 50%;" alt="Jyotiiii3003"/>
        <br />
        <sub><b>Jyotiiii3003</b></sub>
      </a>
      <br />
      <sub>Contributions: 2</sub>
    </td>
    <td align="center" valign="top" width="14%">
      <a href="https://github.com/ayushi-wq">
        <img src="https://avatars.githubusercontent.com/u/179132370?v=4&s=100" width="80px" style="border-radius: 50%;" alt="ayushi-wq"/>
        <br />
        <sub><b>ayushi-wq</b></sub>
      </a>
      <br />
      <sub>Contributions: 1</sub>
    </td>
    <td align="center" valign="top" width="14%">
      <a href="https://github.com/darad124">
        <img src="https://avatars.githubusercontent.com/u/70760702?v=4&s=100" width="80px" style="border-radius: 50%;" alt="darad124"/>
        <br />
        <sub><b>darad124</b></sub>
      </a>
      <br />
      <sub>Contributions: 1</sub>
    </td>
    <td align="center" valign="top" width="14%">
      <a href="https://github.com/Sryh-srm">
        <img src="https://avatars.githubusercontent.com/u/181099012?v=4&s=100" width="80px" style="border-radius: 50%;" alt="Sryh-srm"/>
        <br />
        <sub><b>Sryh-srm</b></sub>
      </a>
      <br />
      <sub>Contributions: 1</sub>
    </td>
  </tr>
</table>

<!-- END_CONTRIBUTORS -->

---

## 📈 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Remind-Karo/RemindKaro&type=Date)](https://star-history.com/#Remind-Karo/RemindKaro&Date)

---

## License & Attribution

This project is open-source and released under the **MIT License**. See [LICENSE](LICENSE) for full details.

Developed with 💜 by [@Pantkartik](https://github.com/Pantkartik). For custom assistance or premium deployment integrations, email `kartikpant.kp69@gmail.com`.
