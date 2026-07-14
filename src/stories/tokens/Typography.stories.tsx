import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Foundation/Typography',
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
  gap: '0.75rem',
}

// ─── TypeSample 컴포넌트 ──────────────────────────────────────────────────────

interface TypeSampleProps {
  /** CSS 변수명 (예: --display-lg-bold) */
  variable: string
  /** font shorthand 값 (weight / size / line-height / family) */
  font: string
  /** 화면에 보여줄 샘플 텍스트 */
  sample: string
}

function TypeSample({ variable, font, sample }: TypeSampleProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        gap: '1.5rem',
        padding: '14px 16px',
        borderRadius: '8px',
        border: '1px solid #e5e7eb',
        backgroundColor: '#ffffff',
      }}
    >
      <div style={{ font: `var(${variable})`, color: '#111827' }}>{sample}</div>
      <div style={{ flexShrink: 0, textAlign: 'right' }}>
        <div
          style={{
            fontSize: '0.7rem',
            fontWeight: 600,
            color: '#111827',
            fontFamily: 'monospace',
            marginBottom: '2px',
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
          {font}
        </div>
      </div>
    </div>
  )
}

// ─── ScaleSample 컴포넌트 (Primitive 스케일용) ───────────────────────────────

interface ScaleSampleProps {
  variable: string
  value: string
  sample: string
  /** 미리보기에 추가로 적용할 스타일 (font-size 등) */
  previewStyle: React.CSSProperties
}

function ScaleSample({
  variable,
  value,
  sample,
  previewStyle,
}: ScaleSampleProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        gap: '1.5rem',
        padding: '12px 16px',
        borderRadius: '8px',
        border: '1px solid #e5e7eb',
        backgroundColor: '#ffffff',
      }}
    >
      <div style={{ ...previewStyle, color: '#111827' }}>{sample}</div>
      <div style={{ flexShrink: 0, textAlign: 'right' }}>
        <div
          style={{
            fontSize: '0.7rem',
            fontWeight: 600,
            color: '#111827',
            fontFamily: 'monospace',
            marginBottom: '2px',
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
      </div>
    </div>
  )
}

// ─── Section 컴포넌트 ─────────────────────────────────────────────────────────

interface TypeSectionProps {
  title: string
  children: React.ReactNode
}

function TypeSection({ title, children }: TypeSectionProps) {
  return (
    <div style={sectionStyle}>
      <div style={sectionTitleStyle}>{title}</div>
      <div style={listStyle}>{children}</div>
    </div>
  )
}

// ─── 데이터 — Primitive 스케일 ─────────────────────────────────────────────────

const fontSizes = [
  { variable: '--typography-size-12', value: '12px' },
  { variable: '--typography-size-13', value: '13px' },
  { variable: '--typography-size-14', value: '14px' },
  { variable: '--typography-size-16', value: '16px' },
  { variable: '--typography-size-18', value: '18px' },
  { variable: '--typography-size-20', value: '20px' },
  { variable: '--typography-size-24', value: '24px' },
  { variable: '--typography-size-32', value: '32px' },
]

const lineHeights = [
  { variable: '--typography-line-height-18', value: '18px' },
  { variable: '--typography-line-height-20', value: '20px' },
  { variable: '--typography-line-height-21', value: '21px' },
  { variable: '--typography-line-height-24', value: '24px' },
  { variable: '--typography-line-height-27', value: '27px' },
  { variable: '--typography-line-height-30', value: '30px' },
  { variable: '--typography-line-height-36', value: '36px' },
  { variable: '--typography-line-height-48', value: '48px' },
]

const fontWeights = [
  { variable: '--typography-font-weight-regular', value: '400' },
  { variable: '--typography-font-weight-medium', value: '500' },
  { variable: '--typography-font-weight-bold', value: '700' },
]

// ─── 데이터 — Text Styles ─────────────────────────────────────────────────────

const displayStyles = [
  { variable: '--display-lg-bold', font: '700 32px/48px Pretendard' },
  { variable: '--display-lg-regular', font: '400 32px/48px Pretendard' },
  { variable: '--display-sm-bold', font: '700 24px/36px Pretendard' },
  { variable: '--display-sm-regular', font: '400 24px/36px Pretendard' },
]

const titleStyles = [
  { variable: '--title-lg-bold', font: '700 20px/30px Pretendard' },
  { variable: '--title-lg-regular', font: '400 20px/30px Pretendard' },
  { variable: '--title-sm-bold', font: '700 18px/27px Pretendard' },
  { variable: '--title-sm-regular', font: '400 18px/27px Pretendard' },
]

const bodyStyles = [
  { variable: '--body-lg-bold', font: '700 16px/24px Pretendard' },
  { variable: '--body-lg-regular', font: '400 16px/24px Pretendard' },
  { variable: '--body-sm-bold', font: '700 14px/21px Pretendard' },
  { variable: '--body-sm-regular', font: '400 14px/21px Pretendard' },
]

