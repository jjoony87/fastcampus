import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from './Icon'
import { ICON_NAMES } from './icon-data'

const meta = {
  title: 'UI/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof meta>

/** All available icon names displayed in a grid. Each icon is labeled with its name. */
export const AllIcons: Story = {
  args: {
    name: 'iconview',
  },
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: 'var(--spacing-24)',
        padding: 'var(--spacing-24)',
        backgroundColor: 'var(--color-background-default)',
      }}
    >
      {ICON_NAMES.map((iconName) => (
        <div
          key={iconName}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 'var(--spacing-8)',
          }}
        >
          <Icon name={iconName} size={24} />
          <span
            style={{
              font: 'var(--caption-sm-regular)',
              color: 'var(--color-text-secondary)',
              textAlign: 'center',
              wordBreak: 'break-word',
              maxWidth: '100%',
            }}
          >
            {iconName}
          </span>
        </div>
      ))}
    </div>
  ),
  play: async ({ canvasElement }) => {
    const { within, expect } = await import('@storybook/test')
    const canvas = within(canvasElement)
    const firstIcon = canvas.getByText('iconview')
    expect(firstIcon).toBeInTheDocument()
    const lastIcon = canvas.getByText('google')
    expect(lastIcon).toBeInTheDocument()
  },
}

/** Icon with default size (16px) and default color. */
export const DefaultSize: Story = {
  args: {
    name: 'iconview',
  },
  play: async ({ canvasElement }) => {
    const { within, expect } = await import('@storybook/test')
    const canvas = within(canvasElement)
    const icon = canvas.getByRole('img', { hidden: true })
    expect(icon).toHaveAttribute('width', '16')
    expect(icon).toHaveAttribute('height', '16')
  },
}

/** Icon with small size (12px). */
export const SmallSize: Story = {
  args: {
    name: 'search',
    size: 12,
  },
  play: async ({ canvasElement }) => {
    const { within, expect } = await import('@storybook/test')
    const canvas = within(canvasElement)
    const icon = canvas.getByRole('img', { hidden: true })
    expect(icon).toHaveAttribute('width', '12')
  },
}

/** Icon with medium size (20px). */
export const MediumSize: Story = {
  args: {
    name: 'menu',
    size: 20,
  },
  play: async ({ canvasElement }) => {
    const { within, expect } = await import('@storybook/test')
    const canvas = within(canvasElement)
    const icon = canvas.getByRole('img', { hidden: true })
    expect(icon).toHaveAttribute('width', '20')
  },
}

/** Icon with large size (32px). */
export const LargeSize: Story = {
  args: {
    name: 'user',
    size: 32,
  },
  play: async ({ canvasElement }) => {
    const { within, expect } = await import('@storybook/test')
    const canvas = within(canvasElement)
    const icon = canvas.getByRole('img', { hidden: true })
    expect(icon).toHaveAttribute('width', '32')
  },
}

/** Icon with custom color using a design token (primary brand color). */
export const ColorCustom: Story = {
  args: {
    name: 'heart_empty',
    size: 24,
    color: 'var(--color-brand-primary)',
  },
  play: async ({ canvasElement }) => {
    const { within, expect } = await import('@storybook/test')
    const canvas = within(canvasElement)
    const icon = canvas.getByRole('img', { hidden: true })
    expect(icon).toHaveStyle('color: var(--color-brand-primary)')
  },
}

/** Icon with danger color token. */
export const ColorDanger: Story = {
  args: {
    name: 'close',
    size: 24,
    color: 'var(--color-interactive-destructive)',
  },
}

/** Icon with secondary text color token. */
export const ColorSecondary: Story = {
  args: {
    name: 'eye-on',
    size: 24,
    color: 'var(--color-text-secondary)',
  },
}

/** Icon displayed as an accessible image with a visible title. */
export const Accessible: Story = {
  args: {
    name: 'user',
    size: 24,
    title: '사용자',
  },
  play: async ({ canvasElement }) => {
    const { within, expect } = await import('@storybook/test')
    const canvas = within(canvasElement)
    const icon = canvas.getByRole('img', { name: '사용자' })
    expect(icon).toBeInTheDocument()
  },
}

/** Icon in decorative mode (no title, aria-hidden). */
export const Decorative: Story = {
  args: {
    name: 'arrow_right',
    size: 20,
  },
  play: async ({ canvasElement }) => {
    const { within, expect } = await import('@storybook/test')
    const canvas = within(canvasElement)
    const icon = canvas.getByRole('img', { hidden: true })
    expect(icon).toHaveAttribute('aria-hidden', 'true')
  },
}

/** Google icon with brand colors (not affected by color prop). */
export const GoogleBrand: Story = {
  args: {
    name: 'google',
    size: 24,
  },
  decorators: [
    (Story) => (
      <div
        style={{
          padding: 'var(--spacing-24)',
          backgroundColor: 'var(--color-background-default)',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

/** Multiple icons in different sizes and colors. */
export const Showcase: Story = {
  args: {
    name: 'search',
  },
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: 'var(--spacing-24)',
        padding: 'var(--spacing-32)',
        alignItems: 'center',
        backgroundColor: 'var(--color-background-subtle)',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-8)',
          alignItems: 'center',
        }}
      >
        <Icon name="search" size={16} />
        <span
          style={{
            font: 'var(--caption-sm-regular)',
            color: 'var(--color-text-tertiary)',
          }}
        >
          16px
        </span>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-8)',
          alignItems: 'center',
        }}
      >
        <Icon name="search" size={20} color="var(--color-brand-primary)" />
        <span
          style={{
            font: 'var(--caption-sm-regular)',
            color: 'var(--color-text-tertiary)',
          }}
        >
          20px brand
        </span>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-8)',
          alignItems: 'center',
        }}
      >
        <Icon
          name="search"
          size={24}
          color="var(--color-interactive-destructive)"
        />
        <span
          style={{
            font: 'var(--caption-sm-regular)',
            color: 'var(--color-text-tertiary)',
          }}
        >
          24px danger
        </span>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-8)',
          alignItems: 'center',
        }}
      >
        <Icon
          name="search"
          size={28}
          color="var(--color-text-secondary)"
          title="검색"
        />
        <span
          style={{
            font: 'var(--caption-sm-regular)',
            color: 'var(--color-text-tertiary)',
          }}
        >
          28px accessible
        </span>
      </div>
    </div>
  ),
}
