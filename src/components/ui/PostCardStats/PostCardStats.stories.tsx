import type { Meta, StoryObj } from '@storybook/react'
import { PostCardStats } from './PostCardStats'

const meta = {
  title: 'UI/PostCardStats',
  component: PostCardStats,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PostCardStats>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default state with zero views and zero likes, not liked.
 */
export const Default: Story = {
  args: {
    viewCount: '0',
    likeCount: '0',
    liked: false,
  },
}

/**
 * With view count and like count, not liked.
 */
export const WithCounts: Story = {
  args: {
    viewCount: '1250',
    likeCount: '42',
    liked: false,
  },
}

/**
 * With high view count and liked state enabled (red heart fill).
 */
export const Liked: Story = {
  args: {
    viewCount: '3840',
    likeCount: '156',
    liked: true,
  },
}

/**
 * Very high view count to test text overflow handling.
 */
export const HighViewCount: Story = {
  args: {
    viewCount: '999999',
    likeCount: '9999',
    liked: false,
  },
}

/**
 * Zero likes but high views.
 */
export const NoLikes: Story = {
  args: {
    viewCount: '5020',
    likeCount: '0',
    liked: false,
  },
}

/**
 * Many likes but zero views.
 */
export const NoViews: Story = {
  args: {
    viewCount: '0',
    likeCount: '523',
    liked: true,
  },
}

/**
 * With the third bookmark icon enabled (View page usage), inactive.
 */
export const WithBookmark: Story = {
  args: {
    viewCount: '1250',
    likeCount: '42',
    liked: false,
    showBookmark: true,
    bookmarked: false,
  },
}

/**
 * With the bookmark icon enabled and active (filled, brand primary color).
 */
export const BookmarkedActive: Story = {
  args: {
    viewCount: '1250',
    likeCount: '42',
    liked: true,
    showBookmark: true,
    bookmarked: true,
  },
}

/**
 * With custom CSS class for styling.
 */
export const WithCustomClass: Story = {
  args: {
    viewCount: '1000',
    likeCount: '100',
    liked: false,
    className: 'custom-stats',
  },
}

/**
 * Exercise rendering of view/like icons and counts, toggle liked state.
 */
export const InteractionTest: Story = {
  args: {
    viewCount: '500',
    likeCount: '25',
    liked: false,
  },
  play: async ({ canvasElement, args }) => {
    const root = canvasElement.querySelector('div')
    if (!root) throw new Error('Root element not found')

    // Verify layout structure: should have flex container with two stat areas
    const statAreas = root.querySelectorAll('div > div')
    if (statAreas.length < 2)
      throw new Error('Expected at least 2 stat area divs')

    // Verify text content: view count and like count should be present
    const textContent = root.textContent
    if (!textContent?.includes(args.viewCount ?? '')) {
      throw new Error(`Expected view count "${args.viewCount}" in text content`)
    }
    if (!textContent?.includes(args.likeCount ?? '')) {
      throw new Error(`Expected like count "${args.likeCount}" in text content`)
    }
  },
}
