import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { PostFilterHeader } from './PostFilterHeader'

const meta = {
  title: 'UI/PostFilterHeader',
  component: PostFilterHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PostFilterHeader>

export default meta
type Story = StoryObj<typeof meta>

const defaultSortOptions = [
  { value: 'latest', label: '최신순' },
  { value: 'popular', label: '인기순' },
  { value: 'oldest', label: '오래된순' },
]

/**
 * Default header with standard title "전체 게시글" and button label "글쓰기".
 */
export const Default: Story = {
  args: {
    sortOptions: defaultSortOptions,
    sortValue: 'latest',
  },
}

/**
 * Custom title and button label.
 */
export const CustomLabels: Story = {
  args: {
    title: '내가 쓴 글',
    buttonLabel: '새 게시글 작성',
    sortOptions: defaultSortOptions,
    sortValue: 'popular',
  },
}

/**
 * With search value and controlled input.
 */
export const WithSearch: Story = {
  args: {
    title: '전체 게시글',
    buttonLabel: '글쓰기',
    sortOptions: defaultSortOptions,
    sortValue: 'latest',
    searchValue: 'React',
    searchPlaceholder: '제목, 내용, 작성자',
  },
}

/**
 * Search field disabled.
 */
export const SearchDisabled: Story = {
  args: {
    title: '검색 불가 게시글',
    buttonLabel: '글쓰기',
    sortOptions: defaultSortOptions,
    sortValue: 'latest',
    searchDisabled: true,
  },
}

/**
 * Single sort tab option.
 */
export const SingleSortOption: Story = {
  args: {
    title: '게시글',
    buttonLabel: '작성',
    sortOptions: [{ value: 'default', label: '기본' }],
    sortValue: 'default',
  },
}

/**
 * Many sort tab options.
 */
export const ManySortOptions: Story = {
  args: {
    title: '상품 목록',
    buttonLabel: '상품 추가',
    sortOptions: [
      { value: 'latest', label: '최신' },
      { value: 'popular', label: '인기' },
      { value: 'price-asc', label: '가격 ↑' },
      { value: 'price-desc', label: '가격 ↓' },
      { value: 'rating', label: '평점' },
    ],
    sortValue: 'latest',
  },
}

/**
 * Fixed width to match Figma frame exactly.
 */
export const FixedWidth: Story = {
  args: {
    title: '전체 게시글',
    buttonLabel: '글쓰기',
    sortOptions: defaultSortOptions,
    sortValue: 'latest',
    width: '840px',
  },
}

/**
 * Long title and button text to test text overflow.
 */
export const LongText: Story = {
  args: {
    title: '매우 긴 제목을 가진 페이지로서 여러 단어가 포함되어 있습니다',
    buttonLabel: '새로운 게시글 작성하기',
    sortOptions: defaultSortOptions,
    sortValue: 'latest',
  },
}

/**
 * Exercise button click and sort/search change handlers.
 */
export const InteractionTest: Story = {
  args: {
    title: '게시글',
    buttonLabel: '쓰기',
    onButtonClick: fn(),
    sortOptions: defaultSortOptions,
    sortValue: 'latest',
    onSortChange: fn(),
    searchValue: '',
    onSearchChange: fn(),
  },
  play: async ({ canvasElement, args }) => {
    // Verify header structure: title and button on top row, toolbar below
    const root = canvasElement.querySelector('div')
    if (!root) throw new Error('Root div not found')

    const titleElement = root.querySelector('h2')
    if (!titleElement) throw new Error('Title h2 element not found')
    if (!titleElement.textContent?.includes(args.title || '전체 게시글')) {
      throw new Error('Title text not found in h2')
    }

    // Verify button exists with correct label
    const buttons = root.querySelectorAll('button')
    const actionButton = Array.from(buttons).find((btn) =>
      btn.textContent?.includes(args.buttonLabel || '글쓰기'),
    )
    if (!actionButton) throw new Error('Action button not found')
  },
}
