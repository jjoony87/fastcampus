import type { Meta, StoryObj } from '@storybook/react'
import { expect, fn, userEvent, within } from '@storybook/test'
import { ChipArea } from './ChipArea'

const meta = {
  title: 'UI/ChipArea',
  component: ChipArea,
  tags: ['autodocs'],
  argTypes: {
    options: {
      description: 'Array of selectable chip options with value and label',
    },
    selectedValues: {
      description: 'Currently selected option values (controlled)',
      control: 'object',
    },
    onChange: {
      description: 'Callback fired when chip selection changes',
    },
    singleSelect: {
      description: 'When true, only one chip can be selected at a time',
      control: 'boolean',
    },
  },
} satisfies Meta<typeof ChipArea>

export default meta
type Story = StoryObj<typeof meta>

const defaultOptions = [
  { value: 'design', label: 'Design' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'development', label: 'Development' },
  { value: 'product', label: 'Product' },
]

/**
 * Multi-select chip area (default). Multiple chips can be selected simultaneously.
 */
export const MultiSelect: Story = {
  args: {
    options: defaultOptions,
    selectedValues: [],
    onChange: fn(),
    singleSelect: false,
  },
  play: async ({ canvasElement, args }) => {
    const options = within(canvasElement).getAllByRole('option')
    expect(options).toHaveLength(4)

    // Click first chip to select it
    const firstChip = options[0]
    await userEvent.click(firstChip)

    expect(args.onChange).toHaveBeenCalledWith(['design'])
  },
}

/**
 * Multi-select with pre-selected values.
 */
export const MultiSelectWithValues: Story = {
  args: {
    options: defaultOptions,
    selectedValues: ['design', 'development'],
    onChange: fn(),
    singleSelect: false,
  },
  play: async ({ canvasElement }) => {
    const options = within(canvasElement).getAllByRole('option')
    expect(options[0]).toHaveAttribute('aria-selected', 'true')
    expect(options[1]).toHaveAttribute('aria-selected', 'false')
    expect(options[2]).toHaveAttribute('aria-selected', 'true')
  },
}

/**
 * Single-select chip area. Only one chip can be selected at a time.
 */
export const SingleSelect: Story = {
  args: {
    options: defaultOptions,
    selectedValues: [],
    onChange: fn(),
    singleSelect: true,
  },
  play: async ({ canvasElement, args }) => {
    const options = within(canvasElement).getAllByRole('option')
    expect(options).toHaveLength(4)

    // Click first chip to select it
    const firstChip = options[0]
    await userEvent.click(firstChip)

    expect(args.onChange).toHaveBeenCalledWith(['design'])
  },
}

/**
 * Single-select with a pre-selected value.
 */
export const SingleSelectWithValue: Story = {
  args: {
    options: defaultOptions,
    selectedValues: ['marketing'],
    onChange: fn(),
    singleSelect: true,
  },
  play: async ({ canvasElement }) => {
    const options = within(canvasElement).getAllByRole('option')
    expect(options[1]).toHaveAttribute('aria-selected', 'true')
    expect(options[0]).toHaveAttribute('aria-selected', 'false')
  },
}

/**
 * Keyboard interaction test: Space key to toggle selection.
 */
export const KeyboardInteraction: Story = {
  args: {
    options: defaultOptions,
    selectedValues: [],
    onChange: fn(),
    singleSelect: false,
  },
  play: async ({ canvasElement, args }) => {
    const firstChip = within(canvasElement).getAllByRole('option')[0]

    // Focus and press Space
    firstChip.focus()
    await userEvent.keyboard(' ')

    expect(args.onChange).toHaveBeenCalledWith(['design'])
  },
}

/**
 * Large number of options to test wrap-flex layout.
 */
export const ManyOptions: Story = {
  args: {
    options: [
      { value: 'opt1', label: 'Option 1' },
      { value: 'opt2', label: 'Option 2' },
      { value: 'opt3', label: 'Option 3' },
      { value: 'opt4', label: 'Option 4' },
      { value: 'opt5', label: 'Option 5' },
      { value: 'opt6', label: 'Option 6' },
      { value: 'opt7', label: 'Option 7' },
      { value: 'opt8', label: 'Option 8' },
    ],
    selectedValues: [],
    onChange: fn(),
    singleSelect: false,
  },
  play: async ({ canvasElement }) => {
    const options = within(canvasElement).getAllByRole('option')
    expect(options).toHaveLength(8)
  },
}

/**
 * Custom className on root container.
 */
export const WithCustomClass: Story = {
  args: {
    options: defaultOptions,
    selectedValues: [],
    onChange: fn(),
    className: 'custom-chiparea-class',
  },
  play: async ({ canvasElement }) => {
    const container = within(canvasElement).getByRole('listbox')
    expect(container).toHaveClass('custom-chiparea-class')
  },
}
