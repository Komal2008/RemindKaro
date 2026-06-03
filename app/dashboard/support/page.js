"use client";

import { useState, useEffect, useCallback } from "react";
import styles from "./page.module.css";
import {
  CreditCard,
  Wrench,
  User,
  Sparkles,
  FileText,
  Clock,
  Mail,
  Lock,
  X,
  Check,
  Ticket,
  MessageSquare,
} from "lucide-react";

const CATEGORIES = [
  { value: "billing", label: "Billing & Payments", icon: CreditCard },
  { value: "technical", label: "Technical Issue", icon: Wrench },
  { value: "account", label: "Account & Access", icon: User },
  { value: "feature", label: "Feature Request", icon: Sparkles },
  { value: "other", label: "Other", icon: FileText },
];

const PRIORITIES = [
  { value: "low", label: "Low", color: "#10b981" },
  { value: "medium", label: "Medium", color: "#f59e0b" },
  { value: "high", label: "High", color: "#f43f5e" },
  { value: "critical", label: "Critical", color: "#dc2626" },
];

const STATUS_CONFIG = {
  open: { label: "Open", color: "#5e6ad2", bg: "rgba(94,106,210,0.12)" },
  in_progress: {
    label: "In Progress",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.12)",
  },
  waiting_on_user: {
    label: "Waiting on You",
    color: "#8b5cf6",
    bg: "rgba(139,92,246,0.12)",
  },
  resolved: {
    label: "Resolved",
    color: "#10b981",
    bg: "rgba(16,185,129,0.12)",
  },
  closed: { label: "Closed", color: "#6b7280", bg: "rgba(107,114,128,0.12)" },
};

function formatDate(dateStr) {
  if (!dateStr) return "—";
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateStr));
}

function StatusBadge({ status }) {
  const cfg = STATUS_CONFIG[status] || STATUS_CONFIG.open;
  return (
    <span
      className={styles.statusBadge}
      style={{ color: cfg.color, background: cfg.bg }}
    >
      <span className={styles.statusDot} style={{ background: cfg.color }} />
      {cfg.label}
    </span>
  );
}

function TicketCard({ ticket, onClick, active }) {
  return (
    <button
      className={`${styles.ticketCard} ${active ? styles.ticketCardActive : ""}`}
      onClick={() => onClick(ticket)}
    >
      <div className={styles.ticketCardTop}>
        <span className={styles.ticketId}>{ticket.ticketId}</span>
        <StatusBadge status={ticket.status} />
      </div>
      <p className={styles.ticketSubject}>{ticket.subject}</p>
      <div className={styles.ticketCardMeta}>
        <span className={styles.ticketCategory}>
          {(() => {
            const cat = CATEGORIES.find((c) => c.value === ticket.category);
            const Icon = cat?.icon;
            return (
              <span className={styles.categoryWrap}>
                {Icon && <Icon size={12} className={styles.metaIcon} />}
                {cat?.label || ticket.category}
              </span>
            );
          })()}
        </span>
        <span className={styles.ticketDate}>
          {formatDate(ticket.createdAt)}
        </span>
      </div>
    </button>
  );
}

