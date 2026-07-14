import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { PostCard } from './PostCard'

const meta = {
  title: 'UI/PostCard',
  component: PostCard,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    preview: { control: 'text' },
    timeAgo: { control: 'text' },
    showThumbnail: { control: 'boolean' },
    thumbnailType: {
      control: 'radio',
      options: [1, 2, 3, 4, 5, 6],
    },
    viewCount: { control: 'text' },
    likeCount: { control: 'text' },
  },
} satisfies Meta<typeof PostCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: '디자인 시스템 토큰 설계 가이드',
    preview:
      '디자인 시스템에서 토큰을 어떻게 설계하고 관리하면 좋을지에 대한 실무 가이드입니다. 색상, 스페이싱, 타이포그래피 토큰의 네이밍과 계층 구조를 다룹니다.',
    timeAgo: '3시간 전',
    showThumbnail: true,
    thumbnailType: 1,
    thumbnailAlt: '디자인 시스템 가이드',
    viewCount: '1,234',
    likeCount: '56',
    onClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const { userEvent, within, expect } = await import('@storybook/test')

    const canvas = within(canvasElement)
    const article = canvas.getByRole('link')

    expect(article).toBeInTheDocument()
    expect(article).toBeVisible()

    await userEvent.click(article)
    expect(args.onClick).toHaveBeenCalled()
  },
}

export const WithThumbnail: Story = {
  args: {
    title: '디자인 시스템 토큰 설계 가이드',
    preview:
      '디자인 시스템에서 토큰을 어떻게 설계하고 관리하면 좋을지에 대한 실무 가이드입니다. 색상, 스페이싱, 타이포그래피 토큰의 네이밍과 계층 구조를 다룹니다.',
    timeAgo: '3시간 전',
    showThumbnail: true,
    thumbnailType: 1,
    thumbnailAlt: '디자인 시스템 가이드',
    viewCount: '1,234',
    likeCount: '56',
    onClick: fn(),
  },
}

export const WithoutThumbnail: Story = {
  args: {
    title: '디자인 시스템 토큰 설계 가이드',
    preview:
      '디자인 시스템에서 토큰을 어떻게 설계하고 관리하면 좋을지에 대한 실무 가이드입니다. 색상, 스페이싱, 타이포그래피 토큰의 네이밍과 계층 구조를 다룹니다.',
    timeAgo: '3시간 전',
    showThumbnail: false,
    viewCount: '1,234',
    likeCount: '56',
    onClick: fn(),
  },
}

export const ThumbnailType2: Story = {
  args: {
    title: '색상 토큰 활용법',
    preview: '색상 토큰의 의미론적 네이밍과 실제 구현 방법을 배워봅시다.',
    timeAgo: '2일 전',
    showThumbnail: true,
    thumbnailType: 2,
    thumbnailAlt: '색상 토큰',
    viewCount: '890',
    likeCount: '45',
    onClick: fn(),
  },
}

export const ThumbnailType3: Story = {
  args: {
    title: '반응형 디자인의 기본',
    preview: '모든 화면 크기에 대응하는 디자인 시스템을 구축하는 방법입니다.',
    timeAgo: '1주 전',
    showThumbnail: true,
    thumbnailType: 3,
    thumbnailAlt: '반응형 디자인',
    viewCount: '2,567',
    likeCount: '123',
    onClick: fn(),
  },
}

export const LongTitle: Story = {
  args: {
    title:
      '디자인 시스템 토큰 설계 가이드: 색상, 스페이싱, 타이포그래피를 중심으로 한 완벽한 예제',
    preview:
      '디자인 시스템에서 토큰을 어떻게 설계하고 관리하면 좋을지에 대한 실무 가이드입니다.',
    timeAgo: '3시간 전',
    showThumbnail: true,
    thumbnailType: 4,
    thumbnailAlt: '가이드',
    viewCount: '3,456',
    likeCount: '234',
    onClick: fn(),
  },
}

