# 🎯 RemindKaro — Open Source Contributor Issue Board

Welcome to the **RemindKaro** contributor roadmap! This board contains beginner-friendly issues, intermediate challenges, and advanced features designed for **Social Summer of Code (SSOC) 2026** and all open-source developers.

---

## 🏷️ Guidelines for Contributors

- **Labels/Tags:** Look for the tags `ssoc2026`, `easy`, `medium`, or `hard` to identify task scope.
- **Claiming an Issue:** Comment on the GitHub issue using `&claim` or `&assign` to let the maintainers know you are working on it.
- **PR Standards:** Please format your code with `npm run format` and verify it passes `npm run lint` before opening a pull request.

---

## 🟢 Easy Issues (`ssoc2026` | `easy` | `good-first-issue`)

_Perfect for first-time contributors or developers getting familiar with the Next.js/Tailwind CSS project structure._

### 1. ssoc-e1: Word Count & Character Limit on Task Descriptions

- **Tags:** `ssoc2026`, `easy`, `good-first-issue`, `enhancement`
- **Description:** Currently, task descriptions can be of infinite length, which distorts card sizing.
- **Goal:** Display a character counter (e.g., `0 / 200`) below the description field in both the `TaskForm` modal. Limit the input to 200 characters maximum.
- **Acceptance Criteria:**
  - Character counter updates dynamically as the user types.
  - Form validation blocks submitting if description exceeds 200 characters.
  - Visual alert changes color to amber when reaching 180+ characters.

### 2. ssoc-e2: Custom Sound Alert Toggle

- **Tags:** `ssoc2026`, `easy`, `good-first-issue`, `ui`
- **Description:** The dashboard plays alarm chimes for critical tasks, but users should be able to disable them.
- **Goal:** Add a simple toggle button in the dashboard header or user profile sidebar to mute/unmute notification chime sounds.
- **Acceptance Criteria:**
  - Toggle state is persisted in `localStorage`.
  - The sound engine respects the user's toggle state before executing play chime callbacks.

### 3. ssoc-e3: Copy Task Link to Clipboard

- **Tags:** `ssoc2026`, `easy`, `good-first-issue`, `feature`
- **Description:** Users want to quickly share a deadline details outline with teammates.
- **Goal:** Add a "Copy Share Link" button on the `TaskCard` action controls that copies a summary of the task details to the clipboard.
- **Acceptance Criteria:**
  - Clicking the button copies a formatted string: `[Category] Task: Title - Due: Date` to clipboard.
  - Triggers a brief "Copied!" tooltip or toast notification.

### 4. ssoc-e4: Drag-and-Drop Task Sorting Option

- **Tags:** `ssoc2026`, `easy`, `good-first-issue`, `ui`
- **Description:** Tasks are currently auto-sorted. We want a simple dropdown selector to change sort criteria.
- **Goal:** Add a dropdown menu at the top of the dashboard to let users sort tasks by: `Priority`, `Category`, or `Date Created`.
- **Acceptance Criteria:**
  - Dropdown is styled to match the dark slate theme design system.
  - Changing the dropdown selection immediately resort tasks locally.

### 5. ssoc-e5: Escape Key to Dismiss Modals

- **Tags:** `ssoc2026`, `easy`, `good-first-issue`, `a11y`
- **Description:** The modal overlays should close cleanly when pressing the `Escape` keyboard shortcut.
- **Goal:** Add window-level keyboard event listeners to dismiss the Add and Edit task modals.
- **Acceptance Criteria:**
  - Pressing `Esc` closes any active modal overlay.
  - Does not throw state errors if a modal is already closed.

### 6. ssoc-e6: Export Task List as JSON

- **Tags:** `ssoc2026`, `easy`, `good-first-issue`, `feature`
- **Description:** Users want a quick option to export their tasks for backup.
- **Goal:** Implement a button in the profile or settings module to download all active tasks as a formatted `.json` file.
- **Acceptance Criteria:**
  - Clicking triggers a file download named `remindkaro-export-[date].json`.
  - Includes task titles, deadlines, priorities, and statuses.

### 7. ssoc-e7: Categorized Custom HSL Badges

- **Tags:** `ssoc2026`, `easy`, `good-first-issue`, `ui`
- **Description:** Category tags all look similar. We want distinct, premium colors for Work, Personal, Shopping, etc.
- **Goal:** Assign unique subtle HSL color backgrounds to different task category badges.
- **Acceptance Criteria:**
  - `Work` category uses a subtle lavender tint.
  - `Personal` category uses a subtle emerald tint.
  - `Urgent` tasks display with soft crimson accent rings.

