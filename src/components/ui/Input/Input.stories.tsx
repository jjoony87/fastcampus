import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within, expect } from '@storybook/test'
import { Input } from './Input'
import { Icon } from '../Icon'

const meta = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default input field without label, error, or icons.
 */
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
}

/**
 * Input with a label above the field.
 */
export const WithLabel: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'you@example.com',
  },
}

/**
 * Input field in focused state with border color change.
 */
export const Focused: Story = {
  args: {
    label: 'Search',
    placeholder: 'Type to search...',
    autoFocus: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByPlaceholderText('Type to search...')
    input.focus()
    await userEvent.type(input, 'test search')
    await expect(input).toHaveValue('test search')
  },
}

/**
 * Input field with error state and error message displayed.
 */
export const Error: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    error: 'Password must be at least 8 characters',
    type: 'password',
  },
}

/**
 * Disabled input field (read-only, grayed out).
 */
export const Disabled: Story = {
  args: {
    label: 'Readonly Field',
    placeholder: 'This field is disabled',
    disabled: true,
    value: 'Cannot edit',
  },
}

/**
 * Input with a leading (left) icon.
 */
export const WithLeadingIcon: Story = {
  args: {
    label: 'Search Products',
    placeholder: 'Search...',
    leadingIcon: <Icon name="search" />,
  },
}

/**
 * Input with a trailing (right) icon.
 */
export const WithTrailingIcon: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    type: 'password',
    trailingIcon: <Icon name="eye-on" />,
  },
}

/**
 * Input with both leading and trailing icons.
 */
export const WithBothIcons: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    leadingIcon: <Icon name="user" />,
    trailingIcon: <Icon name="check" />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByPlaceholderText('Enter username')
    await userEvent.type(input, 'john_doe')
    await expect(input).toHaveValue('john_doe')
  },
}

/**
 * Error input with leading icon and error message.
 */
export const ErrorWithIcon: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter email',
    leadingIcon: <Icon name="message" />,
    error: 'Invalid email format',
    type: 'email',
  },
}

/**
 * Disabled input with leading icon.
 */
export const DisabledWithIcon: Story = {
  args: {
    label: 'Disabled Field',
    placeholder: 'Cannot edit',
    disabled: true,
    leadingIcon: <Icon name="close" />,
  },
}

/**
 * Long text overflow test to verify input handles long content properly.
 */
export const LongText: Story = {
  args: {
    label: 'Full Name',
    placeholder: 'Enter your full name',
    value: 'Alexander Christopher Montgomery III',
  },
}

/**
 * Demonstrates typing interaction with input validation.
 */
export const InteractiveTyping: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username (3+ chars)',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByPlaceholderText('Enter username (3+ chars)')

    // Test typing behavior
    await userEvent.type(input, 'testuser')
    await expect(input).toHaveValue('testuser')

    // Test clearing
    await userEvent.clear(input)
    await expect(input).toHaveValue('')
  },
}
