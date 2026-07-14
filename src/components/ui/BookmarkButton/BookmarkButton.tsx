import type { CSSProperties, MouseEventHandler } from 'react'
import { Icon } from '../Icon'

export interface BookmarkButtonProps {
  /** 북마크 활성화 여부. true면 채워진 아이콘. 기본 `false`. */
  bookmarked?: boolean
  /** 클릭 핸들러 — 북마크 상태 토글은 호출부에서 관리한다. */
  onClick?: MouseEventHandler<HTMLButtonElement>
  /** Extra class forwarded to the root `<button>`. */
  className?: string
}

const buttonStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  appearance: 'none',
  WebkitAppearance: 'none',
}

/**
 * Icon-only toggle button for bookmarking a post. Mirrors the `PostCardStats`
 * heart toggle: `bookmark_empty` in `--color-text-tertiary` when inactive,
 * `bookmark_fill` in `--color-brand-primary` when active.
 */
export function BookmarkButton({
  bookmarked = false,
  onClick,
  className,
}: BookmarkButtonProps) {
  return (
    <button
      type="button"
      aria-pressed={bookmarked}
      aria-label="북마크"
      onClick={onClick}
      className={className}
      style={buttonStyle}
    >
      <Icon
        name={bookmarked ? 'bookmark_fill' : 'bookmark_empty'}
        size={16}
        color={bookmarked ? 'var(--color-brand-primary)' : undefined}
      />
    </button>
  )
}
