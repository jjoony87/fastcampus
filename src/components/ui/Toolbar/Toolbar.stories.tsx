import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within, expect } from '@storybook/test'
import { Toolbar } from './Toolbar'
import type { SortTabOption } from '../SortTab'

const meta = {
  title: 'UI/Toolbar',
  component: Toolbar,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Toolbar>

export default meta
type Story = StoryObj<typeof meta>

const defaultSortOptions: SortTabOption[] = [
  { value: 'latest', label: '최신순' },
  { value: 'popular', label: '인기순' },
  { value: 'oldest', label: '오래된순' },
]

/**
 * Default toolbar with sort tabs on the left and search bar on the right.
 */
export const Default: Story = {
  args: {
    sortOptions: defaultSortOptions,
    sortValue: 'latest',
    searchValue: '',
    searchDisabled: false,
  },
}

/**
 * Toolbar with "popular" sort option selected.
 */
export const PopularSelected: Story = {
  args: {
    sortOptions: defaultSortOptions,
    sortValue: 'popular',
    searchValue: '',
    searchDisabled: false,
  },
}

/**
 * Toolbar with search field pre-filled with text.
 */
export const WithSearchText: Story = {
  args: {
    sortOptions: defaultSortOptions,
    sortValue: 'latest',
    searchValue: 'React',
    searchDisabled: false,
  },
}

/**
 * Toolbar with disabled search field.
 */
export const SearchDisabled: Story = {
  args: {
    sortOptions: defaultSortOptions,
    sortValue: 'latest',
    searchValue: '',
    searchDisabled: true,
  },
}

/**
 * Toolbar with custom search placeholder text.
 */
export const CustomSearchPlaceholder: Story = {
  args: {
    sortOptions: defaultSortOptions,
    sortValue: 'latest',
    searchValue: '',
    searchPlaceholder: '글 제목, 내용, 작성자로 검색',
    searchDisabled: false,
  },
}

/**
 * Responsive width adapting to container (default behavior).
 */
export const ResponsiveWidth: Story = {
  args: {
    sortOptions: defaultSortOptions,
    sortValue: 'latest',
    searchValue: '',
    width: '100%',
    searchDisabled: false,
  },
}

/**
 * Interactive story demonstrating sort tab selection and search input.
 */
export const Interactive: Story = {
  args: {
    sortOptions: defaultSortOptions,
    sortValue: 'latest',
    searchValue: '',
    searchDisabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Test search input typing
    const searchInput = canvas.getByRole('searchbox') as HTMLInputElement
    await userEvent.type(searchInput, 'TypeScript')
    await expect(searchInput).toHaveValue('TypeScript')
  },
}

/**
 * Toolbar with extended sort options list.
 */
export const ManyOptions: Story = {
  args: {
    sortOptions: [
      { value: 'latest', label: '최신순' },
      { value: 'popular', label: '인기순' },
      { value: 'oldest', label: '오래된순' },
      { value: 'trending', label: '트렌딩' },
      { value: 'commented', label: '댓글순' },
    ],
    sortValue: 'latest',
    searchValue: '',
    searchDisabled: false,
  },
}

/**
 * Both sort selection and search interaction.
 */
export const SortAndSearch: Story = {
  args: {
    sortOptions: defaultSortOptions,
    sortValue: 'popular',
    searchValue: '디자인시스템',
    searchDisabled: false,
  },
}

/**
 * Minimal toolbar with single sort option.
 */
export const SingleSortOption: Story = {
  args: {
    sortOptions: [{ value: 'default', label: '기본순' }],
    sortValue: 'default',
    searchValue: '',
    searchDisabled: false,
  },
}

/**
 * Toolbar with full content and clear state.
 */
export const ClearAndType: Story = {
  args: {
    sortOptions: defaultSortOptions,
    sortValue: 'latest',
    searchValue: '',
    searchDisabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const searchInput = canvas.getByRole('searchbox') as HTMLInputElement

    // Type in search
    await userEvent.type(searchInput, '처음 검색')
    await expect(searchInput).toHaveValue('처음 검색')

    // Clear and type again
    await userEvent.clear(searchInput)
    await expect(searchInput).toHaveValue('')

    // Type new search
    await userEvent.type(searchInput, '다시 검색')
    await expect(searchInput).toHaveValue('다시 검색')
  },
}
