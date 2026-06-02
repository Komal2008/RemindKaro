# 🎯 RemindKaro — Open Source Contributor Issue Board

Welcome to the **RemindKaro** contributor roadmap! This board contains beginner-friendly issues, intermediate challenges, and advanced features designed for **Social Summer of Code (SSOC) 2026** and all open-source developers.

---

## 🏷️ Guidelines for Contributors

- **Labels/Tags:** Look for the tags `ssoc2026`, `easy`, `medium`, or `hard` to identify task scope.
- **Claiming an Issue:** Comment on the GitHub issue using `&claim` or `&assign` to let the maintainers know you are working on it.
- **PR Standards:** Please format your code with `npm run format` and verify it passes `npm run lint` before opening a pull request.

---

## 🟢 Easy Issues (`ssoc2026` | `easy`)

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

---

## 🟡 Medium Issues (`ssoc2026` | `medium`)

_Requires intermediate familiarity with React hooks, local state synchronization, API proxies, and DB queries._

### 13. ssoc-m1: Batch/Bulk Task Actions

- **Tags:** `ssoc2026`, `medium`, `feature`
- **Description:** Managing tasks one-by-one is slow when cleaning up.
- **Goal:** Add checkboxes to each `TaskCard` and a floating "Bulk Operations" action bar when one or more tasks are selected.
- **Acceptance Criteria:**
  - Contributors can select multiple tasks.
  - The bar lets users bulk-delete or bulk-change priority levels in a single action.
  - Smooth entry/exit animations for the floating action bar.

### 14. ssoc-m2: Task Completion Streak Tracker

- **Tags:** `ssoc2026`, `medium`, `gamification`
- **Description:** To incentivize consistency, users want a gamified habit/task completion streak counter.
- **Goal:** Calculate the consecutive number of days a user has completed at least one task and render a streak icon (e.g. `🔥 7 Days`) on their profile.
- **Acceptance Criteria:**
  - Streak calculation logic is robust and runs on the dashboard dashboard load.
  - Shows fire emoji with a glowing animation when a streak is active.

### 15. ssoc-m3: Weekly Digest Email System

- **Tags:** `ssoc2026`, `medium`, `backend`
- **Description:** Send users a periodic roundup of their task productivity.
- **Goal:** Implement a Cron-scheduled email builder that checks database tasks and emails a summary of finished vs. overdue items.
- **Acceptance Criteria:**
  - Respects email notification opt-in/opt-out settings.
  - Utilizes clean, premium-designed transactional email templates.

### 16. ssoc-m4: Deadline Heatmap Chart

- **Tags:** `ssoc2026`, `medium`, `ui`
- **Description:** Users want to visually understand which days are heavily congested.
- **Goal:** Implement a simple Github-style calendar contribution grid (heatmap) displaying deadline intensity (days with high task volume).
- **Acceptance Criteria:**
  - Renders cleanly on a `/dashboard/analytics` panel.
  - Blocks light up with deeper tints of lavender or amber for days containing multiple critical deadlines.

### 17. ssoc-m5: Keyboard Navigation Shortcuts

- **Tags:** `ssoc2026`, `medium`, `a11y`
- **Description:** Power-users want mouse-free task management.
- **Goal:** Create keydown listener shortcuts: `N` to open the task modal, `/` to focus the search bar, and `ArrowKeys` to navigate list items.
- **Acceptance Criteria:**
  - Key bindings do not trigger when typing inside active inputs/forms.
  - Accessible dialog explains available keyboard combinations on `Shift + ?`.

### 18. ssoc-m6: Offline Mode Cache & Sync

- **Tags:** `ssoc2026`, `medium`, `pwa`
- **Description:** If the network drops, creating a task currently causes database failures.
- **Goal:** Cache task mutations in IndexedDB / localStorage when offline and sync them back to the database when connectivity is restored.
- **Acceptance Criteria:**
  - Displays a "Working Offline" banner when offline.
  - Tasks created offline sync automatically with the backend when the browser status changes to `online`.

### 19. ssoc-m7: Custom Category Builder

- **Tags:** `ssoc2026`, `medium`, `database`
- **Description:** Users are restricted to predefined categories (Work, Personal, General).
- **Goal:** Allow users to create custom categories with custom labels and unique colors.
- **Acceptance Criteria:**
  - New categories are persistent and saved to the database.
  - Custom categories are selectable in the task creation form.

---

## 🔴 Hard Issues (`ssoc2026` | `hard`)

_Advanced tasks that require implementing web audio hooks, direct external bot webhooks, calendar syncing APIs, or third-party integrations._

### 20. ssoc-h1: Google Calendar Event Sync

- **Tags:** `ssoc2026`, `hard`, `integration`
- **Description:** Deadlines should reflect in the user's primary calendar dashboard.
- **Goal:** Implement OAuth credentials for Google APIs, enabling automatic creation of Google Calendar events when tasks with specific deadlines are created.
- **Acceptance Criteria:**
  - OAuth authorization request runs smoothly under a Settings tab.
  - Mutating task details (time, title) updates the Google Calendar event in real-time.

### 21. ssoc-h2: Web Audio Native Microphone Voice Capture

- **Tags:** `ssoc2026`, `hard`, `voice`
- **Description:** The voice MIC component currently uses mock API transcripts or relies on basic typing.
- **Goal:** Connect the microphone button on the `VoiceMic` component to capture raw user voice audio using the Web Audio API, send it to a speech-to-text service, and populate the NLP parser.
- **Acceptance Criteria:**
  - Requests browser mic permissions cleanly.
  - Renders a premium audio frequency waveform animation while recording.
  - Parses the final speech transcript into a structured task.

### 22. ssoc-h3: Telegram Bot Webhook Integration

- **Tags:** `ssoc2026`, `hard`, `bot`
- **Description:** Direct task creation should be accessible on mobile messaging apps.
- **Goal:** Set up an Express webhook for a Telegram Bot that allows authenticated users to text command tasks (e.g., `/remind Learn NextJS tomorrow at 9pm`) to create tasks.
- **Acceptance Criteria:**
  - Securely connects a Telegram chat ID with a RemindKaro account.
  - Parses incoming messages using the voice/NLP service and responds with confirmation messages.

### 23. ssoc-h4: Monthly/Weekly Calendar Planner View

- **Tags:** `ssoc2026`, `hard`, `ui`
- **Description:** The dashboard currently lists tasks sequentially. Users need a visual monthly grid interface.
- **Goal:** Build a full-size, responsive calendar monthly grid view on `/dashboard/calendar` showing scheduled tasks on their due days.
- **Acceptance Criteria:**
  - Users can click on specific day blocks to launch the `AddTaskForm` pre-populated with that day's date.
  - Tasks display inside day blocks with priority colors.

### 24. ssoc-h5: Shared Shared Tasks & Collaboration

- **Tags:** `ssoc2026`, `hard`, `realtime`
- **Description:** RemindKaro is strictly single-player.
- **Goal:** Enable users to invite other users via email to collaborate on a shared task list.
- **Acceptance Criteria:**
  - Implements role permissions (Viewer vs. Collaborator).
  - Collaborators can mark tasks done or update details, showing real-time updates for other members.