### 8. ssoc-e8: Clear Completed Tasks Button

- **Tags:** `ssoc2026`, `easy`, `good-first-issue`, `feature`
- **Description:** No quick way to clear tasks that have been completed.
- **Goal:** Add a "Clear Completed" button that bulk-archives all tasks with `Done` or `completed` status.
- **Acceptance Criteria:**
  - Button only displays if there are tasks with a completed status.
  - Clicking triggers a bulk update API request to change status to `archived` or soft-delete.

### 9. ssoc-e9: Contributor Guidelines & Code of Conduct Quick Link

- **Tags:** `ssoc2026`, `easy`, `good-first-issue`, `documentation`
- **Description:** New contributors often miss the repository guidelines inside `CONTRIBUTING.md` and `CODE_OF_CONDUCT.md`. We want to make them highly visible and accessible.
- **Goal:** Add a sleek footer link bar or a sidebar section under the user dashboard menu that provides direct clickable links to local documentation files (`CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, and `SECURITY.md`).
- **Acceptance Criteria:**
  - Modern slate typography matching the core design system.
  - Direct links opening safely in new tabs.
  - Smooth hover transitions.

### 10. ssoc-e10: Interactive FAQ Modal

- **Tags:** `ssoc2026`, `easy`, `good-first-issue`, `documentation`, `ui`
- **Description:** First-time users often have questions about voice parsing commands and categories.
- **Goal:** Add an interactive FAQ modal triggered by a small question mark icon (`❔`) next to the "Your Tasks" header.
- **Acceptance Criteria:**
  - Explains voice command keywords (e.g., "today", "tomorrow", "urgent").
  - Fully responsive dialog adhering to the Escape key dismiss listener.

### 11. ssoc-e11: Mobile Layout Adjustments & Touch Navigation

- **Tags:** `ssoc2026`, `easy`, `good-first-issue`, `responsive`, `ui`
- **Description:** The dashboard navigation and list panels currently look cramped on screens below `640px`.
- **Goal:** Address mobile responsiveness across the dashboard workspace using Tailwind/Vanilla CSS media queries. Ensure the side panels collapse nicely and action buttons remain fully touch-accessible.
- **Acceptance Criteria:**
  - Task cards resize cleanly to full width on screens `< 768px`.
  - Header grid stacks vertically under `640px` to prevent text truncation.
  - Action buttons (edit, delete, copy) increase active touch hit-box sizes to at least `44px` on mobile.

### 12. ssoc-e12: Dark/Light Mode Theme Transition Smoothness

- **Tags:** `ssoc2026`, `easy`, `good-first-issue`, `ui`
- **Description:** Changing the theme causes sudden flashing on slow browser loading.
- **Goal:** Add CSS transition rules for background, border, and text colors to the globals selector when swapping between dark and light modes.
- **Acceptance Criteria:**
  - Smooth `0.3s ease` transition animations for background colors, text colors, and borders site-wide.
  - Prevents flashing during server-side initial page hydration.

### 13. ssoc-e13: Display App Version in Sidebar Footer

- **Tags:** `ssoc2026`, `easy`, `good-first-issue`, `ui`
- **Description:** Users and developers need a quick way to know the running version of the software.
- **Goal:** Render a small version string (e.g., `v1.22.10`) matching package.json in the corner footer of the dashboard sidebar.
- **Acceptance Criteria:**
  - Text styled in subtle, dim low-opacity typography (`font-size: 11px`).
  - Fetched or read dynamically so that updates in package.json automatically propagate.

### 14. ssoc-e14: Form Validation for Task Category Select

- **Tags:** `ssoc2026`, `easy`, `good-first-issue`, `enhancement`
- **Description:** Users can bypass selecting a category, resulting in blank parameters.
- **Goal:** Mark category selector elements inside task creation forms as `required` with styled error borders when left blank.
- **Acceptance Criteria:**
  - Triggers standard HTML5 form validation warning.
  - Highlights input with a thin red active state ring when submission is attempted without selection.

### 15. ssoc-e15: CSS Glassmorphism Hover Glow on Task Cards

- **Tags:** `ssoc2026`, `easy`, `good-first-issue`, `ui`
- **Description:** Task cards look slightly flat when hovered. We want a modern glassmorphic look.
- **Goal:** Add subtle backdrop-blur and box-shadow glow transitions to `TaskCard` elements during mouse hover.
- **Acceptance Criteria:**
  - Smooth transition overlay using CSS properties (`transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`).
  - Highlighted card gains a soft, glowing color matching its priority.

### 16. ssoc-e16: Add Tooltip for Voice Microphone Button

- **Tags:** `ssoc2026`, `easy`, `good-first-issue`, `a11y`
- **Description:** Non-sighted or mouse-only users do not know what the microphone icon represents immediately.
- **Goal:** Add standard hover tooltips and rich `aria-label` tags to the voice-mic button elements.
- **Acceptance Criteria:**
  - Rich native SVG tooltip says "Click to speak voice command".
  - Properly read out by browser screen-readers.

### 17. ssoc-e17: Dynamic Document Title Updates for Pending Tasks

- **Tags:** `ssoc2026`, `easy`, `good-first-issue`, `feature`
- **Description:** Users working in other tabs often forget their task backlog queue.
- **Goal:** Dynamically update the browser tab title (e.g., `(3) RemindKaro`) to display the number of active pending tasks.
- **Acceptance Criteria:**
  - Document title updates dynamically as tasks are marked done or created.
  - Automatically reverts to normal title when active pending tasks equal zero.

### 18. ssoc-e18: Add Scroll-to-Top Button on Long Dashboard Lists

- **Tags:** `ssoc2026`, `easy`, `good-first-issue`, `ui`
- **Description:** Users with 20+ tasks must scroll extensively to return to primary controls.
- **Goal:** Add a floating scroll-to-top button in the bottom right corner when page scrolls down past 400px.
- **Acceptance Criteria:**
  - Button fades in and out smoothly using CSS transitions.
  - Clicking triggers smooth window scrolling to page top coordinates.

### 19. ssoc-e19: Add "Mark All as Completed" Button

- **Tags:** `ssoc2026`, `easy`, `good-first-issue`, `feature`
- **Description:** Clearing tasks one by one is repetitive when finishing a large project.
- **Goal:** Implement a secondary button next to list stats that changes the status of all active pending tasks to `completed`.
- **Acceptance Criteria:**
  - Requests quick double-click verification or prompt before running mutations.
  - Updates local states and triggers bulk PUT queries instantly.

### 20. ssoc-e20: Create Pre-commit Hook for CSS Modules check

- **Tags:** `ssoc2026`, `easy`, `good-first-issue`, `chore`
- **Description:** Contributors sometimes break CSS layout scopes by styling with hardcoded class strings.
- **Goal:** Add a script that verifies matching CSS module declarations inside git hooks.
- **Acceptance Criteria:**
  - Linting script flags direct global styles in component folders.
  - Intercepted by Husky hook prior to active commits.

### 21. ssoc-e21: Prevent Form Submission with Past Deadlines

- **Tags:** `ssoc2026`, `easy`, `good-first-issue`, `feature`
- **Description:** Users can accidentally set a task's deadline to a past date, immediately triggering an "Overdue" status.
- **Goal:** Restrict task form deadline selection to current or future timestamps.
- **Acceptance Criteria:**
  - Form validation blocks submission if chosen timestamp is earlier than local client system time.
  - Inputs highlight with a warning label: "Deadline must be in the future".

### 22. ssoc-e22: Simple Search Bar Clear Button

- **Tags:** `ssoc2026`, `easy`, `good-first-issue`, `ui`
- **Description:** No fast way to wipe entered text from the task search bar.
- **Goal:** Add a small "✕" button inside the search field that appears only when text is entered, allowing quick text clearance.
- **Acceptance Criteria:**
  - Clicking wipes text inputs instantly and resets local list filters.
  - Fades out cleanly when input is empty.

### 23. ssoc-e23: Custom Accent HSL Borders on High Priority Tasks

- **Tags:** `ssoc2026`, `easy`, `good-first-issue`, `ui`
- **Description:** High priority tasks should stand out visually without being overly abrasive.
- **Goal:** Apply a sleek left hairline border with active high-priority crimson styling to urgent cards.
- **Acceptance Criteria:**
  - 4px thick left vertical border in slate-crimson accent.
  - Integrates cleanly with card border-radius without layout clipping.

### 24. ssoc-e24: Add Security Disclosure Quick Link in Settings

- **Tags:** `ssoc2026`, `easy`, `good-first-issue`, `documentation`
- **Description:** White-hat hackers need a clear path to read safety policies under `SECURITY.md`.
- **Goal:** Add a tiny link inside settings menu to open SECURITY.md policies.
- **Acceptance Criteria:**
  - Rendered inline with other compliance menus.
  - Securely loads the documentation layout.

### 25. ssoc-e25: Hover Sound Effect Option on Dashboard Icons

- **Tags:** `ssoc2026`, `easy`, `good-first-issue`, `ui`
- **Description:** Adding micro-haptics or sound options gives the dashboard a tactile feel.
- **Goal:** Play a quiet, high-frequency click chime during hover events when the audio option is enabled.
- **Acceptance Criteria:**
  - Volume is highly subtle and does not distract.
  - Follows mute switch settings state.

### 26. ssoc-e26: Form Default Date Autofill to Next Hour

- **Tags:** `ssoc2026`, `easy`, `good-first-issue`, `enhancement`
- **Description:** Adding a task opens with a blank date, forcing manual entry.
- **Goal:** Pre-populate the new task deadline input with a timestamp exactly 1 hour from the current client time.
- **Acceptance Criteria:**
  - Pre-filled timestamp automatically reflects in `datetime-local` format.
  - Simplifies single-click rapid task creation.

### 27. ssoc-e27: Dynamic Copyright Year Footer Update

- **Tags:** `ssoc2026`, `easy`, `good-first-issue`, `documentation`
- **Description:** The landing page copyright footer displays a static year that will become outdated.
- **Goal:** Dynamically output the current year inside the landing page footer.
- **Acceptance Criteria:**
  - Dynamically runs `new Date().getFullYear()` under React layout load.
  - Renders inline with license guidelines.

### 28. ssoc-e28: Add "No Description Provided" Visual Placeholder

- **Tags:** `ssoc2026`, `easy`, `good-first-issue`, `ui`
- **Description:** Tasks without description metadata display empty gaps in cards.
- **Goal:** Render a light italicized placeholder string saying "No description added" when empty.
- **Acceptance Criteria:**
  - Placeholder styled in slate-grey with low opacity.
  - Does not distend grid sizes.

### 29. ssoc-e29: Dashboard Filter Badge Glow

- **Tags:** `ssoc2026`, `easy`, `good-first-issue`, `ui`
- **Description:** Filter groups lack high-fidelity active cues.
- **Goal:** Add a thin neon accent glow around active filter button controls (All / Urgent / Completed).
- **Acceptance Criteria:**
  - Active button is outlined in slate-lavender with shadow blur.
  - Transitions smoothly when filter focus swaps.

### 30. ssoc-e30: Add Contribution Leaderboard Link

- **Tags:** `ssoc2026`, `easy`, `good-first-issue`, `documentation`
- **Description:** Contributors want a fast route to see where they rank.
- **Goal:** Put a visible contribution scoreboard URL link inside the CONTRIBUTING file.
- **Acceptance Criteria:**
  - Clear markdown link directed to active Github metrics.
  - Positioned visible near developer guidelines.

---

## 🟡 Medium Issues (`ssoc2026` | `medium`)

_Requires intermediate familiarity with React hooks, local state synchronization, API proxies, and DB queries._

### 31. ssoc-m1: Batch/Bulk Task Actions

- **Tags:** `ssoc2026`, `medium`, `feature`
- **Description:** Managing tasks one-by-one is slow when cleaning up.
- **Goal:** Add checkboxes to each `TaskCard` and a floating "Bulk Operations" action bar when one or more tasks are selected.
- **Acceptance Criteria:**
  - Contributors can select multiple tasks.
  - The bar lets users bulk-delete or bulk-change priority levels in a single action.
  - Smooth entry/exit animations for the floating action bar.

### 32. ssoc-m2: Task Completion Streak Tracker

- **Tags:** `ssoc2026`, `medium`, `gamification`
- **Description:** To incentivize consistency, users want a gamified habit/task completion streak counter.
- **Goal:** Calculate the consecutive number of days a user has completed at least one task and render a streak icon (e.g. `🔥 7 Days`) on their profile.
- **Acceptance Criteria:**
  - Streak calculation logic is robust and runs on the dashboard dashboard load.
  - Shows fire emoji with a glowing animation when a streak is active.

### 33. ssoc-m3: Weekly Digest Email System

- **Tags:** `ssoc2026`, `medium`, `backend`
- **Description:** Send users a periodic roundup of their task productivity.
- **Goal:** Implement a Cron-scheduled email builder that checks database tasks and emails a summary of finished vs. overdue items.
- **Acceptance Criteria:**
  - Respects email notification opt-in/opt-out settings.
  - Utilizes clean, premium-designed transactional email templates.

### 34. ssoc-m4: Deadline Heatmap Chart

- **Tags:** `ssoc2026`, `medium`, `ui`
- **Description:** Users want to visually understand which days are heavily congested.
- **Goal:** Implement a simple Github-style calendar contribution grid (heatmap) displaying deadline intensity (days with high task volume).
- **Acceptance Criteria:**
  - Renders cleanly on a `/dashboard/analytics` panel.
  - Blocks light up with deeper tints of lavender or amber for days containing multiple critical deadlines.

### 35. ssoc-m5: Keyboard Navigation Shortcuts

- **Tags:** `ssoc2026`, `medium`, `a11y`
- **Description:** Power-users want mouse-free task management.
- **Goal:** Create keydown listener shortcuts: `N` to open the task modal, `/` to focus the search bar, and `ArrowKeys` to navigate list items.
- **Acceptance Criteria:**
  - Key bindings do not trigger when typing inside active inputs/forms.
  - Accessible dialog explains available keyboard combinations on `Shift + ?`.

### 36. ssoc-m6: Offline Mode Cache & Sync

- **Tags:** `ssoc2026`, `medium`, `pwa`
- **Description:** If the network drops, creating a task currently causes database failures.
- **Goal:** Cache task mutations in IndexedDB / localStorage when offline and sync them back to the database when connectivity is restored.
- **Acceptance Criteria:**
  - Displays a "Working Offline" banner when offline.
  - Tasks created offline sync automatically with the backend when the browser status changes to `online`.

### 37. ssoc-m7: Custom Category Builder

- **Tags:** `ssoc2026`, `medium`, `database`
- **Description:** Users are restricted to predefined categories (Work, Personal, General).
- **Goal:** Allow users to create custom categories with custom labels and unique colors.
- **Acceptance Criteria:**
  - New categories are persistent and saved to the database.
  - Custom categories are selectable in the task creation form.

### 38. ssoc-m8: Interactive Task Filtering by Multiple Categories

- **Tags:** `ssoc2026`, `medium`, `ui`
- **Description:** Users can only filter tasks by Priority or Category individually. They need compound multi-select filters.
- **Goal:** Implement a multi-select category tag pill grid that filters active tasks dynamically across multiple dimensions.
- **Acceptance Criteria:**
  - Users can select multiple categories simultaneously (e.g. `Work` and `Urgent`).
  - Active pills display distinct outline states and filter local lists instantly.

### 39. ssoc-m9: User Preference Panel with LocalStorage Sync

- **Tags:** `ssoc2026`, `medium`, `feature`
- **Description:** App dashboard layout changes (grid size, default sound alert, page limit) are lost on page refresh.
- **Goal:** Build a sleek slide-out dashboard preferences panel that saves state parameters to `localStorage` and hydrates state variables on startup.
- **Acceptance Criteria:**
  - Persists preference adjustments seamlessly across browser reloads.
  - Provides a "Restore Factory Defaults" button.

### 40. ssoc-m10: Custom Voice Command Wake-Word Recognition

- **Tags:** `ssoc2026`, `medium`, `voice`
- **Description:** Voice entry requires mouse interaction (clicking the mic button).
- **Goal:** Implement window-level voice processing that triggers voice form popups automatically when listening to target wake-words (e.g. "Hey Remind").
- **Acceptance Criteria:**
  - Safe browser microphone permission handling.
  - Captures and triggers forms accurately, minimizing false-positives.

---

## 🔴 Hard Issues (`ssoc2026` | `hard`)

_Advanced tasks that require implementing web audio hooks, direct external bot webhooks, calendar syncing APIs, or third-party integrations._

### 41. ssoc-h1: Google Calendar Event Sync

- **Tags:** `ssoc2026`, `hard`, `integration`
- **Description:** Deadlines should reflect in the user's primary calendar dashboard.
- **Goal:** Implement OAuth credentials for Google APIs, enabling automatic creation of Google Calendar events when tasks with specific deadlines are created.
- **Acceptance Criteria:**
  - OAuth authorization request runs smoothly under a Settings tab.
  - Mutating task details (time, title) updates the Google Calendar event in real-time.

### 42. ssoc-h2: Web Audio Native Microphone Voice Capture

- **Tags:** `ssoc2026`, `hard`, `voice`
- **Description:** The voice MIC component currently uses mock API transcripts or relies on basic typing.
- **Goal:** Connect the microphone button on the `VoiceMic` component to capture raw user voice audio using the Web Audio API, send it to a speech-to-text service, and populate the NLP parser.
- **Acceptance Criteria:**
  - Requests browser mic permissions cleanly.
  - Renders a premium audio frequency waveform animation while recording.
  - Parses the final speech transcript into a structured task.

### 43. ssoc-h3: Telegram Bot Webhook Integration

- **Tags:** `ssoc2026`, `hard`, `bot`
- **Description:** Direct task creation should be accessible on mobile messaging apps.
- **Goal:** Set up an Express webhook for a Telegram Bot that allows authenticated users to text command tasks (e.g., `/remind Learn NextJS tomorrow at 9pm`) to create tasks.
- **Acceptance Criteria:**
  - Securely connects a Telegram chat ID with a RemindKaro account.
  - Parses incoming messages using the voice/NLP service and responds with confirmation messages.

### 44. ssoc-h4: Monthly/Weekly Calendar Planner View

- **Tags:** `ssoc2026`, `hard`, `ui`
- **Description:** The dashboard currently lists tasks sequentially. Users need a visual monthly grid interface.
- **Goal:** Build a full-size, responsive calendar monthly grid view on `/dashboard/calendar` showing scheduled tasks on their due days.
- **Acceptance Criteria:**
  - Users can click on specific day blocks to launch the `AddTaskForm` pre-populated with that day's date.
  - Tasks display inside day blocks with priority colors.

### 45. ssoc-h5: Shared Tasks & Collaboration

- **Tags:** `ssoc2026`, `hard`, `realtime`
- **Description:** RemindKaro is strictly single-player.
- **Goal:** Enable users to invite other users via email to collaborate on a shared task list.
- **Acceptance Criteria:**
  - Implements role permissions (Viewer vs. Collaborator).
  - Collaborators can mark tasks done or update details, showing real-time updates for other members.

### 46. ssoc-h6: WhatsApp Twilio Deadline Alert Microservice

- **Tags:** `ssoc2026`, `hard`, `bot`
- **Description:** Crucial alerts are easily ignored on screen interfaces. WhatsApp has a much higher response rate.
- **Goal:** Setup backend triggers that send direct urgency WhatsApp alert reminders via Twilio SMS gateway for High priority tasks nearing deadline thresholds.
- **Acceptance Criteria:**
  - Seamless sandbox credential binding under profile layout.
  - Automatic task priority scanning with low latency notification dispatch.

### 47. ssoc-h7: Real-time Multi-User Collaborative Tasks via WebSockets

- **Tags:** `ssoc2026`, `hard`, `realtime`
- **Description:** Dynamic multi-user collaborative workspace tasks are missing sync pipelines.
- **Goal:** Support real-time bidirectional state pushes across users sharing lists using WebSocket/Socket.IO connections.
- **Acceptance Criteria:**
  - Task state changes instantaneously reflect on teammate view models without reload loops.
  - Conflict resolving features handle simultaneous user edits gracefully.

### 48. ssoc-h8: Custom Voice Speech-to-Text Transcription Service Integration

- **Tags:** `ssoc2026`, `hard`, `voice`
- **Description:** Relying entirely on cloud APIs can introduce latency or cost scaling issues.
- **Goal:** Setup deep integration with local or high-performance speech-to-text endpoints to transcribe and extract parameters dynamically.
- **Acceptance Criteria:**
  - Transcribes speech accurately with latency under 500ms.
  - Accurately captures priority, categories, and relative timestamps.

### 49. ssoc-h9: Intelligent Task Priority Auto-Escalation Engine

- **Tags:** `ssoc2026`, `hard`, `voice`
- **Description:** Simple deadline countdowns do not account for relative user stress, category density, or historically missed items.
- **Goal:** Integrate a heuristic urgency escalation algorithm that scores stress factors dynamically, elevating priorities prior to deadlines.
- **Acceptance Criteria:**
  - Urgency parameters adjust priority based on pending count index and deadlines.
  - Modifies states automatically inside backend cron workers.

### 50. ssoc-h10: Local-First Synchronization Engine with P2P Conflict Resolution

- **Tags:** `ssoc2026`, `hard`, `database`
- **Description:** In offline situations, simultaneous offline mutations collide during network recovery, overwriting correct edits.
- **Goal:** Deploy a Local-First architecture using Yjs CRDTs or Automerge inside IndexedDB database layers to ensure conflict-free peer-to-peer data sync.
- **Acceptance Criteria:**
  - Multiple devices can operate offline on different task mutations.
  - Merges events conflict-free and pushes clean sync sets back to main databases on reconnection.
