import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Foundation/Spacing',
  tags: ['autodocs'],
  parameters: {
    controls: { hideNoControlsWarning: true },
    layout: 'padded',
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

// ─── 공통 스타일 ──────────────────────────────────────────────────────────────

const sectionStyle: React.CSSProperties = {
  marginBottom: '2rem',
}

const sectionTitleStyle: React.CSSProperties = {
  fontSize: '0.75rem',
  fontWeight: 600,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: '#6b7280',
  marginBottom: '0.75rem',
  paddingBottom: '0.5rem',
  borderBottom: '1px solid #e5e7eb',
}

const listStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
}

// ─── SpacingBar 컴포넌트 ──────────────────────────────────────────────────────

interface SpacingBarProps {
  /** CSS 변수명 (예: --spacing-16) */
  variable: string
  /** px 값 */
  value: string
  /** 변수가 다른 spacing 변수를 참조하는 alias인 경우 */
  resolvedVariable?: string
}

function SpacingBar({ variable, value, resolvedVariable }: SpacingBarProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '8px 16px',
        borderRadius: '8px',
        border: '1px solid #e5e7eb',
        backgroundColor: '#ffffff',
      }}
    >
      <div
        style={{
          width: '150px',
          flexShrink: 0,
          fontSize: '0.7rem',
          fontWeight: 600,
          color: '#111827',
          fontFamily: 'monospace',
        }}
      >
        {variable}
      </div>
      <div
        style={{
          flex: 1,
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#f5f7fa',
          borderRadius: '4px',
        }}
      >
        <div
          style={{
            height: '16px',
            width: `var(${variable})`,
            minWidth: '2px',
            backgroundColor: 'var(--color-brand-primary)',
            borderRadius: '2px',
          }}
        />
      </div>
      <div
        style={{
          width: '90px',
          flexShrink: 0,
          textAlign: 'right',
          fontSize: '0.65rem',
          color: '#6b7280',
          fontFamily: 'monospace',
        }}
      >
        {resolvedVariable ? `${value} (=${resolvedVariable})` : value}
      </div>
    </div>
  )
}

// ─── Section 컴포넌트 ─────────────────────────────────────────────────────────

interface SpacingSectionProps {
  title: string
  tokens: SpacingBarProps[]
}

function SpacingSection({ title, tokens }: SpacingSectionProps) {
  return (
    <div style={sectionStyle}>
      <div style={sectionTitleStyle}>{title}</div>
      <div style={listStyle}>
        {tokens.map((token) => (
          <SpacingBar key={token.variable} {...token} />
        ))}
      </div>
    </div>
  )
}

// ─── 스페이싱 데이터 ──────────────────────────────────────────────────────────

const coreSpacing: SpacingBarProps[] = [
  { variable: '--spacing-0', value: '0px' },
  { variable: '--spacing-2', value: '2px' },
  { variable: '--spacing-4', value: '4px' },
  { variable: '--spacing-8', value: '8px' },
  { variable: '--spacing-12', value: '12px' },
  { variable: '--spacing-16', value: '16px' },
  { variable: '--spacing-24', value: '24px' },
  { variable: '--spacing-32', value: '32px' },
  { variable: '--spacing-40', value: '40px' },
  { variable: '--spacing-48', value: '48px' },
  { variable: '--spacing-64', value: '64px' },
]

const legacySpacing: SpacingBarProps[] = [
  { variable: '--spacing-xs', value: '4px', resolvedVariable: '--spacing-4' },
  { variable: '--spacing-sm', value: '8px', resolvedVariable: '--spacing-8' },
  { variable: '--spacing-md', value: '12px', resolvedVariable: '--spacing-12' },
  { variable: '--spacing-lg', value: '16px', resolvedVariable: '--spacing-16' },
  { variable: '--spacing-xl', value: '24px', resolvedVariable: '--spacing-24' },
  {
    variable: '--spacing-2xl',
    value: '32px',
    resolvedVariable: '--spacing-32',
  },
]

// ─── Stories ─────────────────────────────────────────────────────────────────

/** 기본 스페이싱 토큰 (Core) — Figma 변수와 1:1 매핑된 스페이싱 스케일입니다. */
export const Core: Story = {
  render: () => (
    <div style={{ fontFamily: 'Pretendard, sans-serif' }}>
      <SpacingSection title="Core Spacing" tokens={coreSpacing} />
    </div>
  ),
}

/** Legacy 별칭 토큰 — 기존 코드 호환성을 위해 유지 중인 별칭입니다. 신규 코드에서는 사용하지 마세요. */
export const Legacy: Story = {
  render: () => (
    <div style={{ fontFamily: 'Pretendard, sans-serif' }}>
      <SpacingSection title="Legacy Aliases" tokens={legacySpacing} />
    </div>
  ),
}

/** 전체 스페이싱 스케일을 한 화면에서 확인합니다. */
export const AllSpacing: Story = {
  name: 'All Spacing',
  render: () => (
    <div style={{ fontFamily: 'Pretendard, sans-serif' }}>
      <SpacingSection title="Core Spacing" tokens={coreSpacing} />
      <SpacingSection title="Legacy Aliases" tokens={legacySpacing} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    // 스페이싱 바가 올바르게 렌더링되었는지 확인
    const bars = canvasElement.querySelectorAll('[style*="--spacing-"]')
    if (bars.length === 0) {
      throw new Error('스페이싱 바가 렌더링되지 않았습니다.')
    }
  },
}
