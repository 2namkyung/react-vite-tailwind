import Input from './stories/components/input';
import Button from './stories/components/button';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-center text-purple-900">
          로그인
        </h1>

        <div className="space-y-4">
          <Input
            label="이메일"
            placeholder="이메일을 입력하세요"
            type="email"
            size="large"
          />

          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력하세요"
            type="password"
            size="large"
          />

          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 text-lg rounded">
            로그인
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
