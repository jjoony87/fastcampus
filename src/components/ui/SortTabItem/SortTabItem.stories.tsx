import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from '@storybook/test'
import { SortTabItem } from './SortTabItem'

const meta = {
  title: 'UI/SortTabItem',
  component: SortTabItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof SortTabItem>

export default meta
type Story = StoryObj<typeof meta>

function ControlledSortTabItem(args: React.ComponentProps<typeof SortTabItem>) {
  const [isSelected, setIsSelected] = React.useState(false)
  return (
    <SortTabItem
      {...args}
      state={isSelected ? 'selected' : 'default'}
      onClick={() => setIsSelected(!isSelected)}
    />
  )
}

/**
 * Default state: unselected tab item without icon.
 */
export const Default: Story = {
  args: {
    state: 'default',
    text: 'Label',
  },
}

/**
 * Selected state: shows check icon and bold text.
 */
export const Selected: Story = {
  args: {
    state: 'selected',
    text: 'Label',
  },
}

/**
 * Default state with custom label text.
 */
export const CustomLabel: Story = {
  args: {
    state: 'default',
    text: '최신순',
  },
}

/**
 * Selected state with custom label text.
 */
export const SelectedCustom: Story = {
  args: {
    state: 'selected',
    text: '최신순',
  },
}

/**
 * Long text in default state to test overflow behavior.
 */
export const LongTextDefault: Story = {
  args: {
    state: 'default',
    text: '가장 인기 있는 게시글',
  },
}

/**
 * Long text in selected state to test overflow behavior with icon.
 */
export const LongTextSelected: Story = {
  args: {
    state: 'selected',
    text: '가장 인기 있는 게시글',
  },
}

/**
 * Interactive story with click handler.
 * Tests that onClick callback fires when clicked.
 */
export const Interactive: Story = {
  args: {
    state: 'default',
    text: '정렬',
  },
  render: (args) => <ControlledSortTabItem {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')

    // Verify initial aria-pressed state
    expect(button).toHaveAttribute('aria-pressed', 'false')

    // Click the button
    await userEvent.click(button)

    // Verify aria-pressed changed to true
    expect(button).toHaveAttribute('aria-pressed', 'true')
  },
}
