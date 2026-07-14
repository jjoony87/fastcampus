import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within, expect } from '@storybook/test'
import { LoginBottom } from './LoginBottom'

const meta = {
  title: 'UI/LoginBottom',
  component: LoginBottom,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof LoginBottom>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default login bottom section with all default labels and text.
 * Includes LoginSetup ("Keep login" checkbox + "Find Password" button) and
 * LoginSign ("Sign up" prompt and button).
 */
export const Default: Story = {
  args: {
    width: '100%',
  },
}

/**
 * Login bottom with Figma frame width (320px) for exact design reproduction.
 */
export const WithFrameWidth: Story = {
  args: {
    width: '320px',
  },
}

/**
 * Customized labels and button texts.
 */
export const CustomLabels: Story = {
  args: {
    width: '100%',
    keepLoginLabel: 'Keep me signed in',
    findPasswordText: 'Forgot password?',
    signText: "Don't have an account?",
    signUpText: 'Create Account',
  },
}

/**
 * Login bottom with all event handlers wired to callbacks.
 * Demonstrates finding password and sign up interactions.
 */
export const WithCallbacks: Story = {
  args: {
    width: '100%',
    keepLoginLabel: 'Stay logged in',
    findPasswordText: 'Reset password',
    onFindPassword: async (e) => {
      console.log('Find password clicked', e)
    },
    signText: 'New user?',
    signUpText: 'Sign Up Now',
    onSignUp: async (e) => {
      console.log('Sign up clicked', e)
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Find and click the "Find Password" button
    const findPasswordButton = canvas.getByRole('button', {
      name: new RegExp('Reset password', 'i'),
    })
    await userEvent.click(findPasswordButton)
    await expect(findPasswordButton).toBeInTheDocument()

    // Find and click the "Sign Up" button
    const signUpButton = canvas.getByRole('button', {
      name: new RegExp('Sign Up Now', 'i'),
    })
    await userEvent.click(signUpButton)
    await expect(signUpButton).toBeInTheDocument()
  },
}

/**
 * Checkbox in "on" state (checked).
 */
export const CheckboxOn: Story = {
  args: {
    width: '100%',
    checkboxState: 'on',
    keepLoginLabel: 'Keep me logged in',
  },
}

/**
 * Checkbox in "off" state (unchecked).
 */
export const CheckboxOff: Story = {
  args: {
    width: '100%',
    checkboxState: 'off',
    keepLoginLabel: 'Keep me logged in',
  },
}

/**
 * Checkbox in "state3" (indeterminate) state.
 */
export const CheckboxState3: Story = {
  args: {
    width: '100%',
    checkboxState: 'state3',
    keepLoginLabel: 'Keep me logged in',
  },
}

/**
 * Login bottom with additional custom className for external styling.
 */
export const WithCustomClass: Story = {
  args: {
    width: '100%',
    className: 'custom-login-bottom-class',
  },
}

/**
 * Demonstrates find password button click interaction.
 */
export const InteractiveFindPassword: Story = {
  args: {
    width: '100%',
    findPasswordText: 'Forgot your password?',
    onFindPassword: () => console.log('Password reset initiated'),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const findPasswordButton = canvas.getByRole('button', {
      name: new RegExp('Forgot your password', 'i'),
    })
    await userEvent.click(findPasswordButton)
    await expect(findPasswordButton).toBeInTheDocument()
  },
}

/**
 * Demonstrates sign up button click interaction.
 */
export const InteractiveSignUp: Story = {
  args: {
    width: '100%',
    signUpText: 'Join now',
    onSignUp: () => console.log('Sign up initiated'),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const signUpButton = canvas.getByRole('button', {
      name: new RegExp('Join now', 'i'),
    })
    await userEvent.click(signUpButton)
    await expect(signUpButton).toBeInTheDocument()
  },
}
