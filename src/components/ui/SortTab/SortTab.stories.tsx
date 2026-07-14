import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from '@storybook/test'
import { SortTab } from './SortTab'

const meta = {
  title: 'UI/SortTab',
  component: SortTab,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof SortTab>

export default meta
type Story = StoryObj<typeof meta>

const sampleOptions = [
  { value: 'latest', label: '최신순' },
  { value: 'popular', label: '인기순' },
  { value: 'comments', label: '댓글순' },
]

function ControlledSortTab(args: React.ComponentProps<typeof SortTab>) {
  const [selectedValue, setSelectedValue] = React.useState(args.value)
  return (
    <SortTab
      {...args}
      value={selectedValue}
      onChange={(value) => setSelectedValue(value)}
    />
  )
}

/**
 * Default state with three sort options; "latest" is selected.
 */
export const Default: Story = {
  args: {
    options: sampleOptions,
    value: 'latest',
  },
}

/**
 * Second option selected: "인기순" (popular).
 */
export const PopularSelected: Story = {
  args: {
    options: sampleOptions,
    value: 'popular',
  },
}

/**
 * Third option selected: "댓글순" (comments).
 */
export const CommentsSelected: Story = {
  args: {
    options: sampleOptions,
    value: 'comments',
  },
}

/**
 * Multiple sort options (5 items) to test horizontal layout with dividers.
 */
export const ManyOptions: Story = {
  args: {
    options: [
      { value: 'latest', label: '최신순' },
      { value: 'popular', label: '인기순' },
      { value: 'comments', label: '댓글순' },
      { value: 'views', label: '조회순' },
      { value: 'rating', label: '평점순' },
    ],
    value: 'latest',
  },
}

/**
 * Long label text in options to test overflow behavior.
 */
export const LongLabels: Story = {
  args: {
    options: [
      { value: 'latest', label: '최신 게시글' },
      { value: 'popular', label: '가장 인기 있는' },
      { value: 'trending', label: '트렌드 중인' },
    ],
    value: 'latest',
  },
}

/**
 * Interactive story with clickable tabs.
 * Tests that clicking a tab updates the selected state and fires onChange.
 */
export const Interactive: Story = {
  args: {
    options: sampleOptions,
    value: 'latest',
  },
  render: (args) => <ControlledSortTab {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const buttons = canvas.getAllByRole('button')

    // Verify first button (latest) is initially selected
    expect(buttons[0]).toHaveAttribute('aria-pressed', 'true')
    expect(buttons[1]).toHaveAttribute('aria-pressed', 'false')

    // Click on the second button (popular)
    await userEvent.click(buttons[1])

    // Verify state changed: second button now selected, first deselected
    expect(buttons[0]).toHaveAttribute('aria-pressed', 'false')
    expect(buttons[1]).toHaveAttribute('aria-pressed', 'true')

    // Click on the third button (comments)
    await userEvent.click(buttons[2])

    // Verify final state
    expect(buttons[1]).toHaveAttribute('aria-pressed', 'false')
    expect(buttons[2]).toHaveAttribute('aria-pressed', 'true')
  },
}
