# UPMA Feature Guide

## 1. Aggregated mail integration and AI triage

- Connect multiple mail providers through OAuth and provider adapters.
- Poll mail at a configurable interval using webhooks or background jobs.
- Generate a compact executive summary card for each message.
- Allow assignment to tasks, archive, or delete based on triage status.

## 2. Unified project and task planner

- Group tasks under projects.
- Track planned vs actual dates, progress, and hours worked.
- Automatically flag overdue tasks when the due date has passed and the status is incomplete.
- Aggregate project-level completion percentages using weighted subtasks.

## 3. Financial management and investor planning

- Aggregate balances and transactions from banking APIs or manual inputs.
- Track household income and expense categories over time.
- Support budget planning with historical and forecast views.
- Build savings and investment simulations for retirement and goal-based planning.

## 4. News and magazine dashboard

- Manage regional and category filters for local, national, and global headlines.
- Offer save-for-later and focus-mode interactions for premium readability.
- Structure future magazine viewing as a dedicated, browsable digital shelf.

## 5. Notifications and alerts

- Centralize external notifications into a single triage system.
- Reuse the same decision engine as mail triage: assign, archive, or delete.
- Route high-priority actions into push notifications and desktop alerts.

## 6. Design system

- Maintain a clean dashboard layout with dark and light modes.
- Use fluid cards, responsive spacing, and consistent UI patterns across modules.
- Keep the interface installable as a PWA with cross-device support.