const captionStyles = [
  { variable: '--caption-lg-bold', font: '700 13px/20px Pretendard' },
  { variable: '--caption-lg-medium', font: '500 13px/20px Pretendard' },
  { variable: '--caption-lg-regular', font: '400 13px/20px Pretendard' },
  { variable: '--caption-sm-bold', font: '700 12px/18px Pretendard' },
  { variable: '--caption-sm-medium', font: '500 12px/18px Pretendard' },
  { variable: '--caption-sm-regular', font: '400 12px/18px Pretendard' },
]

const SAMPLE_TEXT = '디자인 시스템 타이포그래피 Aa 가나다'

// ─── Stories ─────────────────────────────────────────────────────────────────

/** 원시 타이포그래피 토큰 (Primitive) — font size / line height / font weight 스케일입니다. */
export const Primitive: Story = {
  render: () => (
    <div style={{ fontFamily: 'Pretendard, sans-serif' }}>
      <TypeSection title="Font Size">
        {fontSizes.map((token) => (
          <ScaleSample
            key={token.variable}
            variable={token.variable}
            value={token.value}
            sample="Aa 가나다"
            previewStyle={{ fontSize: `var(${token.variable})` }}
          />
        ))}
      </TypeSection>
      <TypeSection title="Line Height">
        {lineHeights.map((token) => (
          <ScaleSample
            key={token.variable}
            variable={token.variable}
            value={token.value}
            sample="Aa 가나다"
            previewStyle={{
              fontSize: '16px',
              lineHeight: `var(${token.variable})`,
              background: 'linear-gradient(#f1f5f9, #f1f5f9) padding-box',
            }}
          />
        ))}
      </TypeSection>
      <TypeSection title="Font Weight">
        {fontWeights.map((token) => (
          <ScaleSample
            key={token.variable}
            variable={token.variable}
            value={token.value}
            sample="Aa 가나다"
            previewStyle={{
              fontSize: '16px',
              fontWeight: `var(${token.variable})`,
            }}
          />
        ))}
      </TypeSection>
    </div>
  ),
}

/** Display 스타일 — 가장 큰 타이틀/랜딩 문구에 사용하는 텍스트 스타일입니다. */
export const Display: Story = {
  render: () => (
    <div style={{ fontFamily: 'Pretendard, sans-serif' }}>
      <TypeSection title="Display">
        {displayStyles.map((style) => (
          <TypeSample key={style.variable} {...style} sample={SAMPLE_TEXT} />
        ))}
      </TypeSection>
    </div>
  ),
}

/** Title(Heading) 스타일 — 섹션/카드 제목 등에 사용하는 텍스트 스타일입니다. */
export const Title: Story = {
  render: () => (
    <div style={{ fontFamily: 'Pretendard, sans-serif' }}>
      <TypeSection title="Title (Heading)">
        {titleStyles.map((style) => (
          <TypeSample key={style.variable} {...style} sample={SAMPLE_TEXT} />
        ))}
      </TypeSection>
    </div>
  ),
}

/** Body 스타일 — 본문 텍스트에 사용하는 텍스트 스타일입니다. */
export const Body: Story = {
  render: () => (
    <div style={{ fontFamily: 'Pretendard, sans-serif' }}>
      <TypeSection title="Body">
        {bodyStyles.map((style) => (
          <TypeSample key={style.variable} {...style} sample={SAMPLE_TEXT} />
        ))}
      </TypeSection>
    </div>
  ),
}

/** Caption 스타일 — 보조 설명, 라벨 등 작은 텍스트에 사용하는 스타일입니다. */
export const Caption: Story = {
  render: () => (
    <div style={{ fontFamily: 'Pretendard, sans-serif' }}>
      <TypeSection title="Caption">
        {captionStyles.map((style) => (
          <TypeSample key={style.variable} {...style} sample={SAMPLE_TEXT} />
        ))}
      </TypeSection>
    </div>
  ),
}

/** 전체 타이포그래피 스타일을 한 화면에서 확인합니다. */
export const AllStyles: Story = {
  name: 'All Styles',
  render: () => (
    <div style={{ fontFamily: 'Pretendard, sans-serif' }}>
      <TypeSection title="Display">
        {displayStyles.map((style) => (
          <TypeSample key={style.variable} {...style} sample={SAMPLE_TEXT} />
        ))}
      </TypeSection>
      <TypeSection title="Title (Heading)">
        {titleStyles.map((style) => (
          <TypeSample key={style.variable} {...style} sample={SAMPLE_TEXT} />
        ))}
      </TypeSection>
      <TypeSection title="Body">
        {bodyStyles.map((style) => (
          <TypeSample key={style.variable} {...style} sample={SAMPLE_TEXT} />
        ))}
      </TypeSection>
      <TypeSection title="Caption">
        {captionStyles.map((style) => (
          <TypeSample key={style.variable} {...style} sample={SAMPLE_TEXT} />
        ))}
      </TypeSection>
    </div>
  ),
  play: async ({ canvasElement }) => {
    // 텍스트 스타일이 올바르게 렌더링되었는지 확인
    const samples = canvasElement.querySelectorAll(
      '[style*="--display-"], [style*="--title-"], [style*="--body-"], [style*="--caption-"]',
    )
    if (samples.length === 0) {
      throw new Error('타이포그래피 샘플이 렌더링되지 않았습니다.')
    }
  },
}
