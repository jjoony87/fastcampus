import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Category } from './Category'

const meta = {
  title: 'UI/Category',
  component: Category,
  tags: ['autodocs'],
  argTypes: {
    state: {
      description: 'Selection state (default or selected)',
      control: 'select',
      options: ['default', 'selected'],
    },
    children: {
      description: 'Category label text',
      control: 'text',
    },
    onClick: {
      description: 'Click handler for selection',
    },
  },
} satisfies Meta<typeof Category>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default state category (unselected).
 */
export const Default: Story = {
  args: {
    state: 'default',
    children: 'All',
  },
  play: async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button')
    expect(button).toHaveAttribute('aria-pressed', 'false')
    expect(button).toHaveTextContent('All')
  },
}

/**
 * Selected state category with visual underline and primary text color.
 */
export const Selected: Story = {
  args: {
    state: 'selected',
    children: 'Design',
  },
  play: async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button')
    expect(button).toHaveAttribute('aria-pressed', 'true')
    expect(button).toHaveTextContent('Design')
  },
}

/**
 * Long text category (tests overflow handling with nowrap).
 */
export const LongText: Story = {
  args: {
    state: 'default',
    children: 'Very Long Category Label Text',
  },
  play: async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button')
    expect(button).toHaveTextContent('Very Long Category Label Text')
  },
}

/**
 * Selected category with long text.
 */
export const SelectedLongText: Story = {
  args: {
    state: 'selected',
    children: 'Very Long Category Label Text',
  },
  play: async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button')
    expect(button).toHaveAttribute('aria-pressed', 'true')
    expect(button).toHaveTextContent('Very Long Category Label Text')
  },
}

/**
 * Category with custom className.
 */
export const WithCustomClass: Story = {
  args: {
    state: 'default',
    children: 'Tagged',
    className: 'custom-category-class',
  },
  play: async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button')
    expect(button).toHaveClass('custom-category-class')
  },
}
