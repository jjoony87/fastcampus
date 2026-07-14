import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Foundation/Colors',
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

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
  gap: '0.75rem',
}

// ─── ColorSwatch 컴포넌트 ─────────────────────────────────────────────────────

interface ColorSwatchProps {
  /** CSS 변수명 (예: --color-gray-100) */
  variable: string
  /** 실제 hex 값 또는 참조 값 */
  value: string
  /** 변수가 var()를 참조하는 경우 실제 색상 값 */
  resolvedValue?: string
}

function ColorSwatch({ variable, value, resolvedValue }: ColorSwatchProps) {
  const displayColor = resolvedValue ?? value

  // 스와치 배경색이 밝은 경우 테두리 추가
  const isLight =
    displayColor === '#ffffff' ||
    displayColor === '#fafafa' ||
    displayColor === '#f9fafb' ||
    displayColor === '#f5f7fa' ||
    displayColor === '#f1f5f9' ||
    displayColor === '#fffbfc' ||
    displayColor === '#fff2f5' ||
    displayColor === '#f1f8fe' ||
    displayColor === '#f7faff' ||
    displayColor === '#eff6ff'

  return (
    <div
      style={{
        borderRadius: '8px',
        overflow: 'hidden',
        border: '1px solid #e5e7eb',
        backgroundColor: '#ffffff',
      }}
    >
      {/* 색상 스와치 */}
      <div
        style={{
          height: '64px',
          backgroundColor: `var(${variable})`,
          border: isLight ? '1px solid #e5e7eb' : undefined,
          boxSizing: 'border-box',
        }}
      />
      {/* 변수 정보 */}
      <div style={{ padding: '8px 10px' }}>
        <div
          style={{
            fontSize: '0.7rem',
            fontWeight: 600,
            color: '#111827',
            wordBreak: 'break-all',
            lineHeight: 1.4,
            marginBottom: '2px',
            fontFamily: 'monospace',
          }}
        >
          {variable}
        </div>
        <div
          style={{
            fontSize: '0.65rem',
            color: '#6b7280',
            fontFamily: 'monospace',
          }}
        >
          {value}
        </div>
        {resolvedValue && (
          <div
            style={{
              fontSize: '0.65rem',
              color: '#9ca3af',
              fontFamily: 'monospace',
            }}
          >
            → {resolvedValue}
          </div>
        )}
      </div>
    </div>
  )
}

// ─── 색상 데이터 ──────────────────────────────────────────────────────────────

const primitiveGray = [
  { variable: '--color-gray-100', value: '#ffffff' },
  { variable: '--color-gray-100-alt', value: '#f9fafb' },
  { variable: '--color-gray-200', value: '#fafafa' },
  { variable: '--color-gray-300', value: '#f5f7fa' },
  { variable: '--color-gray-305', value: '#f1f5f9' },
  { variable: '--color-gray-340', value: '#e2e8f0' },
  { variable: '--color-gray-360', value: '#e5e7eb' },
  { variable: '--color-gray-400', value: '#d1d5db' },
  { variable: '--color-gray-490', value: '#94a3b8' },
  { variable: '--color-gray-500', value: '#9ca3af' },
  { variable: '--color-gray-540', value: '#7c8484' },
  { variable: '--color-gray-600', value: '#6b7280' },
  { variable: '--color-gray-610', value: '#64748b' },
  { variable: '--color-gray-700', value: '#4b5563' },
  { variable: '--color-gray-800', value: '#374151' },
  { variable: '--color-gray-850', value: '#2c3030' },
  { variable: '--color-gray-900', value: '#262626' },
  { variable: '--color-gray-1000', value: '#161c1c' },
  { variable: '--color-gray-1050', value: '#0f172a' },
]

const primitiveBlue = [
  { variable: '--color-blue-20', value: '#f7faff' },
  { variable: '--color-blue-50', value: '#eff6ff' },
  { variable: '--color-blue-100', value: '#f1f8fe' },
  { variable: '--color-blue-120', value: '#dbeafe' },
  { variable: '--color-blue-200', value: '#b8dcfc' },
  { variable: '--color-blue-280', value: '#93c5fd' },
  { variable: '--color-blue-300', value: '#91caff' },
  { variable: '--color-blue-400', value: '#69b1ff' },
  { variable: '--color-blue-440', value: '#63a3fb' },
  { variable: '--color-blue-500', value: '#4096ff' },
  { variable: '--color-blue-540', value: '#3b82f6' },
  { variable: '--color-blue-600', value: '#1289f6' },
  { variable: '--color-blue-680', value: '#1d4ed8' },
  { variable: '--color-blue-700', value: '#0958d9' },
  { variable: '--color-blue-800', value: '#003eb3' },
  { variable: '--color-blue-900', value: '#002c8c' },
  { variable: '--color-blue-1000', value: '#001d66' },
]

