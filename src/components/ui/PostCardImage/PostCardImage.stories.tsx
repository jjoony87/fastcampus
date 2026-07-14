import type { Meta, StoryObj } from '@storybook/react'
import { PostCardImage } from './PostCardImage'

const meta = {
  title: 'UI/PostCardImage',
  component: PostCardImage,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PostCardImage>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default theme 1 with standard 160px width.
 */
export const Type1: Story = {
  args: {
    type: 1,
    alt: 'Post thumbnail image theme 1',
  },
}

/**
 * Theme 2 with vertical focal point shifted to 77.5%.
 */
export const Type2: Story = {
  args: {
    type: 2,
    alt: 'Post thumbnail image theme 2',
  },
}

/**
 * Theme 3 with centered vertical focal point.
 */
export const Type3: Story = {
  args: {
    type: 3,
    alt: 'Post thumbnail image theme 3',
  },
}

/**
 * Theme 4 with vertical focal point shifted to 59.7%.
 */
export const Type4: Story = {
  args: {
    type: 4,
    alt: 'Post thumbnail image theme 4',
  },
}

/**
 * Theme 5 with vertical focal point shifted to 72.1%.
 */
export const Type5: Story = {
  args: {
    type: 5,
    alt: 'Post thumbnail image theme 5',
  },
}

/**
 * Theme 6 with centered vertical focal point.
 */
export const Type6: Story = {
  args: {
    type: 6,
    alt: 'Post thumbnail image theme 6',
  },
}

/**
 * Scaled to 240px width (1.5x) with proportional height.
 */
export const LargeScale: Story = {
  args: {
    type: 1,
    alt: 'Post thumbnail image at 240px width',
    width: 240,
  },
}

/**
 * Scaled to 120px width (0.75x) with proportional height.
 */
export const SmallScale: Story = {
  args: {
    type: 2,
    alt: 'Post thumbnail image at 120px width',
    width: 120,
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
    alt: 'Post thumbnail with custom styling',
    className: 'custom-post-card-image',
  },
}

/**
 * Exercise image rendering with correct alt text and dimensions.
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
    if (img.width !== (args.width || 160)) {
      throw new Error(`Expected width=${args.width || 160}, got ${img.width}`)
    }
  },
}
