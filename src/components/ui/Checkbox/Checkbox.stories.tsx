import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Checkbox } from './Checkbox'

const meta = {
  title: 'UI/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    state: {
      description:
        'Visual state: on, off, or state3 (on and state3 are visually identical)',
      control: 'select',
      options: ['on', 'off', 'state3'],
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Checked state checkbox with primary background and check icon.
 * Display-only; no interaction.
 */
export const On: Story = {
  args: {
    state: 'on',
  },
  play: async ({ canvasElement }) => {
    const checkbox = within(canvasElement).getByRole('img', {
      hidden: true,
    })
    expect(checkbox).toBeInTheDocument()
  },
}

/**
 * Unchecked state checkbox with disabled gray background and check icon.
 * Display-only; no interaction.
 */
export const Off: Story = {
  args: {
    state: 'off',
  },
  play: async ({ canvasElement }) => {
    const checkbox = within(canvasElement).getByRole('img', {
      hidden: true,
    })
    expect(checkbox).toBeInTheDocument()
  },
}

/**
 * Alternate checked state (visually identical to 'on').
 * Display-only; no interaction.
 */
export const State3: Story = {
  args: {
    state: 'state3',
  },
  play: async ({ canvasElement }) => {
    const checkbox = within(canvasElement).getByRole('img', {
      hidden: true,
    })
    expect(checkbox).toBeInTheDocument()
  },
}

/**
 * Checkbox with custom className.
 */
export const WithCustomClass: Story = {
  args: {
    state: 'on',
    className: 'custom-checkbox-class',
  },
  play: async ({ canvasElement }) => {
    const svg = within(canvasElement).getByRole('img', {
      hidden: true,
    })
    expect(svg).toHaveClass('custom-checkbox-class')
  },
}
