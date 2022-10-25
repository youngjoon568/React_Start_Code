import React from 'react';
import styled from "styled-components";

const Layout = styled.div`
    
`;

export default function MainLayout({ ...children }) {
    return (
        <Layout>
            {...children}
        </Layout>
    );
};
