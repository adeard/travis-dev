import React from 'react'
import { Layout } from 'antd';

const { Footer } = Layout;

export default function Foot() {
  return (
    <div>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Travis ©2023 SIMP
        </Footer>
    </div>
  )
}
