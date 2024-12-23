interface AuthLayoutProps {
  children: React.ReactNode;
}
const DocumentLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex flex-col gap-y-4">
      <nav className="w-full bg-red-500">Auth navBar</nav>
      {children}
    </div>
  );
};

export default DocumentLayout;
