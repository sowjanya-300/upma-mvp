-- Users
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- External connected accounts (mail, bank, storage, etc.)
CREATE TABLE IF NOT EXISTS connected_accounts (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  provider TEXT NOT NULL,
  account_name TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'connected',
  metadata JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Mail items and summaries
CREATE TABLE IF NOT EXISTS mail_items (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  provider_account_id UUID REFERENCES connected_accounts(id),
  sender_name TEXT NOT NULL,
  sender_email TEXT NOT NULL,
  subject TEXT,
  received_at TIMESTAMPTZ,
  folder TEXT,
  category TEXT,
  summary TEXT,
  body TEXT,
  urgency TEXT,
  action_required BOOLEAN DEFAULT FALSE,
  archived BOOLEAN DEFAULT FALSE,
  deleted BOOLEAN DEFAULT FALSE,
  metadata JSONB
);

CREATE TABLE IF NOT EXISTS mail_tags (
  id UUID PRIMARY KEY,
  mail_id UUID REFERENCES mail_items(id) ON DELETE CASCADE,
  tag_name TEXT NOT NULL
);

-- Projects and tasks
CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  project_name TEXT NOT NULL,
  description TEXT,
  status TEXT NOT NULL DEFAULT 'active',
  planned_start DATE,
  planned_due DATE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS tasks (
  id UUID PRIMARY KEY,
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
  task_name TEXT NOT NULL,
  description TEXT,
  category TEXT,
  status TEXT NOT NULL DEFAULT 'not_started',
  owner TEXT,
  planned_start DATE,
  planned_due DATE,
  actual_start DATE,
  actual_completed DATE,
  completion_pct INTEGER DEFAULT 0,
  planned_hours NUMERIC(10,2) DEFAULT 0,
  actual_hours NUMERIC(10,2) DEFAULT 0,
  overdue BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Finance
CREATE TABLE IF NOT EXISTS budgets (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  month_start DATE NOT NULL,
  income_total NUMERIC(12,2) DEFAULT 0,
  expense_total NUMERIC(12,2) DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS transactions (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  budget_id UUID REFERENCES budgets(id) ON DELETE CASCADE,
  vendor TEXT,
  category TEXT,
  amount NUMERIC(12,2) NOT NULL,
  transaction_type TEXT CHECK (transaction_type IN ('income', 'expense')),
  txn_date DATE NOT NULL,
  source TEXT
);

CREATE TABLE IF NOT EXISTS savings_goals (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  goal_name TEXT NOT NULL,
  target_amount NUMERIC(12,2) NOT NULL,
  current_amount NUMERIC(12,2) DEFAULT 0,
  interest_rate NUMERIC(5,2) DEFAULT 0,
  maturity_date DATE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- News and notifications
CREATE TABLE IF NOT EXISTS news_items (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  category TEXT,
  region TEXT,
  source TEXT,
  url TEXT,
  saved_for_later BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMPTZ,
  metadata JSONB
);

CREATE TABLE IF NOT EXISTS notifications (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  source TEXT,
  title TEXT NOT NULL,
  message TEXT,
  severity TEXT,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