function TicketDetail({ ticket, onClose, onRefresh }) {
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [closing, setClosing] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSendMessage = async () => {
    if (!message.trim()) return;
    setSending(true);
    try {
      const res = await fetch(
        `/api/support/tickets/${ticket.ticketId}/messages`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message }),
        }
      );
      if (res.ok) {
        setMessage("");
        onRefresh();
      }
    } finally {
      setSending(false);
    }
  };

  const handleClose = async () => {
    if (!confirm("Are you sure you want to close this ticket?")) return;
    setClosing(true);
    try {
      const res = await fetch(`/api/support/tickets/${ticket.ticketId}/close`, {
        method: "PUT",
      });
      if (res.ok) onRefresh();
    } finally {
      setClosing(false);
    }
  };

  const copyTicketId = () => {
    navigator.clipboard.writeText(ticket.ticketId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isClosed = ticket.status === "closed";

  return (
    <div className={styles.detail}>
      <div className={styles.detailHeader}>
        <div className={styles.detailHeaderLeft}>
          <div className={styles.ticketIdRow}>
            <span className={styles.detailTicketId}>{ticket.ticketId}</span>
            <button
              className={styles.copyBtn}
              onClick={copyTicketId}
              title="Copy ticket ID"
            >
              {copied ? "✓ Copied" : "Copy ID"}
            </button>
          </div>
          <h2 className={styles.detailSubject}>{ticket.subject}</h2>
          <div className={styles.detailMeta}>
            <StatusBadge status={ticket.status} />
            <span className={styles.detailMetaItem}>
              {(() => {
                const cat = CATEGORIES.find((c) => c.value === ticket.category);
                const Icon = cat?.icon;
                return (
                  <span className={styles.categoryWrap}>
                    {Icon && <Icon size={14} className={styles.metaIcon} />}
                    {cat?.label}
                  </span>
                );
              })()}
            </span>
            <span className={styles.detailMetaItem}>
              Priority:{" "}
              <span
                style={{
                  color: PRIORITIES.find((p) => p.value === ticket.priority)
                    ?.color,
                }}
              >
                {ticket.priority}
              </span>
            </span>
            <span className={styles.detailMetaItem}>
              Opened {formatDate(ticket.createdAt)}
            </span>
          </div>
        </div>
        <button
          className={styles.detailClose}
          onClick={onClose}
          aria-label="Close detail"
        >
          <X size={20} />
        </button>
      </div>

      {/* Status timeline */}
      <div className={styles.timeline}>
        {["open", "in_progress", "waiting_on_user", "resolved", "closed"].map(
          (s, i) => {
            const statuses = [
              "open",
              "in_progress",
              "waiting_on_user",
              "resolved",
              "closed",
            ];
            const currentIdx = statuses.indexOf(ticket.status);
            const isDone = i <= currentIdx;
            const isCurrent = s === ticket.status;
            return (
              <div
                key={s}
                className={`${styles.timelineStep} ${isDone ? styles.timelineStepDone : ""} ${isCurrent ? styles.timelineStepCurrent : ""}`}
              >
                <div className={styles.timelineDot} />
                {i < 4 && <div className={styles.timelineLine} />}
                <span className={styles.timelineLabel}>
                  {STATUS_CONFIG[s]?.label}
                </span>
              </div>
            );
          }
        )}
      </div>

      {/* Message thread */}
      <div className={styles.thread}>
        {ticket.messages?.map((msg) => (
          <div
            key={msg.id}
            className={`${styles.message} ${msg.sender === "user" ? styles.messageUser : styles.messageSupport}`}
          >
            <div className={styles.messageBubble}>
              <p className={styles.messageText}>{msg.message}</p>
              <span className={styles.messageTime}>
                {formatDate(msg.createdAt)}
              </span>
            </div>
            <span className={styles.messageSender}>
              {msg.sender === "user" ? "You" : "Support Team"}
            </span>
          </div>
        ))}
      </div>

      {/* Reply box */}
      {!isClosed && (
        <div className={styles.replyBox}>
          <textarea
            className={styles.replyInput}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Add a reply or additional information…"
            rows={3}
            onKeyDown={(e) => {
              if (e.key === "Enter" && (e.metaKey || e.ctrlKey))
                handleSendMessage();
            }}
          />
          <div className={styles.replyActions}>
            <button
              className={styles.closeTicketBtn}
              onClick={handleClose}
              disabled={closing}
            >
              {closing ? "Closing…" : "Close Ticket"}
            </button>
            <button
              className={styles.sendBtn}
              onClick={handleSendMessage}
              disabled={sending || !message.trim()}
            >
              {sending ? "Sending…" : "Send Reply"}
            </button>
          </div>
        </div>
      )}

      {isClosed && ticket.resolvedAt && (
        <div className={styles.resolvedBanner}>
          <Check size={16} /> Ticket closed on {formatDate(ticket.resolvedAt)}
        </div>
      )}
    </div>
  );
}

function NewTicketForm({ onCreated, onCancel }) {
  const [form, setForm] = useState({
    subject: "",
    description: "",
    category: "technical",
    priority: "medium",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [created, setCreated] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.subject.trim() || !form.description.trim()) {
      setError("Subject and description are required.");
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/support/tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to create ticket.");
        return;
      }
      setCreated(data.ticket);
      onCreated(data.ticket);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (created) {
    return (
      <div className={styles.successPanel}>
        <div className={styles.successIcon}>
          <Ticket size={48} className={styles.successIconColor} />
        </div>
        <h2 className={styles.successTitle}>Ticket Created!</h2>
        <p className={styles.successDesc}>
          Your support ticket has been raised successfully. Our team will
          respond within 24 hours.
        </p>
        <div className={styles.successTicketId}>
          <span className={styles.successTicketIdLabel}>Your Ticket ID</span>
          <span className={styles.successTicketIdValue}>
            {created.ticketId}
          </span>
          <p className={styles.successTicketIdNote}>
            Save this ID to track your ticket status anytime.
          </p>
        </div>
        <button className={styles.sendBtn} onClick={onCancel}>
          View My Tickets
        </button>
      </div>
    );
  }

  return (
    <form className={styles.newForm} onSubmit={handleSubmit}>
      <div className={styles.newFormHeader}>
        <h2 className={styles.newFormTitle}>Raise a Support Ticket</h2>
        <p className={styles.newFormDesc}>
          Describe your issue and our team will get back to you within 24 hours.
          For urgent matters email{" "}
          <a
            href="mailto:support.india@remindkro.in"
            className={styles.supportEmail}
          >
            support.india@remindkro.in
          </a>
        </p>
      </div>

      {error && <div className={styles.formError}>{error}</div>}

      <div className={styles.formRow}>
        <label className={styles.formLabel}>Category</label>
        <div className={styles.categoryGrid}>
          {CATEGORIES.map((c) => {
            const Icon = c.icon;
            return (
              <button
                type="button"
                key={c.value}
                className={`${styles.categoryBtn} ${form.category === c.value ? styles.categoryBtnActive : ""}`}
                onClick={() => setForm((f) => ({ ...f, category: c.value }))}
              >
                <Icon size={14} /> {c.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className={styles.formRow}>
        <label className={styles.formLabel}>Priority</label>
        <div className={styles.priorityRow}>
          {PRIORITIES.map((p) => (
            <button
              type="button"
              key={p.value}
              className={`${styles.priorityBtn} ${form.priority === p.value ? styles.priorityBtnActive : ""}`}
              style={
                form.priority === p.value
                  ? {
                      borderColor: p.color,
                      color: p.color,
                      background: `${p.color}18`,
                    }
                  : {}
              }
              onClick={() => setForm((f) => ({ ...f, priority: p.value }))}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.formRow}>
        <label className={styles.formLabel} htmlFor="subject">
          Subject
        </label>
        <input
          id="subject"
          className={styles.formInput}
          type="text"
          value={form.subject}
          onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
          placeholder="Brief summary of your issue"
          maxLength={120}
          required
        />
      </div>

      <div className={styles.formRow}>
        <label className={styles.formLabel} htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          className={styles.formTextarea}
          value={form.description}
          onChange={(e) =>
            setForm((f) => ({ ...f, description: e.target.value }))
          }
          placeholder="Describe your issue in detail — include steps to reproduce, expected vs actual behaviour, etc."
          rows={6}
          required
        />
      </div>

      <div className={styles.formActions}>
        <button type="button" className={styles.cancelBtn} onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className={styles.sendBtn} disabled={submitting}>
          {submitting ? "Submitting…" : "Submit Ticket"}
        </button>
      </div>
    </form>
  );
}

import SupportSkeleton from "@/components/skeletons/SupportSkeleton";

export default function SupportPage() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTicket, setActiveTicket] = useState(null);
  const [showNewForm, setShowNewForm] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const fetchTickets = useCallback(
    async (silent = false) => {
      if (!silent) setLoading(true);
      else setRefreshing(true);
      try {
        const res = await fetch("/api/support/tickets");
        if (res.ok) {
          const data = await res.json();
          setTickets(data.tickets);
          // Refresh active ticket data if open
          if (activeTicket) {
            const updated = data.tickets.find(
              (t) => t.ticketId === activeTicket.ticketId
            );
            if (updated) setActiveTicket(updated);
          }
        }
      } finally {
        setLoading(false);
        setRefreshing(false);
      }
    },
    [activeTicket]
  );

  useEffect(() => {
    fetchTickets();
  }, []);

  // Live polling every 15 seconds when a ticket is open
  useEffect(() => {
    if (!activeTicket) return;
    const interval = setInterval(() => fetchTickets(true), 15000);
    return () => clearInterval(interval);
  }, [activeTicket, fetchTickets]);

  const handleTicketCreated = (ticket) => {
    fetchTickets(true);
    setShowNewForm(false);
    setActiveTicket(ticket);
  };

  if (loading) {
    return <SupportSkeleton />;
  }

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.pageHeader}>
        <div>
          <p className={styles.pageEyebrow}>Help Center</p>
          <h1 className={styles.pageTitle}>Support Tickets</h1>
        </div>
        <div className={styles.pageHeaderRight}>
          <a
            href="mailto:support.india@remindkro.in"
            className={styles.emailBtn}
          >
            <Mail size={16} /> support.india@remindkro.in
          </a>
          <button
            className={styles.newTicketBtn}
            onClick={() => {
              setShowNewForm(true);
              setActiveTicket(null);
            }}
          >
            + New Ticket
          </button>
        </div>
      </div>

      {/* Contact strip */}
      <div className={styles.contactStrip}>
        <div className={styles.contactStripItem}>
          <span className={styles.contactStripIcon}>
            <Clock size={24} />
          </span>
          <div>
            <p className={styles.contactStripLabel}>Response Time</p>
            <p className={styles.contactStripValue}>Within 24 hours</p>
          </div>
        </div>
        <div className={styles.contactStripItem}>
          <span className={styles.contactStripIcon}>
            <Mail size={24} />
          </span>
          <div>
            <p className={styles.contactStripLabel}>Email Support</p>
            <p className={styles.contactStripValue}>
              support.india@remindkro.in
            </p>
          </div>
        </div>
        <div className={styles.contactStripItem}>
          <span className={styles.contactStripIcon}>
            <Lock size={24} />
          </span>
          <div>
            <p className={styles.contactStripLabel}>Data Privacy</p>
            <p className={styles.contactStripValue}>
              Tickets are private to you
            </p>
          </div>
        </div>
      </div>

      {/* Main split view */}
      <div className={styles.splitView}>
        {/* Left: ticket list */}
        <div
          className={`${styles.ticketList} ${activeTicket || showNewForm ? styles.ticketListCollapsed : ""}`}
        >
          {refreshing && <div className={styles.refreshBar} />}
          {tickets.length === 0 ? (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>
                <Ticket size={48} className={styles.emptyIconColor} />
              </div>
              <h3 className={styles.emptyTitle}>No tickets yet</h3>
              <p className={styles.emptyDesc}>
                Raise a support ticket and our team will help you out.
              </p>
              <button
                className={styles.newTicketBtn}
                onClick={() => setShowNewForm(true)}
              >
                Raise First Ticket
              </button>
            </div>
          ) : (
            <>
              <p className={styles.listLabel}>
                {tickets.length} ticket{tickets.length !== 1 ? "s" : ""}
              </p>
              {tickets.map((t) => (
                <TicketCard
                  key={t.ticketId}
                  ticket={t}
                  onClick={(ticket) => {
                    setActiveTicket(ticket);
                    setShowNewForm(false);
                  }}
                  active={activeTicket?.ticketId === t.ticketId}
                />
              ))}
            </>
          )}
        </div>

        {/* Right: detail / form */}
        {showNewForm && (
          <div className={styles.rightPanel}>
            <NewTicketForm
              onCreated={handleTicketCreated}
              onCancel={() => setShowNewForm(false)}
            />
          </div>
        )}

        {activeTicket && !showNewForm && (
          <div className={styles.rightPanel}>
            <TicketDetail
              ticket={activeTicket}
              onClose={() => setActiveTicket(null)}
              onRefresh={() => fetchTickets(true)}
            />
          </div>
        )}

        {!showNewForm && !activeTicket && tickets.length > 0 && (
          <div className={styles.selectPrompt}>
            <div className={styles.selectPromptIcon}>
              <MessageSquare size={32} />
            </div>
            <p>Select a ticket to view details or raise a new one.</p>
          </div>
        )}
      </div>
    </div>
  );
}
