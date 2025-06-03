import React from 'react';
import Header from '@components/header';

const BaseLayout = ({ children }) => {
  return (
    <div className="base-layout">
      <div className="content-area">
        <Header className="header" />
        <div className="content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BaseLayout;
