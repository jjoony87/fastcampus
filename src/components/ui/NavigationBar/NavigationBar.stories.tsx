import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { NavigationBar } from './NavigationBar'

const meta = {
  title: 'UI/NavigationBar',
  component: NavigationBar,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'radio',
      options: ['login', 'logout'],
    },
    category: { control: 'text' },
  },
} satisfies Meta<typeof NavigationBar>

export default meta

type Story = StoryObj<typeof meta>

export const Login: Story = {
  args: {
    state: 'login',
    category: '커뮤니티',
    onCategoryClick: fn(),
    onAuthClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const { userEvent, within, expect } = await import('@storybook/test')

    const canvas = within(canvasElement)
    const authButton = canvas.getByRole('button', { name: '로그인' })

    expect(authButton).toBeInTheDocument()
    expect(authButton).toBeVisible()

    await userEvent.click(authButton)
    expect(args.onAuthClick).toHaveBeenCalled()
  },
}

export const Logout: Story = {
  args: {
    state: 'logout',
    category: '커뮤니티',
    onCategoryClick: fn(),
    onAuthClick: fn(),
  },
}

export const DefaultCategory: Story = {
  args: {
    state: 'login',
    category: '커뮤니티',
    onCategoryClick: fn(),
    onAuthClick: fn(),
  },
}

export const CustomCategory: Story = {
  args: {
    state: 'login',
    category: '디자인',
    onCategoryClick: fn(),
    onAuthClick: fn(),
  },
}

export const LongCategoryName: Story = {
  args: {
    state: 'login',
    category: '커뮤니티 공지사항',
    onCategoryClick: fn(),
    onAuthClick: fn(),
  },
}

export const LoginWithCategoryClick: Story = {
  args: {
    state: 'login',
    category: '커뮤니티',
    onCategoryClick: fn(),
    onAuthClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const { userEvent, within, expect } = await import('@storybook/test')

    const canvas = within(canvasElement)
    const categoryButton = canvas.getByRole('button', { name: '커뮤니티' })

    expect(categoryButton).toBeInTheDocument()

    await userEvent.click(categoryButton)
    expect(args.onCategoryClick).toHaveBeenCalled()
  },
}

export const LogoutState: Story = {
  args: {
    state: 'logout',
    category: '디자인',
    onCategoryClick: fn(),
    onAuthClick: fn(),
  },
}

export const MultipleCategories: Story = {
  args: {
    state: 'login',
    category: '개발',
    onCategoryClick: fn(),
    onAuthClick: fn(),
  },
}
