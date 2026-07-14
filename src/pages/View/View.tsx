import { useState } from 'react'
import type { CSSProperties } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavigationBar } from '../../components/ui/NavigationBar'
import { ButtonSmall } from '../../components/ui/Button'
import { PostWriteHeader } from '../../components/ui/PostWriteHeader'
import { DateText } from '../../components/ui/DateText'
import { Divider } from '../../components/ui/Divider'
import { ContentInputContainer } from '../../components/ui/ContentInputContainer'
import { PostCardStats } from '../../components/ui/PostCardStats'

const BODY_TEXT =
  "안녕하세요, 피그마피디아 운영팀입니다. 커뮤니티가 점점 성장하면서 새롭게 정책을 정비하게 되었습니다. 앞으로 게시글 작성 시 카테고리를 필수로 선택해 주셔야 하며, 홍보성 게시글은 '홍보/공유' 카테고리 외 게시판에 올리실 경우 별도 안내 없이 이동 조치될 수 있습니다. 커뮤니티가 더 건강하게 운영될 수 있도록 멤버 여러분의 협조 부탁드립니다. 문의사항은 운영 DM으로 남겨주세요."

// ⚠️ 토큰 외 값: 콘텐츠 폭은 Figma 원본 고정값이며 기존 Home 페이지와
// 동일하게 840px를 그대로 사용한다 (대응하는 spacing 토큰 없음).
const CONTENT_WIDTH = '840px'

const pageStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: 'var(--color-background-default)',
}

const feedContainerStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  paddingTop: 'var(--spacing-48)',
  paddingBottom: 'var(--spacing-48)',
}

const postStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 'var(--spacing-12)',
  width: CONTENT_WIDTH,
}

const headerRowStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  paddingTop: 'var(--spacing-12)',
  paddingBottom: 'var(--spacing-12)',
}

export function View() {
  const navigate = useNavigate()
  const [bookmarked, setBookmarked] = useState(false)

  return (
    <div style={pageStyle}>
      <NavigationBar state="logout" />
      <div style={feedContainerStyle}>
        <div style={postStyle}>
          <div style={headerRowStyle}>
            <ButtonSmall
              type="icon"
              icon="arrow_left"
              style="outline"
              radius="var(--radius-circle)"
              aria-label="뒤로가기"
              onClick={() => navigate(-1)}
            />
          </div>
          <PostWriteHeader
            title="피그마피디아 짱짱"
            subtitle="피튜"
            width={CONTENT_WIDTH}
          />
          <DateText value="26.05.06" />
          <Divider />
          <ContentInputContainer
            state="filled"
            imageType={1}
            imageAlt=""
            value={BODY_TEXT}
          />
          <PostCardStats
            viewCount="56,654"
            likeCount="99,999"
            showBookmark
            bookmarked={bookmarked}
            onBookmarkClick={() => setBookmarked((prev) => !prev)}
          />
        </div>
      </div>
    </div>
  )
}
