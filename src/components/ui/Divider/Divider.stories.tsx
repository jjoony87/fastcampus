import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from './Divider'

const meta = {
  title: 'UI/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Divider>

export default meta
type Story = StoryObj<typeof meta>

/** Default horizontal divider line separating content sections. */
export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 'calc(var(--spacing-64) * 6 + var(--spacing-16))' }}>
        <p
          style={{
            font: 'var(--body-lg-regular)',
            color: 'var(--color-text-primary)',
          }}
        >
          Top content section
        </p>
        <Story />
        <p
          style={{
            font: 'var(--body-lg-regular)',
            color: 'var(--color-text-primary)',
          }}
        >
          Bottom content section
        </p>
      </div>
    ),
  ],
  play: async ({ canvasElement }) => {
    const { within, expect } = await import('@storybook/test')
    const canvas = within(canvasElement)
    const separator = canvas.getByRole('separator')
    expect(separator).toHaveAttribute('aria-orientation', 'horizontal')
  },
}

/** Vertical divider line for separating content columns. */
export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          gap: 'var(--spacing-24)',
          alignItems: 'center',
          height: 'calc(var(--spacing-64) * 3 + var(--spacing-8))',
        }}
      >
        <p
          style={{
            font: 'var(--body-lg-regular)',
            color: 'var(--color-text-primary)',
            margin: 0,
            flex: 1,
          }}
        >
          Left section
        </p>
        <Story />
        <p
          style={{
            font: 'var(--body-lg-regular)',
            color: 'var(--color-text-primary)',
            margin: 0,
            flex: 1,
          }}
        >
          Right section
        </p>
      </div>
    ),
  ],
  play: async ({ canvasElement }) => {
    const { within, expect } = await import('@storybook/test')
    const canvas = within(canvasElement)
    const separator = canvas.getByRole('separator')
    expect(separator).toHaveAttribute('aria-orientation', 'vertical')
  },
}

/** Horizontal divider with custom class for additional styling. */
export const HorizontalWithClass: Story = {
  args: {
    orientation: 'horizontal',
    className: 'custom-divider',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 'calc(var(--spacing-64) * 6 + var(--spacing-16))' }}>
        <p
          style={{
            font: 'var(--body-lg-regular)',
            color: 'var(--color-text-primary)',
          }}
        >
          Content above
        </p>
        <Story />
        <p
          style={{
            font: 'var(--body-lg-regular)',
            color: 'var(--color-text-primary)',
          }}
        >
          Content below
        </p>
      </div>
    ),
  ],
}
