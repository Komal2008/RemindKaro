import { useState, useEffect } from 'react';
import styles from './WorkspaceModal.module.css';
import Button from './Button';
import { X, Trash2, LogOut } from 'lucide-react';

export default function WorkspaceModal({
  mode = 'create', // 'create' | 'manage'
  workspace = null,
  currentUser = null,
  onClose,
  onWorkspaceCreated,
  onWorkspaceUpdated,
  onWorkspaceDeleted,
}) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [wsName, setWsName] = useState('');
  const [wsDescription, setWsDescription] = useState('');
  const [isSavingSettings, setIsSavingSettings] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRole, setInviteRole] = useState('member');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    if (mode === 'manage' && workspace) {
      setMembers(workspace.members || []);
      setWsName(workspace.name || '');
      setWsDescription(workspace.description || '');
    } else {
      setName('');
      setDescription('');
      setMembers([]);
    }
    setError('');
    setSuccess('');
  }, [mode, workspace]);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Workspace name is required');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/workspaces', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          description: description.trim(),
        }),
      });

      const data = await res.json();
      if (res.ok) {
        onWorkspaceCreated(data.workspace);
        onClose();
      } else {
        setError(data.error || 'Failed to create workspace');
      }
    } catch (err) {
      console.error(err);
      setError('Network error: Failed to create workspace');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveSettings = async (e) => {
    e.preventDefault();
    if (!wsName.trim()) {
      setError('Workspace name is required');
      return;
    }

    setIsSavingSettings(true);
    setError('');
    setSuccess('');

    try {
      const res = await fetch(`/api/workspaces/${workspace.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: wsName.trim(),
          description: wsDescription.trim(),
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccess('Workspace settings updated successfully');
        if (onWorkspaceUpdated) {
          onWorkspaceUpdated(data.workspace);
        }
      } else {
        setError(data.error || 'Failed to update workspace settings');
      }
    } catch (err) {
      console.error(err);
      setError('Network error: Failed to update workspace settings');
    } finally {
      setIsSavingSettings(false);
    }
  };

  const handleRoleChange = async (memberUserId, newRole) => {
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const res = await fetch(
        `/api/workspaces/${workspace.id}/members/${memberUserId}`,
        {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ role: newRole }),
        }
      );

      const data = await res.json();
      if (res.ok) {
        const updatedMembers = members.map((m) =>
          m.userId === memberUserId ? { ...m, role: newRole } : m
        );
        setMembers(updatedMembers);
        setSuccess(`Updated member role to ${newRole}`);
        if (onWorkspaceUpdated) {
          onWorkspaceUpdated({
            ...workspace,
            members: updatedMembers,
          });
        }
      } else {
        setError(data.error || 'Failed to update member role');
      }
    } catch (err) {
      console.error(err);
      setError('Network error: Failed to update member role');
    } finally {
      setLoading(false);
    }
  };

  const handleInvite = async (e) => {
    e.preventDefault();
    if (!inviteEmail.trim()) {
      setError('Email address is required');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const res = await fetch(`/api/workspaces/${workspace.id}/members`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: inviteEmail.trim(),
          role: inviteRole,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setMembers((prev) => [...prev, data.member]);
        setInviteEmail('');
        setSuccess(`Successfully added ${inviteEmail}`);
        if (onWorkspaceUpdated) {
          onWorkspaceUpdated({
            ...workspace,
            members: [...members, data.member],
          });
        }
      } else {
        setError(data.error || 'Failed to add user');
      }
    } catch (err) {
      console.error(err);
      setError('Network error: Failed to invite member');
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveMember = async (memberUserId) => {
    if (!confirm('Are you sure you want to remove this member?')) return;

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const res = await fetch(
        `/api/workspaces/${workspace.id}/members/${memberUserId}`,
        {
          method: 'DELETE',
        }
      );

      if (res.ok) {
        const updatedMembers = members.filter((m) => m.userId !== memberUserId);
        setMembers(updatedMembers);
        setSuccess('Member removed successfully');
        if (onWorkspaceUpdated) {
          onWorkspaceUpdated({
            ...workspace,
            members: updatedMembers,
          });
        }
      } else {
        const data = await res.json();
        setError(data.error || 'Failed to remove member');
      }
    } catch (err) {
      console.error(err);
      setError('Network error: Failed to remove member');
    } finally {
      setLoading(false);
    }
  };

  const handleLeaveWorkspace = async () => {
    if (!confirm('Are you sure you want to leave this workspace?')) return;

    setLoading(true);
    setError('');

    try {
      const res = await fetch(
        `/api/workspaces/${workspace.id}/members/${currentUser.id}`,
        { method: 'DELETE' }
      );

      if (res.ok) {
        onWorkspaceDeleted(workspace.id);
        onClose();
      } else {
        const data = await res.json();
        setError(data.error || 'Failed to leave workspace');
      }
    } catch (err) {
      console.error(err);
      setError('Network error: Failed to leave workspace');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteWorkspace = async () => {
    if (
      !confirm(
        'CRITICAL WARNING: This will permanently delete the workspace and all its tasks. Are you sure?'
      )
    ) {
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await fetch(`/api/workspaces/${workspace.id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        onWorkspaceDeleted(workspace.id);
        onClose();
      } else {
        const data = await res.json();
        setError(data.error || 'Failed to delete workspace');
      }
    } catch (err) {
      console.error(err);
      setError('Network error: Failed to delete workspace');
    } finally {
      setLoading(false);
    }
  };

  // Determine user's role in this workspace
  const requesterMembership = members.find((m) => m.userId === currentUser?.id);
  const isOwner = requesterMembership?.role === 'owner';
  const isAdmin = requesterMembership?.role === 'admin';
  const canManage = isOwner || isAdmin;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <header className={styles.header}>
          <h2 className={styles.title}>
            {mode === 'create'
              ? 'Create Workspace'
              : `Manage "${workspace?.name}"`}
          </h2>
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </header>

        {error && <p className={styles.error}>{error}</p>}
        {success && (
          <p style={{ color: 'var(--color-success)', fontSize: 12 }}>
            {success}
          </p>
        )}

        <div className={styles.body}>
          {mode === 'create' ? (
            <form onSubmit={handleCreate} className={styles.section}>
              <div className={styles.inputGroup}>
                <label htmlFor="ws-name" className={styles.label}>
                  Workspace Name
                </label>
                <input
                  id="ws-name"
                  type="text"
                  placeholder="e.g. Marketing Team, Personal Projects"
                  className={styles.input}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={loading}
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="ws-desc" className={styles.label}>
                  Description & Goal (Optional)
                </label>
                <textarea
                  id="ws-desc"
                  placeholder="e.g. Q3 product launch — ship by July 15"
                  className={styles.textarea}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  disabled={loading}
                  rows={3}
                />
              </div>
              <div className={styles.footer}>
                <div className={styles.standardActions}>
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={onClose}
                    disabled={loading}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" variant="primary" loading={loading}>
                    Create
                  </Button>
                </div>
              </div>
            </form>
          ) : (
            <>
              {/* Workspace Settings Section (Editable for Owner/Admin) */}
              {canManage ? (
                <form onSubmit={handleSaveSettings} className={styles.section}>
                  <span className={styles.label}>Workspace Settings</span>
                  <div className={styles.settingsGroup}>
                    <div className={styles.inputGroup}>
                      <label
                        htmlFor="ws-manage-name"
                        className={styles.subLabel}
                      >
                        Name
                      </label>
                      <input
                        id="ws-manage-name"
                        type="text"
                        className={styles.input}
                        value={wsName}
                        onChange={(e) => setWsName(e.target.value)}
                        disabled={isSavingSettings}
                        required
                      />
                    </div>
                    <div
                      className={styles.inputGroup}
                      style={{ marginTop: 10 }}
                    >
                      <label
                        htmlFor="ws-manage-desc"
                        className={styles.subLabel}
                      >
                        Description & Goal
                      </label>
                      <textarea
                        id="ws-manage-desc"
                        className={styles.textarea}
                        value={wsDescription}
                        onChange={(e) => setWsDescription(e.target.value)}
                        disabled={isSavingSettings}
                        rows={2}
                        placeholder="Goal or mission of this workspace"
                      />
                    </div>
                    <div
                      style={{
                        marginTop: 10,
                        display: 'flex',
                        justifyContent: 'flex-end',
                      }}
                    >
                      <Button
                        type="submit"
                        variant="secondary"
                        size="sm"
                        loading={isSavingSettings}
                      >
                        Save Settings
                      </Button>
                    </div>
                  </div>
                </form>
              ) : (
                <div className={styles.section}>
                  <h3 className={styles.nonEditableTitle}>{workspace?.name}</h3>
                  {workspace?.description && (
                    <p className={styles.nonEditableDesc}>
                      {workspace.description}
                    </p>
                  )}
                </div>
              )}

              {/* Member Invite Section */}
              {canManage && (
                <form onSubmit={handleInvite} className={styles.section}>
                  <label htmlFor="invite-email" className={styles.label}>
                    Add Member
                  </label>
                  <div className={styles.formRow}>
                    <input
                      id="invite-email"
                      type="email"
                      placeholder="colleague@example.com"
                      className={styles.input}
                      value={inviteEmail}
                      onChange={(e) => setInviteEmail(e.target.value)}
                      disabled={loading}
                      required
                    />
                    <select
                      className={styles.select}
                      value={inviteRole}
                      onChange={(e) => setInviteRole(e.target.value)}
                      disabled={loading}
                    >
                      <option value="member">Member</option>
                      <option value="admin">Admin</option>
                    </select>
                    <Button type="submit" variant="primary" loading={loading}>
                      Add
                    </Button>
                  </div>
                </form>
              )}

              {/* Members List */}
              <div className={styles.section}>
                <span className={styles.label}>Members ({members.length})</span>
                <div className={styles.memberList}>
                  {members.map((m) => {
                    const showRemove =
                      canManage &&
                      m.userId !== currentUser?.id &&
                      m.role !== 'owner' &&
                      !(isAdmin && m.role === 'admin'); // Admin can't remove other admins

                    const showRoleSelect = isOwner && m.role !== 'owner';

                    return (
                      <div key={m.id} className={styles.memberItem}>
                        <div className={styles.memberInfo}>
                          <span className={styles.memberName}>
                            {m.user.name || 'Pending User'}
                            {m.userId === currentUser?.id && ' (You)'}
                          </span>
                          <span className={styles.memberEmail}>
                            {m.user.email}
                          </span>
                        </div>
                        <div className={styles.memberMeta}>
                          {showRoleSelect ? (
                            <select
                              className={styles.roleSelect}
                              value={m.role}
                              onChange={(e) =>
                                handleRoleChange(m.userId, e.target.value)
                              }
                              disabled={loading}
                            >
                              <option value="member">member</option>
                              <option value="admin">admin</option>
                            </select>
                          ) : (
                            <span
                              className={`${styles.roleBadge} ${styles[`roleBadge--${m.role}`]}`}
                            >
                              {m.role}
                            </span>
                          )}
                          {showRemove && (
                            <button
                              type="button"
                              className={styles.removeButton}
                              onClick={() => handleRemoveMember(m.userId)}
                              title="Remove Member"
                              aria-label="Remove Member"
                            >
                              <Trash2 size={13} />
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Danger Zone Actions */}
              <div className={styles.footer}>
                <div className={styles.dangerActions}>
                  {isOwner ? (
                    <Button
                      type="button"
                      variant="danger"
                      size="sm"
                      onClick={handleDeleteWorkspace}
                      loading={loading}
                    >
                      <Trash2 size={13} style={{ marginRight: 6 }} />
                      Delete Workspace
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      variant="danger"
                      size="sm"
                      onClick={handleLeaveWorkspace}
                      loading={loading}
                    >
                      <LogOut size={13} style={{ marginRight: 6 }} />
                      Leave Workspace
                    </Button>
                  )}
                </div>
                <div className={styles.standardActions}>
                  <Button
                    type="button"
                    variant="primary"
                    onClick={onClose}
                    disabled={loading}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
