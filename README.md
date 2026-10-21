# UPMA – Unified Productivity & Monitoring Agent

UPMA is a cross-platform productivity cockpit designed to unify mail, planning, finances, notifications, and personalized news. This repository contains a working MVP built with Next.js and a PWA-first frontend pattern, plus a ready-to-extend schema for Supabase/PostgreSQL.

## Features included

- AI-powered mail triage cards with summary + action items
- Email expansion workflow to view full original content
- Project and task tracker with status, progress, and due dates
- Unified finance dashboard with income, expense buckets, and forecast-ready structure
- News tile module with regional and category filtering styles
- Notification center for alerts and warnings
- Light/dark theme toggle
- PWA manifest metadata for installability
- Database schema prepared for Supabase/PostgreSQL integration

## Tech stack

- Next.js 14
- React 18
- TypeScript
- CSS modules + custom dashboard styling
- PWA manifest metadata
- Supabase/PostgreSQL-ready schema

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production build

```bash
npm run build
npm run start
```

## Supabase-ready schema

See `docs/schema.sql` for the initial relational model covering:

- users
- connected_accounts
- mail_items
- mail_tags
- projects
- tasks
- budgets
- transactions
- savings_goals
- news_items
- notifications

## MVP roadmap

This implementation intentionally keeps the first version functional and realistic while avoiding heavy external API dependencies. It is structured so that real OAuth, email connectors, banking APIs, or market data sources can be plugged in later.

## Architecture notes

- Frontend: Next.js dashboard with a modular UI architecture
- Data layer: Supabase/PostgreSQL-ready SQL schema
- Integrations: provider adapters to be added with mock-first / real-ready design
- Security: environment variables and token storage intended to be handled via secure backend configuration
