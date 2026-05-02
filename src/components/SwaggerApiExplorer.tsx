import { useEffect, useState, type ComponentType, type JSX } from 'react';

type SwaggerUIProps = {
  spec: Record<string, unknown>;
  persistAuthorization?: boolean;
  docExpansion?: 'list' | 'full' | 'none';
  tryItOutEnabled?: boolean;
};

export default function SwaggerApiExplorer({
  spec,
}: {
  spec: Record<string, unknown>;
}): JSX.Element {
  const [SwaggerUI, setSwaggerUI] = useState<ComponentType<SwaggerUIProps> | null>(null);

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      await import('../css/swagger-ui-docusaurus.css');
      const mod = await import('swagger-ui-react');
      if (!cancelled) {
        setSwaggerUI(() => mod.default);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (!SwaggerUI) {
    return (
      <div className="container margin-vert--lg">
        <p>Loading API explorer…</p>
      </div>
    );
  }

  return (
    <div className="container margin-vert--lg swagger-ui-host">
      <SwaggerUI
        spec={spec}
        persistAuthorization
        docExpansion="list"
        tryItOutEnabled
      />
    </div>
  );
}
