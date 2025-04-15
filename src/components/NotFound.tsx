import { useRouteError, Link } from 'react-router-dom';

function NotFound() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-gray-600 mb-8">페이지를 찾을 수 없습니다.</p>
        <Link to="/" className="btn-primary">
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
