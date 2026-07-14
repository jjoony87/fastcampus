import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { LoginSign } from './LoginSign'

const meta = {
  title: 'UI/LoginSign',
  component: LoginSign,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    buttonText: { control: 'text' },
    width: { control: 'text' },
  },
} satisfies Meta<typeof LoginSign>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: '아직 피그마피디아 회원이 아니세요?',
    buttonText: '회원가입',
    width: '100%',
    onSignUp: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const { userEvent, within, expect } = await import('@storybook/test')

    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: '회원가입' })

    expect(button).toBeInTheDocument()
    expect(button).toBeVisible()

    await userEvent.click(button)
    expect(args.onSignUp).toHaveBeenCalled()
  },
}

export const SignUp: Story = {
  args: {
    text: '아직 피그마피디아 회원이 아니세요?',
    buttonText: '회원가입',
    onSignUp: fn(),
  },
}

export const CustomText: Story = {
  args: {
    text: '새로운 계정을 만들어보세요.',
    buttonText: '가입하기',
    onSignUp: fn(),
  },
}

export const LongText: Story = {
  args: {
    text: '아직 우리 커뮤니티의 회원이 아니신가요? 지금 가입하셔서 모든 기능을 이용해보세요.',
    buttonText: '회원가입',
    onSignUp: fn(),
  },
}

export const AlternativeButton: Story = {
  args: {
    text: '아직 피그마피디아 회원이 아니세요?',
    buttonText: '지금 시작하기',
    onSignUp: fn(),
  },
}

export const ShortText: Story = {
  args: {
    text: '아직 회원이 아니신가요?',
    buttonText: '가입',
    onSignUp: fn(),
  },
}
