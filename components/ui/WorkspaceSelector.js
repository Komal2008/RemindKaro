import { useState, useRef, useEffect } from 'react';
import styles from './WorkspaceSelector.module.css';
import { ChevronDown, Plus, Settings } from 'lucide-react';

export default function WorkspaceSelector({
  workspaces = [],
  activeWorkspace = null,
  onSelect,
  onCreateClick,
  onManageClick,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (workspace) => {
    onSelect(workspace);
    setIsOpen(false);
  };

  return (
    <div
      className={`${styles.container} ${isOpen ? styles.open : ''}`}
      ref={containerRef}
    >
      <button
        type="button"
        className={styles.selectorButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={styles.workspaceName}>
          {activeWorkspace ? activeWorkspace.name : 'Personal Space'}
        </span>
        <ChevronDown size={14} className={styles.chevron} />
      </button>

      {activeWorkspace && (
        <button
          type="button"
          className={styles.manageButton}
          onClick={onManageClick}
          title="Manage Workspace Settings"
          aria-label="Manage Workspace Settings"
        >
          <Settings size={14} />
        </button>
      )}

      {isOpen && (
        <div className={styles.dropdown} role="listbox">
          <button
            type="button"
            className={`${styles.dropdownItem} ${!activeWorkspace ? styles.activeItem : ''}`}
            onClick={() => handleSelect(null)}
            role="option"
            aria-selected={!activeWorkspace}
          >
            Personal Space
          </button>

          {workspaces.map((ws) => (
            <button
              key={ws.id}
              type="button"
              className={`${styles.dropdownItem} ${activeWorkspace?.id === ws.id ? styles.activeItem : ''}`}
              onClick={() => handleSelect(ws)}
              role="option"
              aria-selected={activeWorkspace?.id === ws.id}
            >
              <span className={styles.workspaceName}>{ws.name}</span>
            </button>
          ))}

          <div className={styles.divider} />

          <button
            type="button"
            className={`${styles.dropdownItem} ${styles.createButton}`}
            onClick={() => {
              onCreateClick();
              setIsOpen(false);
            }}
          >
            <Plus size={13} />
            Create Workspace
          </button>
        </div>
      )}
    </div>
  );
}
