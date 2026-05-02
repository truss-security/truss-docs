import type { JSX } from 'react';
import Layout from '@theme/Layout';
import SwaggerApiExplorer from '../components/SwaggerApiExplorer';
import spec from '../../openapi/trussapi.json';

export default function ApiPage(): JSX.Element {
  return (
    <Layout
      title="API reference"
      description="Interactive OpenAPI documentation for the Truss public API (Swagger UI)."
    >
      <SwaggerApiExplorer spec={spec as Record<string, unknown>} />
    </Layout>
  );
}
