import * as React from 'react';

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return (      
      <footer className="page-footer font-small special-color-dark pt-4">
        <div className="container">
            <div className="row">        
            </div>
        </div>
        <div className="footer-copyright text-center py-3">© 2022 Copyright:
            <a href=""></a>
            <h6>Created by @Manuel Pineda</h6>
        </div>
    </footer>
  );
};

export default Footer;
