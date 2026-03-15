import { useAuth } from './features/auth/hooks/useAuth'
import { useEffect } from 'react'
import { RouterProvider } from 'react-router'
import { router } from './app.routes'

const AppContent = () => {
  const { handleGetMe, loading } = useAuth();

  useEffect(() => {
    handleGetMe();
  }, []);

  return <RouterProvider router={router} />;
};

export default AppContent;