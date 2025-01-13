import { render, screen } from '@testing-library/react';
import App from './App';

describe('App 컴포넌트', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('로그인 제목이 표시되어야 한다', () => {
    const headingElement = screen.getByRole('heading', { name: '로그인' });
    expect(headingElement).toBeInTheDocument();
  });

  test('이메일 입력 필드가 렌더링되어야 한다', () => {
    const emailInput = screen.getByLabelText('이메일');
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute('type', 'email');
    expect(emailInput).toHaveAttribute('placeholder', '이메일을 입력하세요');
  });

  test('비밀번호 입력 필드가 렌더링되어야 한다', () => {
    const passwordInput = screen.getByLabelText('비밀번호');
    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput).toHaveAttribute('type', 'password');
    expect(passwordInput).toHaveAttribute(
      'placeholder',
      '비밀번호를 입력하세요',
    );
  });

  test('로그인 버튼이 렌더링되어야 한다', () => {
    const loginButton = screen.getByRole('button', { name: '로그인' });
    expect(loginButton).toBeInTheDocument();
  });
});
