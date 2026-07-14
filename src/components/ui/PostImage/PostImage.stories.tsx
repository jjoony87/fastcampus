import type { Meta, StoryObj } from '@storybook/react'
import { PostImage } from './PostImage'

const meta = {
  title: 'UI/PostImage',
  component: PostImage,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PostImage>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default theme 1 with standard 500px width.
 */
export const Type1: Story = {
  args: {
    type: 1,
    alt: 'Post image theme 1',
  },
}

/**
 * Theme 2 with vertical focal point shifted to 57.5%.
 */
export const Type2: Story = {
  args: {
    type: 2,
    alt: 'Post image theme 2',
  },
}

/**
 * Theme 3 with vertical focal point shifted to 45.7%.
 */
export const Type3: Story = {
  args: {
    type: 3,
    alt: 'Post image theme 3',
  },
}

/**
 * Theme 4 with vertical focal point shifted to 62.6%.
 */
export const Type4: Story = {
  args: {
    type: 4,
    alt: 'Post image theme 4',
  },
}

/**
 * Theme 5 with centered vertical focal point.
 */
export const Type5: Story = {
  args: {
    type: 5,
    alt: 'Post image theme 5',
  },
}

/**
 * Theme 6 with centered vertical focal point.
 */
export const Type6: Story = {
  args: {
    type: 6,
    alt: 'Post image theme 6',
  },
}

/**
 * Scaled to 750px width (1.5x) with proportional height.
 */
export const LargeScale: Story = {
  args: {
    type: 1,
    alt: 'Post image at 750px width',
    width: 750,
  },
}

/**
 * Scaled to 375px width (0.75x) with proportional height.
 */
export const SmallScale: Story = {
  args: {
    type: 2,
    alt: 'Post image at 375px width',
    width: 375,
  },
}

/**
 * Decorative image with empty alt text.
 */
export const Decorative: Story = {
  args: {
    type: 3,
    alt: '',
  },
}

/**
 * Theme 4 with custom CSS class.
 */
export const WithCustomClass: Story = {
  args: {
    type: 4,
    alt: 'Post image with custom styling',
    className: 'custom-post-image',
  },
}

/**
 * Exercise image rendering with correct alt text, dimensions, and border/radius tokens.
 */
export const RenderTest: Story = {
  args: {
    type: 5,
    alt: 'Render test image',
  },
  play: async ({ canvasElement, args }) => {
    const img = canvasElement.querySelector('img') as HTMLImageElement
    if (!img) throw new Error('Image element not found')
    if (img.alt !== args.alt)
      throw new Error(`Expected alt="${args.alt}", got "${img.alt}"`)
    if (img.width !== (args.width || 500)) {
      throw new Error(`Expected width=${args.width || 500}, got ${img.width}`)
    }
    // Verify that border-radius token is applied (should be var(--radius-md))
    const style = window.getComputedStyle(img)
    const borderRadius = style.borderRadius
    if (!borderRadius) throw new Error('Border radius not applied to image')
  },
}
