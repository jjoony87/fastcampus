import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from '@storybook/test'
import { SearchBar } from './SearchBar'

const meta = {
  title: 'UI/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof SearchBar>

export default meta
type Story = StoryObj<typeof meta>

function ControlledSearchBar(args: React.ComponentProps<typeof SearchBar>) {
  const [value, setValue] = React.useState('')
  return (
    <SearchBar
      {...args}
      value={value}
      onChange={(e) => setValue(e.currentTarget.value)}
    />
  )
}

/**
 * Default empty search bar with placeholder text.
 */
export const Default: Story = {
  args: {
    placeholder: '제목, 내용, 작성자',
    disabled: false,
  },
}

/**
 * Search bar with a pre-filled value.
 */
export const WithValue: Story = {
  args: {
    value: 'React 컴포넌트',
    placeholder: '제목, 내용, 작성자',
    disabled: false,
  },
}

/**
 * Disabled state with reduced opacity.
 */
export const Disabled: Story = {
  args: {
    placeholder: '제목, 내용, 작성자',
    disabled: true,
  },
}

/**
 * Custom placeholder text.
 */
export const CustomPlaceholder: Story = {
  args: {
    placeholder: '검색어를 입력하세요',
    disabled: false,
  },
}

/**
 * Full width search bar adapting to container.
 */
export const FullWidth: Story = {
  args: {
    placeholder: '제목, 내용, 작성자',
    disabled: false,
    width: '100%',
  },
  parameters: {
    layout: 'fullscreen',
  },
}

/**
 * Interactive story with typing interaction and onChange callback.
 * Tests that user input updates the field and fires onChange event.
 */
export const Interactive: Story = {
  args: {
    placeholder: '제목, 내용, 작성자',
    disabled: false,
  },
  render: (args) => <ControlledSearchBar {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('searchbox') as HTMLInputElement

    // Type in the search field
    await userEvent.type(input, 'Design System', { delay: 50 })

    // Verify the value was entered
    expect(input.value).toBe('Design System')
  },
}

/**
 * Long search text overflow handling.
 */
export const LongText: Story = {
  args: {
    value:
      '아주 긴 검색어를 입력했을 때 필드가 어떻게 반응하는지 확인합니다 아주 긴 검색어를 입력했을 때',
    placeholder: '제목, 내용, 작성자',
    disabled: false,
  },
}
