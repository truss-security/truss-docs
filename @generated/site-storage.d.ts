declare module '@generated/site-storage' {
  const storage: {
    type: 'localStorage' | 'sessionStorage';
    namespace: string;
  };
  export default storage;
} 