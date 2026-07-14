import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within, expect } from '@storybook/test'
import { LoginGoogle } from './LoginGoogle'

const meta = {
  title: 'UI/LoginGoogle',
  component: LoginGoogle,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof LoginGoogle>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default "Google Login" button with default text and full width.
 * Uses ButtonMedium with monolight style and google icon.
 */
export const Default: Story = {
  args: {
    text: '구글로 로그인 하기',
    width: '100%',
  },
}

/**
 * Login Google button with Figma frame width (345px) for exact design reproduction.
 */
export const WithFrameWidth: Story = {
  args: {
    text: '구글로 로그인 하기',
    width: '345px',
  },
}

/**
 * Login Google with custom button label text.
 */
export const CustomText: Story = {
  args: {
    text: 'Sign in with Google',
    width: '100%',
  },
}

/**
 * Login Google with English text variant.
 */
export const EnglishText: Story = {
  args: {
    text: 'Continue with Google',
    width: '100%',
  },
}

/**
 * Smaller width variant (200px) — suitable for compact layouts.
 */
export const SmallWidth: Story = {
  args: {
    text: '구글로 로그인',
    width: '200px',
  },
}

/**
 * Login Google button with click handler callback.
 */
export const WithClickHandler: Story = {
  args: {
    text: '구글로 로그인 하기',
    width: '100%',
    onClick: () => console.log('Google login clicked'),
  },
}

/**
 * Demonstrates Google login button click interaction.
 */
export const InteractiveClick: Story = {
  args: {
    text: '구글로 로그인 하기',
    width: '100%',
    onClick: () => console.log('Initiating Google OAuth flow'),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', {
      name: new RegExp('구글로 로그인', 'i'),
    })
    await userEvent.click(button)
    await expect(button).toBeInTheDocument()
  },
}

/**
 * Login Google with custom CSS class for styling.
 */
export const WithCustomClass: Story = {
  args: {
    text: '구글로 로그인 하기',
    width: '100%',
    className: 'custom-login-google-class',
  },
}

/**
 * Button rendering correctness test — verify button structure and accessibility.
 */
export const AccessibilityCheck: Story = {
  args: {
    text: '구글로 로그인 하기',
    width: '100%',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', {
      name: new RegExp('구글로 로그인', 'i'),
    })
    await expect(button).toBeInTheDocument()
    await expect(button).toBeEnabled()
  },
}

/**
 * Responsive width variants displayed side-by-side for comparison.
 */
export const ResponsiveWidths: Story = {
  args: {
    text: '구글로 로그인 하기',
    width: '100%',
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-24)',
          alignItems: 'flex-start',
        }}
      >
        <div>
          <p
            style={{
              font: 'var(--caption-lg-regular)',
              marginBottom: 'var(--spacing-8)',
            }}
          >
            Width: 200px
          </p>
          <Story args={{ width: '200px' }} />
        </div>
        <div>
          <p
            style={{
              font: 'var(--caption-lg-regular)',
              marginBottom: 'var(--spacing-8)',
            }}
          >
            Width: 345px (Figma frame)
          </p>
          <Story args={{ width: '345px' }} />
        </div>
        <div>
          <p
            style={{
              font: 'var(--caption-lg-regular)',
              marginBottom: 'var(--spacing-8)',
            }}
          >
            Width: 100% (Full width)
          </p>
          <Story args={{ width: '100%' }} />
        </div>
      </div>
    ),
  ],
}
