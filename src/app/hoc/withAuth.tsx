'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const AuthHOC: React.FC<P> = (props) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        router.replace('/user/login');
      }
    }, [router]); 

    return <WrappedComponent {...props} />;
  };

  // Set displayName for better debugging
  AuthHOC.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return AuthHOC;
};

export default withAuth;
