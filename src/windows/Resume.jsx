import { useState } from "react";
import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import { Download } from "lucide-react";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = (`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`
).toString();

const Resume = () => {
  const [numPages, setNumPages] = useState(0);

  return (
    <div className="window-header flex flex-col h-full">
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>

        <a
          href="files/resume.pdf"
          download
          title="Download resume"
          className="cursor-pointer"
        >
          <Download className="icon" />
        </a>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <Document
          file="files/resume.pdf"
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          loading={
            <p className="text-sm text-gray-400 text-center">Loading…</p>
          }
        >
          {Array.from({ length: numPages }, (_, i) => (
            <Page
              key={i}
              pageNumber={i + 1}
              width={520}
              className="mb-6 last:mb-0"
            />
          ))}
        </Document>
      </div>
    </div>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow;