const primitiveRed = [
  { variable: '--color-red-100', value: '#fffbfc' },
  { variable: '--color-red-200', value: '#fff2f5' },
  { variable: '--color-red-300', value: '#ffccc7' },
  { variable: '--color-red-400', value: '#ffa39e' },
  { variable: '--color-red-500', value: '#ff4d4f' },
  { variable: '--color-red-600', value: '#fc2a55' },
  { variable: '--color-red-700', value: '#cf1322' },
  { variable: '--color-red-800', value: '#a8071a' },
  { variable: '--color-red-900', value: '#820014' },
  { variable: '--color-red-1000', value: '#5c0011' },
]

const semanticText = [
  {
    variable: '--color-text-primary',
    value: 'var(--color-gray-1000)',
    resolvedValue: '#161c1c',
  },
  {
    variable: '--color-text-secondary',
    value: 'var(--color-gray-600)',
    resolvedValue: '#6b7280',
  },
  {
    variable: '--color-text-tertiary',
    value: 'var(--color-gray-500)',
    resolvedValue: '#9ca3af',
  },
  {
    variable: '--color-text-disabled',
    value: 'var(--color-gray-400)',
    resolvedValue: '#d1d5db',
  },
  {
    variable: '--color-text-onbrand',
    value: 'var(--color-gray-100)',
    resolvedValue: '#ffffff',
  },
  {
    variable: '--color-text-danger',
    value: 'var(--color-red-600)',
    resolvedValue: '#fc2a55',
  },
]

const semanticBackground = [
  {
    variable: '--color-background-default',
    value: 'var(--color-gray-100)',
    resolvedValue: '#ffffff',
  },
  {
    variable: '--color-background-subtle',
    value: 'var(--color-gray-200)',
    resolvedValue: '#fafafa',
  },
  {
    variable: '--color-background-muted',
    value: 'var(--color-gray-300)',
    resolvedValue: '#f5f7fa',
  },
  {
    variable: '--color-background-brand',
    value: 'var(--color-blue-600)',
    resolvedValue: '#1289f6',
  },
  {
    variable: '--color-background-brandsubtle',
    value: 'var(--color-blue-100)',
    resolvedValue: '#f1f8fe',
  },
  {
    variable: '--color-background-danger',
    value: 'var(--color-red-200)',
    resolvedValue: '#fff2f5',
  },
  {
    variable: '--color-background-dangersubtle',
    value: 'var(--color-red-100)',
    resolvedValue: '#fffbfc',
  },
]

const semanticBorder = [
  {
    variable: '--color-border-default',
    value: 'var(--color-gray-400)',
    resolvedValue: '#d1d5db',
  },
  {
    variable: '--color-border-strong',
    value: 'var(--color-gray-700)',
    resolvedValue: '#4b5563',
  },
  {
    variable: '--color-border-brand',
    value: 'var(--color-blue-600)',
    resolvedValue: '#1289f6',
  },
  {
    variable: '--color-border-danger',
    value: 'var(--color-red-600)',
    resolvedValue: '#fc2a55',
  },
]

const semanticContent = [
  {
    variable: '--color-content-default',
    value: 'var(--color-gray-800)',
    resolvedValue: '#374151',
  },
  {
    variable: '--color-content-strong',
    value: 'var(--color-gray-900)',
    resolvedValue: '#262626',
  },
  {
    variable: '--color-content-muted',
    value: 'var(--color-gray-700)',
    resolvedValue: '#4b5563',
  },
]

const semanticBrand = [
  {
    variable: '--color-brand-primary',
    value: 'var(--color-blue-600)',
    resolvedValue: '#1289f6',
  },
  {
    variable: '--color-interactive-primary',
    value: 'var(--color-blue-600)',
    resolvedValue: '#1289f6',
  },
  {
    variable: '--color-interactive-primaryhover',
    value: 'var(--color-blue-700)',
    resolvedValue: '#0958d9',
  },
  {
    variable: '--color-interactive-destructive',
    value: 'var(--color-red-600)',
    resolvedValue: '#fc2a55',
  },
  {
    variable: '--color-interactive-destructivehover',
    value: 'var(--color-red-700)',
    resolvedValue: '#cf1322',
  },
]