export const LongPreview: Story = {
  args: {
    title: '토큰 설계 101',
    preview:
      '이 글에서는 디자인 시스템의 기초가 되는 토큰을 어떻게 설계하고 관리하는지에 대해 상세히 설명합니다. 색상 토큰부터 타이포그래피, 스페이싱까지 모든 종류의 토큰에 대한 실무 가이드를 제공하며, 다양한 예시와 베스트 프랙티스를 포함하고 있습니다.',
    timeAgo: '30분 전',
    showThumbnail: true,
    thumbnailType: 5,
    thumbnailAlt: '가이드',
    viewCount: '5,678',
    likeCount: '345',
    onClick: fn(),
  },
}

export const NonInteractive: Story = {
  args: {
    title: '디자인 시스템 토큰 설계 가이드',
    preview:
      '디자인 시스템에서 토큰을 어떻게 설계하고 관리하면 좋을지에 대한 실무 가이드입니다. 색상, 스페이싱, 타이포그래피 토큰의 네이밍과 계층 구조를 다룹니다.',
    timeAgo: '3시간 전',
    showThumbnail: true,
    thumbnailType: 1,
    thumbnailAlt: '디자인 시스템 가이드',
    viewCount: '1,234',
    likeCount: '56',
  },
}

export const HighViewCount: Story = {
  args: {
    title: '인기 있는 글',
    preview: '많은 조회수를 기록한 인기 글입니다.',
    timeAgo: '1개월 전',
    showThumbnail: true,
    thumbnailType: 6,
    thumbnailAlt: '인기글',
    viewCount: '12,345',
    likeCount: '678',
    onClick: fn(),
  },
}

export const RecentPost: Story = {
  args: {
    title: '방금 작성한 글',
    preview: '가장 최근에 작성된 게시물입니다.',
    timeAgo: '1분 전',
    showThumbnail: true,
    thumbnailType: 1,
    thumbnailAlt: '최신글',
    viewCount: '3',
    likeCount: '0',
    onClick: fn(),
  },
}

export const WithChips: Story = {
  args: {
    title: '공지: 서비스 점검',
    preview: '다음 주 토요일 오전에 서비스 점검을 진행합니다.',
    timeAgo: '2시간 전',
    chips: [
      { label: '공지사항', variant: 'notice', icon: 'notification' },
      { label: '긴급', variant: 'notice', icon: 'notification' },
    ],
    showThumbnail: true,
    thumbnailType: 2,
    thumbnailAlt: '공지',
    viewCount: '5,432',
    likeCount: '12',
    onClick: fn(),
  },
}

export const WithMultipleChips: Story = {
  args: {
    title: '컴포넌트 라이브러리 업데이트',
    preview: '새로운 컴포넌트가 추가되었습니다.',
    timeAgo: '5시간 전',
    chips: [
      { label: '개발', variant: 'category', icon: 'design' },
      { label: '업데이트', variant: 'category' },
      { label: 'UI', variant: 'category' },
    ],
    showThumbnail: true,
    thumbnailType: 3,
    thumbnailAlt: '업데이트',
    viewCount: '678',
    likeCount: '89',
    onClick: fn(),
  },
}

export const WithoutChips: Story = {
  args: {
    title: '디자인 시스템 토큰 설계 가이드',
    preview:
      '디자인 시스템에서 토큰을 어떻게 설계하고 관리하면 좋을지에 대한 실무 가이드입니다.',
    timeAgo: '3시간 전',
    chips: [],
    showThumbnail: true,
    thumbnailType: 1,
    thumbnailAlt: '가이드',
    viewCount: '1,234',
    likeCount: '56',
    onClick: fn(),
  },
}

export const KeyboardInteraction: Story = {
  args: {
    title: '디자인 시스템 토큰 설계 가이드',
    preview:
      '디자인 시스템에서 토큰을 어떻게 설계하고 관리하면 좋을지에 대한 실무 가이드입니다. 색상, 스페이싱, 타이포그래피 토큰의 네이밍과 계층 구조를 다룹니다.',
    timeAgo: '3시간 전',
    showThumbnail: true,
    thumbnailType: 1,
    thumbnailAlt: '디자인 시스템 가이드',
    viewCount: '1,234',
    likeCount: '56',
    onClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const { userEvent, within, expect } = await import('@storybook/test')

    const canvas = within(canvasElement)
    const article = canvas.getByRole('link')

    expect(article).toBeInTheDocument()

    article.focus()
    expect(article).toHaveFocus()

    await userEvent.keyboard('{Enter}')
    expect(args.onClick).toHaveBeenCalled()
  },
}
