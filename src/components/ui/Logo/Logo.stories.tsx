import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Logo } from './Logo'

const meta = {
  title: 'UI/Logo',
  component: Logo,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default logo with original size (186px width).
 * Uses currentColor from --color-text-primary token.
 */
export const Default: Story = {
  args: {
    width: 186,
  },
}

/**
 * Logo with accessible title — role="img" with <title> element.
 * Exposed to screen readers as "FigmaPedia Logo".
 */
export const WithTitle: Story = {
  args: {
    width: 186,
    title: 'FigmaPedia Logo',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const svg = canvas.getByRole('img')
    await expect(svg).toBeInTheDocument()
    await expect(svg).toHaveAttribute('aria-hidden', undefined)
  },
}

/**
 * Logo without title — hidden from screen readers (aria-hidden="true").
 * Used when logo is decorative or alongside text branding.
 */
export const WithoutTitle: Story = {
  args: {
    width: 186,
    title: undefined,
  },
  play: async ({ canvasElement }) => {
    const svg = canvasElement.querySelector('svg')
    await expect(svg).toHaveAttribute('aria-hidden', 'true')
  },
}

/**
 * Small logo (120px width) — suitable for headers and nav bars.
 */
export const Small: Story = {
  args: {
    width: 120,
    title: 'Logo',
  },
}

/**
 * Medium logo (150px width) — balanced size for most layouts.
 */
export const Medium: Story = {
  args: {
    width: 150,
    title: 'Logo',
  },
}

/**
 * Large logo (250px width) — hero or landing page sizing.
 */
export const Large: Story = {
  args: {
    width: 250,
    title: 'Logo',
  },
}

/**
 * Extra-large logo (350px width) — full-screen hero usage.
 */
export const ExtraLarge: Story = {
  args: {
    width: 350,
    title: 'Logo',
  },
}

/**
 * Logo with custom CSS class for styling (e.g., color override via --logo-color).
 */
export const WithCustomClass: Story = {
  args: {
    width: 186,
    title: 'Logo',
    className: 'custom-logo-class',
  },
}

/**
 * Logo rendering correctness test — verify SVG structure and accessibility.
 */
export const AccessibilityCheck: Story = {
  args: {
    width: 186,
    title: 'FigmaPedia Brand Logo',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const svg = canvas.getByRole('img', { name: 'FigmaPedia Brand Logo' })
    await expect(svg).toBeInTheDocument()
    await expect(svg).toHaveAttribute('xmlns', 'http://www.w3.org/2000/svg')
  },
}

/**
 * Responsive logo that scales with container width.
 */
export const Responsive: Story = {
  args: {
    width: 200,
    title: 'Logo',
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
            Width: 120px
          </p>
          <Story args={{ width: 120 }} />
        </div>
        <div>
          <p
            style={{
              font: 'var(--caption-lg-regular)',
              marginBottom: 'var(--spacing-8)',
            }}
          >
            Width: 186px
          </p>
          <Story args={{ width: 186 }} />
        </div>
        <div>
          <p
            style={{
              font: 'var(--caption-lg-regular)',
              marginBottom: 'var(--spacing-8)',
            }}
          >
            Width: 250px
          </p>
          <Story args={{ width: 250 }} />
        </div>
      </div>
    ),
  ],
}