const legacyAliases = [
  {
    variable: '--primitive-white',
    value: 'var(--color-gray-100)',
    resolvedValue: '#ffffff',
  },
  {
    variable: '--primitive-gray-50',
    value: 'var(--color-gray-100-alt)',
    resolvedValue: '#f9fafb',
  },
  {
    variable: '--primitive-gray-200',
    value: 'var(--color-gray-360)',
    resolvedValue: '#e5e7eb',
  },
  {
    variable: '--primitive-gray-500',
    value: 'var(--color-gray-600)',
    resolvedValue: '#6b7280',
  },
  { variable: '--primitive-gray-900', value: '#111827' },
  {
    variable: '--primitive-blue-500',
    value: 'var(--color-blue-540)',
    resolvedValue: '#3b82f6',
  },
  { variable: '--primitive-green-500', value: '#22c55e' },
  { variable: '--primitive-red-500', value: '#ef4444' },
  {
    variable: '--color-bg-primary',
    value: 'var(--color-background-default)',
    resolvedValue: '#ffffff',
  },
  {
    variable: '--color-bg-secondary',
    value: 'var(--primitive-gray-50)',
    resolvedValue: '#f9fafb',
  },
  {
    variable: '--color-status-success',
    value: 'var(--primitive-green-500)',
    resolvedValue: '#22c55e',
  },
  {
    variable: '--color-status-error',
    value: 'var(--primitive-red-500)',
    resolvedValue: '#ef4444',
  },
]

// ─── Section 컴포넌트 ─────────────────────────────────────────────────────────

interface ColorSectionProps {
  title: string
  colors: Array<{ variable: string; value: string; resolvedValue?: string }>
}

function ColorSection({ title, colors }: ColorSectionProps) {
  return (
    <div style={sectionStyle}>
      <div style={sectionTitleStyle}>{title}</div>
      <div style={gridStyle}>
        {colors.map((color) => (
          <ColorSwatch key={color.variable} {...color} />
        ))}
      </div>
    </div>
  )
}

// ─── Stories ─────────────────────────────────────────────────────────────────

/** 원시 색상 토큰 (Primitive) — Figma 변수와 1:1 매핑된 기반 색상 팔레트입니다. */
export const Primitive: Story = {
  render: () => (
    <div style={{ fontFamily: 'Pretendard, sans-serif' }}>
      <ColorSection title="Primitive · Gray" colors={primitiveGray} />
      <ColorSection title="Primitive · Blue" colors={primitiveBlue} />
      <ColorSection title="Primitive · Red" colors={primitiveRed} />
    </div>
  ),
}

/** 의미론적 색상 토큰 (Semantic) — 역할 기반으로 정의된 색상입니다. Primitive를 참조합니다. */
export const Semantic: Story = {
  render: () => (
    <div style={{ fontFamily: 'Pretendard, sans-serif' }}>
      <ColorSection title="Semantic · Text" colors={semanticText} />
      <ColorSection title="Semantic · Background" colors={semanticBackground} />
      <ColorSection title="Semantic · Border" colors={semanticBorder} />
      <ColorSection title="Semantic · Content" colors={semanticContent} />
      <ColorSection
        title="Semantic · Brand / Interactive"
        colors={semanticBrand}
      />
    </div>
  ),
}

/** Legacy 별칭 토큰 — 기존 코드 호환성을 위해 유지 중인 별칭입니다. 신규 코드에서는 사용하지 마세요. */
export const Legacy: Story = {
  render: () => (
    <div style={{ fontFamily: 'Pretendard, sans-serif' }}>
      <ColorSection title="Legacy Aliases" colors={legacyAliases} />
    </div>
  ),
}

/** 전체 색상 팔레트를 한 화면에서 확인합니다. */
export const AllColors: Story = {
  name: 'All Colors',
  render: () => (
    <div style={{ fontFamily: 'Pretendard, sans-serif' }}>
      <ColorSection title="Primitive · Gray" colors={primitiveGray} />
      <ColorSection title="Primitive · Blue" colors={primitiveBlue} />
      <ColorSection title="Primitive · Red" colors={primitiveRed} />
      <ColorSection title="Semantic · Text" colors={semanticText} />
      <ColorSection title="Semantic · Background" colors={semanticBackground} />
      <ColorSection title="Semantic · Border" colors={semanticBorder} />
      <ColorSection title="Semantic · Content" colors={semanticContent} />
      <ColorSection
        title="Semantic · Brand / Interactive"
        colors={semanticBrand}
      />
      <ColorSection title="Legacy Aliases" colors={legacyAliases} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    // 스와치가 올바르게 렌더링되었는지 확인
    const swatches = canvasElement.querySelectorAll('[style*="--color-"]')
    if (swatches.length === 0) {
      throw new Error('색상 스와치가 렌더링되지 않았습니다.')
    }
  },
}
