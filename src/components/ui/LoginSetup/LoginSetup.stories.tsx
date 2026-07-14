import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { LoginSetup } from './LoginSetup'

const meta = {
  title: 'UI/LoginSetup',
  component: LoginSetup,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    buttonText: { control: 'text' },
    width: { control: 'text' },
    checkboxState: {
      control: 'radio',
      options: ['on', 'off', 'state3'],
    },
  },
} satisfies Meta<typeof LoginSetup>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: '로그인 유지',
    buttonText: '비밀번호 찾기',
    checkboxState: 'on',
    onButtonClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const { userEvent, within, expect } = await import('@storybook/test')

    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: '비밀번호 찾기' })

    expect(button).toBeInTheDocument()
    expect(button).toBeVisible()

    await userEvent.click(button)
    expect(args.onButtonClick).toHaveBeenCalled()
  },
}

export const CheckboxOn: Story = {
  args: {
    label: '로그인 유지',
    buttonText: '비밀번호 찾기',
    checkboxState: 'on',
    onButtonClick: fn(),
  },
}

export const CheckboxOff: Story = {
  args: {
    label: '로그인 유지',
    buttonText: '비밀번호 찾기',
    checkboxState: 'off',
    onButtonClick: fn(),
  },
}

export const CheckboxState3: Story = {
  args: {
    label: '로그인 유지',
    buttonText: '비밀번호 찾기',
    checkboxState: 'state3',
    onButtonClick: fn(),
  },
}

export const CustomText: Story = {
  args: {
    label: '자동 로그인',
    buttonText: '계정 찾기',
    checkboxState: 'on',
    onButtonClick: fn(),
  },
}

export const FullWidth: Story = {
  args: {
    label: '로그인 유지',
    buttonText: '비밀번호 찾기',
    width: '100%',
    checkboxState: 'on',
    onButtonClick: fn(),
  },
}

export const LongButtonText: Story = {
  args: {
    label: '로그인 유지',
    buttonText: '비밀번호 찾기 및 초기화',
    checkboxState: 'on',
    onButtonClick: fn(),
  },
}
