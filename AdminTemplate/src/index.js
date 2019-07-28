import React, { Component } from 'react';
import { Card } from 'antd';
import NavHeader from '@components/NavHeader';

class Boilerplate extends Component {
   render() {
     return (
      <div>
      <NavHeader title="admin模块"/>
      <Card className="u-mg20">
        页面内容
      </Card>
      </div>
     );
   }
}

export default Boilerplate;
