import type { Meta, StoryObj } from '@storybook/react'
import { PostWriteHeader } from './PostWriteHeader'

const meta = {
  title: 'UI/PostWriteHeader',
  component: PostWriteHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof PostWriteHeader>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default state with Figma-specified copy text.
 */
export const Default: Story = {
  args: {
    title: '게시글 쓰기',
    subtitle: '건전한 커뮤니티를 위해 바른말 고운말을 씁시다.',
  },
  play: async ({ canvasElement }) => {
    const root = canvasElement.querySelector('[style*="flex"]')
    if (!root) {
      throw new Error('Root element not found')
    }
    const title = root.querySelector('h1')
    const subtitle = root.querySelector('p')
    if (!title || !subtitle) {
      throw new Error('Title or subtitle element not found')
    }
    if (title.textContent !== '게시글 쓰기') {
      throw new Error('Title text does not match')
    }
    if (
      subtitle.textContent !== '건전한 커뮤니티를 위해 바른말 고운말을 씁시다.'
    ) {
      throw new Error('Subtitle text does not match')
    }
  },
}

/**
 * Custom title with default subtitle.
 */
export const CustomTitle: Story = {
  args: {
    title: '새로운 게시글',
    subtitle: '건전한 커뮤니티를 위해 바른말 고운말을 씁시다.',
  },
}

/**
 * Custom subtitle with default title.
 */
export const CustomSubtitle: Story = {
  args: {
    title: '게시글 쓰기',
    subtitle: '올바른 정보를 공유해주세요.',
  },
}

/**
 * Both custom title and subtitle.
 */
export const CustomBoth: Story = {
  args: {
    title: '스토리 작성',
    subtitle: '자신의 경험을 나누어주세요.',
  },
}

/**
 * Custom width constraint (e.g. for fixed layouts).
 * Component accepts any CSS width value via width prop.
 */
export const ConstrainedWidth: Story = {
  args: {
    title: '게시글 쓰기',
    subtitle: '건전한 커뮤니티를 위해 바른말 고운말을 씁시다.',
    width: '50%',
  },
}

/**
 * Full width adapting to container.
 */
export const FullWidth: Story = {
  args: {
    title: '게시글 쓰기',
    subtitle: '건전한 커뮤니티를 위해 바른말 고운말을 씁시다.',
    width: '100%',
  },
  parameters: {
    layout: 'fullscreen',
  },
}
