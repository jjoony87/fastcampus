import type { Meta, StoryObj } from '@storybook/react'
import { ContentInputContainer } from './ContentInputContainer'

const meta = {
  title: 'UI/ContentInputContainer',
  component: ContentInputContainer,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ContentInputContainer>

export default meta
type Story = StoryObj<typeof meta>

/** The default `empty` state showing a bordered container with placeholder text. */
export const Empty: Story = {
  args: {
    state: 'empty',
    placeholder: '게시글 내용을 입력해주세요.',
  },
  play: async ({ canvasElement }) => {
    const { within, expect } = await import('@storybook/test')
    const canvas = within(canvasElement)
    const container = canvas.getByText('게시글 내용을 입력해주세요.')
    expect(container).toBeInTheDocument()
  },
}

/** Custom placeholder text in the `empty` state. */
export const EmptyCustomPlaceholder: Story = {
  args: {
    state: 'empty',
    placeholder: '여기에 내용을 작성하세요.',
  },
  play: async ({ canvasElement }) => {
    const { within, expect } = await import('@storybook/test')
    const canvas = within(canvasElement)
    const placeholder = canvas.getByText('여기에 내용을 작성하세요.')
    expect(placeholder).toBeInTheDocument()
  },
}

/** The `filled` state showing post content with image and body text. */
export const Filled: Story = {
  args: {
    state: 'filled',
    value:
      '이것은 게시글 본문입니다. 사용자가 입력한 콘텐츠가 여기에 표시됩니다.',
    imageType: 1,
    imageAlt: 'Post content image',
  },
  play: async ({ canvasElement }) => {
    const { within, expect } = await import('@storybook/test')
    const canvas = within(canvasElement)
    const bodyText = canvas.getByText(
      '이것은 게시글 본문입니다. 사용자가 입력한 콘텐츠가 여기에 표시됩니다.',
    )
    expect(bodyText).toBeInTheDocument()
  },
}

/** Filled state with different post image theme (type 2). */
export const FilledImageType2: Story = {
  args: {
    state: 'filled',
    value: '다양한 이미지 스타일을 지원합니다.',
    imageType: 2,
    imageAlt: 'Alternative post image',
  },
}

/** Filled state with long-form content. */
export const FilledLongContent: Story = {
  args: {
    state: 'filled',
    value:
      '장문의 콘텐츠를 입력하면 텍스트가 자동으로 줄 바꿈되어 표시됩니다. 이 컴포넌트는 word-break: break-word를 사용하여 긴 단어도 적절하게 처리합니다. 사용자는 여러 줄의 텍스트를 입력할 수 있습니다.',
    imageType: 1,
    imageAlt: 'Long content image',
  },
}

/** Filled state with short content. */
export const FilledShortContent: Story = {
  args: {
    state: 'filled',
    value: '짧은 내용입니다.',
    imageType: 1,
    imageAlt: 'Short content image',
  },
}
