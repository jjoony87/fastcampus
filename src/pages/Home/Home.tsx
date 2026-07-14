import { useState } from 'react'
import type { CSSProperties } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavigationBar } from '../../components/ui/NavigationBar'
import { PostFilterHeader } from '../../components/ui/PostFilterHeader'
import { PostCard, type PostCardChip } from '../../components/ui/PostCard'
import { Divider } from '../../components/ui/Divider'
import type { PostCardImageType } from '../../components/ui/PostCardImage'
import type { SortTabOption } from '../../components/ui/SortTab'
import { MarginTop } from '../../components/layout/MarginTop/MarginTop'

const SORT_OPTIONS: SortTabOption[] = [
  { value: 'latest', label: '최신글' },
  { value: 'popular', label: '인기글' },
]

const NOTICE_CHIP: PostCardChip = {
  label: '공지사항',
  variant: 'notice',
  icon: 'notification',
}
const CATEGORY_CHIP: PostCardChip = {
  label: '디자인',
  variant: 'category',
  icon: 'design',
}

const NOTICE_PREVIEW =
  "안녕하세요, 피그마피디아 운영팀입니다. 커뮤니티가 점점 성장하면서 새롭게 정책을 정비하게 되었습니다. 앞으로 게시글 작성 시 카테고리를 필수로 선택해 주셔야 하며, 홍보성 게시글은 '홍보/공유' 카테고리 외 게시판에 올리실 경우 별도 안내 없이 이동 조치될 수 있습니다. 커뮤니티가 더 건강하게 운영될 수 있도록 멤버 여러분의 협조 부탁드립니다. 문의사항은 운영 DM으로 남겨주세요."
const INTRO_PREVIEW =
  '피그마피디아(Figmapedia)는 Figma 중심의 디자인 지식, 템플릿, 프로세스, 그리고 AI 기반 워크플로우를 체계적으로 정리·아카이빙하는 크리에이티브 지식 플랫폼입니다.'

interface PostItem {
  id: string
  title: string
  preview: string
  chips: PostCardChip[]
  thumbnailType: PostCardImageType
}

const POSTS: PostItem[] = [
  {
    id: '1',
    title: '피그마 커뮤니티는 역시 피그마피디아',
    preview: NOTICE_PREVIEW,
    chips: [NOTICE_CHIP],
    thumbnailType: 1,
  },
  {
    id: '2',
    title: '피그마 커뮤니티는 역시 피그마피디아',
    preview: INTRO_PREVIEW,
    chips: [CATEGORY_CHIP],
    thumbnailType: 2,
  },
  {
    id: '3',
    title: '피그마 커뮤니티는 역시 피그마피디아',
    preview: NOTICE_PREVIEW,
    chips: [NOTICE_CHIP],
    thumbnailType: 3,
  },
  {
    id: '4',
    title: '피그마 커뮤니티는 역시 피그마피디아',
    preview: INTRO_PREVIEW,
    chips: [NOTICE_CHIP, CATEGORY_CHIP],
    thumbnailType: 4,
  },
  {
    id: '5',
    title: '피그마 커뮤니티는 역시 피그마피디아',
    preview: INTRO_PREVIEW,
    chips: [CATEGORY_CHIP],
    thumbnailType: 5,
  },
  {
    id: '6',
    title: '피그마 커뮤니티는 역시 피그마피디아',
    preview: INTRO_PREVIEW,
    chips: [CATEGORY_CHIP],
    thumbnailType: 6,
  },
]

// ⚠️ 토큰 외 값: 콘텐츠 폭은 Figma 원본 고정값이며 기존 NavigationBar/PostCard와
// 동일하게 840px를 그대로 사용한다 (대응하는 spacing 토큰 없음).
const CONTENT_WIDTH = '840px'

const pageStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: 'var(--color-background-default)',
}

const bodyStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: CONTENT_WIDTH,
  paddingTop: 'var(--spacing-32)',
  paddingBottom: 'var(--spacing-32)',
}

const listStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
}

export function Home() {
  const navigate = useNavigate()
  const [sortValue, setSortValue] = useState('latest')

  return (
    <div style={pageStyle}>
      <MarginTop token="spacing-32" />
      <NavigationBar state="logout" />
      <div style={bodyStyle}>
        <PostFilterHeader
          width={CONTENT_WIDTH}
          sortOptions={SORT_OPTIONS}
          sortValue={sortValue}
          onSortChange={setSortValue}
          searchPlaceholder="제목, 내용, 작성자"
        />
        <Divider />
        <div style={listStyle}>
          {POSTS.map((post, index) => (
            <div key={post.id}>
              <PostCard
                title={post.title}
                preview={post.preview}
                timeAgo="1분 전"
                chips={post.chips}
                thumbnailType={post.thumbnailType}
                viewCount="0"
                likeCount="0"
                onClick={
                  index === 0 ? () => navigate(`/view/${post.id}`) : undefined
                }
              />
              <Divider />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
