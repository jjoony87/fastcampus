import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within, expect } from '@storybook/test'
import { TitleInputBox } from './TitleInputBox'

const meta = {
  title: 'UI/TitleInputBox',
  component: TitleInputBox,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof TitleInputBox>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default empty input field with Korean placeholder text.
 */
export const Default: Story = {
  args: {
    placeholder: '제목을 입력해주세요.',
    disabled: false,
    'aria-label': '제목',
  },
}

/**
 * Input field with pre-filled value.
 */
export const WithValue: Story = {
  args: {
    value: '이것은 제목입니다',
    placeholder: '제목을 입력해주세요.',
    disabled: false,
    'aria-label': '제목',
  },
}

/**
 * Disabled input field that cannot be edited.
 */
export const Disabled: Story = {
  args: {
    value: '제목은 입력할 수 없습니다',
    placeholder: '제목을 입력해주세요.',
    disabled: true,
    'aria-label': '제목',
  },
}

/**
 * Interactive story demonstrating typing interaction.
 */
export const Interactive: Story = {
  args: {
    placeholder: '제목을 입력해주세요.',
    disabled: false,
    'aria-label': '제목',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('textbox') as HTMLInputElement
    await userEvent.type(input, '새로운 제목')
    await expect(input).toHaveValue('새로운 제목')
  },
}

/**
 * Long title text to verify input handles extended content.
 */
export const LongTitle: Story = {
  args: {
    value: 'React를 사용한 모던 웹 애플리케이션 개발 패턴과 베스트 프랙티스',
    placeholder: '제목을 입력해주세요.',
    disabled: false,
    'aria-label': '제목',
  },
}

/**
 * Responsive width that adapts to container (default behavior).
 */
export const ResponsiveWidth: Story = {
  args: {
    placeholder: '제목을 입력해주세요.',
    disabled: false,
    width: '100%',
    'aria-label': '제목',
  },
}

/**
 * Input with custom aria-label for accessibility.
 */
export const CustomAriaLabel: Story = {
  args: {
    placeholder: '제목을 입력해주세요.',
    disabled: false,
    'aria-label': '글 제목',
  },
}

/**
 * Demonstrating clear and type behavior.
 */
export const ClearAndType: Story = {
  args: {
    placeholder: '제목을 입력해주세요.',
    disabled: false,
    'aria-label': '제목',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole('textbox') as HTMLInputElement
    await userEvent.type(input, '첫 번째 제목')
    await expect(input).toHaveValue('첫 번째 제목')
    await userEvent.clear(input)
    await expect(input).toHaveValue('')
    await userEvent.type(input, '두 번째 제목')
    await expect(input).toHaveValue('두 번째 제목')
  },
}

/**
 * Disabled field with pre-filled value.
 */
export const DisabledWithValue: Story = {
  args: {
    value: '읽기 전용 제목',
    placeholder: '제목을 입력해주세요.',
    disabled: true,
    'aria-label': '제목',
  },
}
