import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Chip } from './Chip'

const meta = {
  title: 'UI/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Visual variant: category (muted bg) or notice (danger bg)',
      control: 'select',
      options: ['category', 'notice'],
    },
    icon: {
      description: 'Optional leading icon name',
      control: 'select',
      options: [
        undefined,
        'design',
        'check',
        'search',
        'arrow_left',
        'arrow_right',
      ],
    },
    children: {
      description: 'Chip label text',
      control: 'text',
    },
  },
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Category chip variant with muted background and strong text color.
 * Display-only; no interaction.
 */
export const Category: Story = {
  args: {
    variant: 'category',
    children: 'Design',
  },
  play: async ({ canvasElement }) => {
    const chip = within(canvasElement).getByText('Design')
    expect(chip).toBeInTheDocument()
  },
}

/**
 * Category chip with leading icon.
 */
export const CategoryWithIcon: Story = {
  args: {
    variant: 'category',
    icon: 'design',
    children: 'Design',
  },
  play: async ({ canvasElement }) => {
    const chip = within(canvasElement).getByText('Design')
    expect(chip).toBeInTheDocument()
    const svg = within(canvasElement).getByRole('img', {
      hidden: true,
    })
    expect(svg).toBeInTheDocument()
  },
}

/**
 * Notice chip variant with danger background and danger text color.
 * Display-only; no interaction.
 */
export const Notice: Story = {
  args: {
    variant: 'notice',
    children: 'Alert',
  },
  play: async ({ canvasElement }) => {
    const chip = within(canvasElement).getByText('Alert')
    expect(chip).toBeInTheDocument()
  },
}

/**
 * Notice chip with leading icon.
 */
export const NoticeWithIcon: Story = {
  args: {
    variant: 'notice',
    icon: 'notification',
    children: 'Alert',
  },
  play: async ({ canvasElement }) => {
    const chip = within(canvasElement).getByText('Alert')
    expect(chip).toBeInTheDocument()
    const svg = within(canvasElement).getByRole('img', {
      hidden: true,
    })
    expect(svg).toBeInTheDocument()
  },
}

/**
 * Chip with long text (tests wrapping with nowrap).
 */
export const LongText: Story = {
  args: {
    variant: 'category',
    children: 'Very Long Chip Label Text',
  },
  play: async ({ canvasElement }) => {
    const chip = within(canvasElement).getByText('Very Long Chip Label Text')
    expect(chip).toBeInTheDocument()
  },
}

/**
 * Chip with custom className.
 */
export const WithCustomClass: Story = {
  args: {
    variant: 'category',
    children: 'Custom',
    className: 'custom-chip-class',
  },
  play: async ({ canvasElement }) => {
    const chip = canvasElement.querySelector('.custom-chip-class')
    expect(chip).toBeInTheDocument()
  },
}
