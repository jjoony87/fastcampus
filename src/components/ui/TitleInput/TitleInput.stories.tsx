import type { Meta, StoryObj } from '@storybook/react'
import { within, expect } from '@storybook/test'
import { TitleInput } from './TitleInput'

const meta = {
  title: 'UI/TitleInput',
  component: TitleInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof TitleInput>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default state with label, input, and helptext visible.
 */
export const Default: Story = {
  args: {
    label: 'label',
    headline: 'placeholder',
    helptext: true,
    icon: true,
    iconName: 'search',
    type: 'default',
  },
}

/**
 * Focus state with blue border and helptext color.
 */
export const Focus: Story = {
  args: {
    label: 'label',
    headline: 'placeholder',
    helptext: true,
    icon: true,
    iconName: 'search',
    type: 'focus',
  },
}

/**
 * Error state with red border and helptext color indicating validation failure.
 */
export const Error: Story = {
  args: {
    label: 'label',
    headline: 'placeholder',
    helptext: true,
    icon: true,
    iconName: 'search',
    type: 'error',
  },
}

/**
 * Disabled state with grayed-out text and disabled icon color.
 */
export const Disabled: Story = {
  args: {
    label: 'label',
    headline: 'placeholder',
    helptext: true,
    icon: true,
    iconName: 'search',
    type: 'disabled',
  },
}

/**
 * Without helptext line shown below the input box.
 */
export const WithoutHelptext: Story = {
  args: {
    label: 'label',
    headline: 'placeholder',
    helptext: false,
    icon: true,
    iconName: 'search',
    type: 'default',
  },
}

/**
 * Without trailing icon; displays only label and input.
 */
export const WithoutIcon: Story = {
  args: {
    label: 'label',
    headline: 'placeholder',
    helptext: true,
    icon: false,
    type: 'default',
  },
}

/**
 * With a different icon (user) instead of search.
 */
export const WithUserIcon: Story = {
  args: {
    label: 'label',
    headline: 'placeholder',
    helptext: true,
    icon: true,
    iconName: 'user',
    type: 'default',
  },
}

/**
 * Long headline text to test overflow handling.
 */
export const LongHeadline: Story = {
  args: {
    label: 'label',
    headline: 'This is a very long placeholder text that should not overflow',
    helptext: true,
    icon: true,
    iconName: 'search',
    type: 'default',
  },
}

/**
 * Focus state without icon to verify layout adjustments.
 */
export const FocusNoIcon: Story = {
  args: {
    label: 'label',
    headline: 'placeholder',
    helptext: true,
    icon: false,
    type: 'focus',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByText('placeholder')
    await expect(input).toBeInTheDocument()
  },
}

/**
 * Error state with different icon.
 */
export const ErrorWithIcon: Story = {
  args: {
    label: 'label',
    headline: 'Error message here',
    helptext: true,
    icon: true,
    iconName: 'close',
    type: 'error',
  },
}

/**
 * All interactive elements disabled and hidden.
 */
export const DisabledNoHelptext: Story = {
  args: {
    label: 'label',
    headline: 'placeholder',
    helptext: false,
    icon: false,
    type: 'disabled',
  },
}
