import type { Meta, StoryObj } from '@storybook/react'
import { BookmarkButton } from './BookmarkButton'

const meta = {
  title: 'UI/BookmarkButton',
  component: BookmarkButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof BookmarkButton>

export default meta
type Story = StoryObj<typeof meta>

/** Default (inactive) state — outline icon in tertiary text color. */
export const Default: Story = {
  args: {
    bookmarked: false,
  },
}

/** Filled (active) state — solid icon in brand primary color. */
export const Filled: Story = {
  args: {
    bookmarked: true,
  },
}

/** With custom CSS class for styling. */
export const WithCustomClass: Story = {
  args: {
    bookmarked: false,
    className: 'custom-bookmark',
  },
}

/** Exercise the toggle interaction and aria-pressed state. */
export const InteractionTest: Story = {
  args: {
    bookmarked: false,
  },
  play: async ({ canvasElement, args }) => {
    const { within, expect } = await import('@storybook/test')
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: '북마크' })
    expect(button).toHaveAttribute(
      'aria-pressed',
      String(args.bookmarked ?? false),
    )
  },
}
