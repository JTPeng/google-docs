interface DocumentLayoutProps {
  children: React.ReactNode;
}
const DocumentLayout = ({ children }: DocumentLayoutProps) => {
  return (
    <div className="flex flex-col gap-y-4">
      {children}
    </div>
  );
};

export default DocumentLayout;
