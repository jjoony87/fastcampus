import type { Meta, StoryObj } from '@storybook/react'
import { DateText } from './DateText'

const meta = {
  title: 'UI/DateText',
  component: DateText,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DateText>

export default meta
type Story = StoryObj<typeof meta>

/** Default date display in the standard format (26.05.06). */
export const Default: Story = {
  args: {
    value: '26.05.06',
  },
  play: async ({ canvasElement }) => {
    const { within, expect } = await import('@storybook/test')
    const canvas = within(canvasElement)
    const dateText = canvas.getByText('26.05.06')
    expect(dateText).toBeInTheDocument()
  },
}

/** Date display with different date value. */
export const AlternateDate: Story = {
  args: {
    value: '25.12.25',
  },
  play: async ({ canvasElement }) => {
    const { within, expect } = await import('@storybook/test')
    const canvas = within(canvasElement)
    const dateText = canvas.getByText('25.12.25')
    expect(dateText).toBeInTheDocument()
  },
}

/** Date display with early date. */
export const EarlyDate: Story = {
  args: {
    value: '20.01.01',
  },
}

/** Date display with latest date value. */
export const RecentDate: Story = {
  args: {
    value: '26.07.08',
  },
}
