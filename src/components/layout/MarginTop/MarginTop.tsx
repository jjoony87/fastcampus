// 토큰 기반 상단 여백을 추가하는 레이아웃 컴포넌트
export interface MarginTopProps {
  /** spacing 토큰 이름 (예: 'spacing-32') */
  token: string
}

export function MarginTop({ token }: MarginTopProps) {
  return <div style={{ height: `var(--${token})` }} aria-hidden="true" />
}
