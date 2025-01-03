import Editor from './editor';
import { Navbar } from './navbar';
import { Toolbar } from './toolbar';

interface DocumentsIdPageProps {
  params: Promise<{ documentId: string }>;
}

const DocumentsIdPage = async ({ params }: DocumentsIdPageProps) => {
  const { documentId } = await params;
  return (
    <div className="min-h-screen bg-[#f9fbfd]">
      <div className="flex flex-col px-4 pt-2 gap-y-2 fixed top-0 left-0 right-0 z-10 bg-[#fafbfd] print:hidden">
        <Navbar />
        <Toolbar />
      </div>
      <div className='pt-[114px] print:pt-0'>
        <Editor />
      </div>
    </div>
  );
};

export default DocumentsIdPage;
