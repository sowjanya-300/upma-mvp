# UPMA – Unified Productivity & Monitoring Agent

UPMA is a cross-platform personal cockpit for mail, planning, finance, notifications, and news. The current MVP provides a premium dashboard experience with a real-ready architecture that can later connect to OAuth2 providers, banking APIs, and market data feeds.

## What is included

- AI mail triage cards with summary and action items
- Dedicated screens for mail, tasks, finance, news, and notifications
- Multi-page dashboard shell with reusable navigation and layout
- Real-ready Supabase/PostgreSQL configuration
- Mock data layer that is easy to replace with live providers
- Premium dark-mode dashboard styling with responsive mobile support
- PWA-ready manifest metadata

## Tech stack

- Next.js 14
- React 18
- TypeScript
- Supabase-ready schema and env support
- Mock-first architecture for providers and API integrations

## Quick start

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Production build

```bash
npm run build
npm run start
```

## Environment setup

Copy `.env.example` and add your values for Supabase or other providers.

## MVP architecture

- Dashboard layer: responsive command center UI
- Data layer: Supabase/PostgreSQL-ready schema and mock dataset
- Integrations: OAuth, financial APIs, and market data adapters can be plugged in later
- Notifications: reusable alert center and escalation patterns

## Planned next steps

- Real authentication for mail providers
- Task CRUD and project management flows
- Banking and expense ingestion
- Live market data widgets
- Push notifications and scheduled sync workers
