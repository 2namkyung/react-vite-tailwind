import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 로그아웃 로직
    navigate('/login');
  };

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold">
            Logo
          </Link>
          <nav className="flex items-center gap-4">
            <Link to="/" className="btn-text">
              홈
            </Link>
            <button onClick={handleLogout} className="btn-text">
              로그아웃
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
