"use client";

import { useMemo, useState } from 'react';

export type MailUrgency = 'High' | 'Medium' | 'Low';

export type MailSummary = {
  id: number;
  senderName: string;
  senderEmail: string;
  date: string;
  folder: string;
  summary: string;
  actionItems: string[];
  body: string;
  tags: string[];
  urgency: MailUrgency;
};

export type TaskStatus = 'In Progress' | 'Review' | 'Blocked' | 'Completed';

export const appStats = [
  { label: 'Inbox queued', value: '184', hint: '+22 vs yesterday' },
  { label: 'Tasks at risk', value: '07', hint: '2 overdue' },
  { label: 'Monthly cash flow', value: '₹1,48,000', hint: '+₹12,400 this month' },
  { label: 'News digest', value: '28', hint: '9 saved for later' },
];

export const mailSummaries: MailSummary[] = [
  {
    id: 1,
    senderName: 'Priya Raman',
    senderEmail: 'priya@northstar.io',
    date: 'Today, 08:15',
    folder: 'Work',
    summary: 'Client redesign review is ready for approval and the delivery timeline needs a decision before noon.',
    actionItems: ['Review landing page changes', 'Approve sprint delivery'],
    body: 'The updated onboarding flow is complete. We need a sign-off to keep the Q4 launch on schedule. Please review the file links and confirm the final date before the design sync.',
    tags: ['Action Required', 'Urgent'],
    urgency: 'High',
  },
  {
    id: 2,
    senderName: 'Bank of India',
    senderEmail: 'alerts@bankofindia.in',
    date: 'Today, 06:40',
    folder: 'Financial',
    summary: 'Your credit card statement is ready and shows a small overspend in the dining category across the last 7 days.',
    actionItems: ['Verify expense total', 'Tag discretionary spend'],
    body: 'Statement summary is attached with receipts and a month-end progress review. We recommend capping discretionary spend to stay within the monthly household budget.',
    tags: ['Financial', 'Review'],
    urgency: 'Medium',
  },
  {
    id: 3,
    senderName: 'GitHub Alerts',
    senderEmail: 'noreply@github.com',
    date: 'Yesterday',
    folder: 'Productivity',
    summary: 'Infrastructure deployment completed successfully with one issue report on the mobile push notification queue.',
    actionItems: ['Check deployment notes', 'Keep release checklist updated'],
    body: 'Build 452 passed across staging and the mobile release is now available. One alert remains concerning queue latency in the notification worker and should be reviewed after the current release cycle.',
    tags: ['Informational'],
    urgency: 'Low',
  },
];

export const projectTasks = [
  { name: 'Q4 Launch Plan', status: 'In Progress', completion: 72, owner: 'Product', due: '12 Sep', category: 'Work' },
  { name: 'Home Budget Reset', status: 'Review', completion: 68, owner: 'Finance', due: '18 Sep', category: 'Personal' },
  { name: 'Side Project AI Sprint', status: 'Blocked', completion: 36, owner: 'Engineering', due: '27 Sep', category: 'Side Hustle' },
  { name: 'Wellness Routine', status: 'Completed', completion: 100, owner: 'Health', due: 'Closed', category: 'Health' },
];

export const expenseBuckets = [
  { label: 'Housing', value: 3400, color: 'violet' },
  { label: 'Food', value: 980, color: 'blue' },
  { label: 'Parents', value: 640, color: 'green' },
  { label: 'Sudden Desires', value: 420, color: 'orange' },
  { label: 'Savings', value: 1500, color: 'teal' },
];

export const newsStories = [
  { title: 'AI and the Future of Knowledge Work', category: 'Technology', region: 'Global', readTime: '4 min read', saved: false },
  { title: 'Tamil Nadu Growth Outlook', category: 'Business', region: 'Local', readTime: '6 min read', saved: true },
  { title: 'EU energy market shift', category: 'Economy', region: 'International', readTime: '5 min read', saved: false },
  { title: 'Weekend wellness reset', category: 'Lifestyle', region: 'Local', readTime: '3 min read', saved: false },
];

export const notifications = [
  { id: 1, title: 'Budget threshold crossed', detail: 'Dining overspend is 12% above plan.', severity: 'warning', read: false },
  { id: 2, title: 'Task due today', detail: 'Q4 launch plan requires final approval.', severity: 'critical', read: false },
  { id: 3, title: 'Email triaged', detail: 'Three new messages delegated to tasks.', severity: 'info', read: true },
];

export function useDashboardState() {
  const [syncState, setSyncState] = useState('All systems online');
  const [selectedMailId, setSelectedMailId] = useState<number>(mailSummaries[0].id);

  const selectedMail = useMemo(
    () => mailSummaries.find((mail) => mail.id === selectedMailId) ?? mailSummaries[0],
    [selectedMailId],
  );

  return { syncState, setSyncState, selectedMailId, setSelectedMailId, selectedMail };
}
