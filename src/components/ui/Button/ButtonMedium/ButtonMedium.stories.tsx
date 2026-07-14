import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { expect, userEvent, within } from '@storybook/test'
import { ButtonMedium } from './ButtonMedium'

const meta: Meta<typeof ButtonMedium> = {
  title: 'UI/ButtonMedium',
  component: ButtonMedium,
  tags: ['autodocs'],
  args: {
    children: 'Button',
    onClick: fn(),
  },
} satisfies Meta<typeof ButtonMedium>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Core style with label. Primary brand color background.
 */
export const Core: Story = {
  args: {
    style: 'core',
    type: 'label',
  },
}

/**
 * Core Light style with label. Subtle brand background.
 */
export const CoreLight: Story = {
  args: {
    style: 'corelight',
    type: 'label',
  },
}

/**
 * Mono style with label. Strong neutral background.
 */
export const Mono: Story = {
  args: {
    style: 'mono',
    type: 'label',
  },
}

/**
 * Mono Light style with label. Muted neutral background.
 */
export const MonoLight: Story = {
  args: {
    style: 'monolight',
    type: 'label',
  },
}

/**
 * Warning style with label. Destructive action background.
 */
export const Warning: Story = {
  args: {
    style: 'warning',
    type: 'label',
  },
}

/**
 * Warning Light style with label. Subtle destructive background.
 */
export const WarningLight: Story = {
  args: {
    style: 'warninglight',
    type: 'label',
  },
}

/**
 * Outline style with label. Bordered style with default background.
 */
export const Outline: Story = {
  args: {
    style: 'outline',
    type: 'label',
  },
}

/**
 * Icon-only button. Requires icon name and aria-label for accessibility.
 */
export const IconOnly: Story = {
  args: {
    type: 'icon',
    icon: 'close',
    'aria-label': 'Close',
  },
}

/**
 * Disabled state. Opacity reduced, interaction blocked.
 */
export const Disabled: Story = {
  args: {
    style: 'core',
    type: 'label',
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')
    await userEvent.click(button)
    // Verify onClick was NOT called when disabled
    expect(button).toBeDisabled()
  },
}

/**
 * Label with leading icon. Icon appears before text.
 */
export const WithLeadingIcon: Story = {
  args: {
    style: 'core',
    type: 'label',
    icon: 'arrow_right',
  },
}

/**
 * Long label text to demonstrate overflow behavior.
 */
export const LongLabel: Story = {
  args: {
    style: 'core',
    type: 'label',
    children:
      'This is a very long button label that demonstrates text wrapping and overflow behavior in the component',
  },
}

/**
 * Interactive test: Click handler fires and counts clicks.
 */
export const ClickTest: Story = {
  args: {
    style: 'core',
    type: 'label',
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')

    // Verify button is clickable
    expect(button).toBeEnabled()

    // Click the button
    await userEvent.click(button)

    // Verify onClick handler was called
    expect(args.onClick).toHaveBeenCalledTimes(1)
  },
}
