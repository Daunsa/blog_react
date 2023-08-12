import { useState } from 'react'

// Import Worker
import { Worker } from '@react-pdf-viewer/core';
// Import the main Viewer component
import { Viewer } from '@react-pdf-viewer/core';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
// default layout plugin
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { scrollModePlugin } from '@react-pdf-viewer/scroll-mode';
import { ScrollMode } from '@react-pdf-viewer/core';
// Import styles of default layout plugin
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import { ViewMode } from '@react-pdf-viewer/core';

import { api } from '../funciones/constGlobales';

function MyPdfComponent(props) {

  // creating new plugin instance
  const renderToolbar = (Toolbar) => (
    <Toolbar>
      {(props) => {
        const {
          CurrentPageInput,
          GoToNextPage,
          GoToPreviousPage,
          NumberOfPages,
          Zoom,
        } = props;
        return (
          <div className="toolbar flex items-center justify-center">
            <div className="mr-4">
              <GoToPreviousPage />
            </div>
            <div className="mr-4">
              <div className="rpv-page-number-input" style={{ width: "50px" }}>
                <CurrentPageInput />
              </div>
            </div>
            <div className="mr-4">
              <NumberOfPages />
            </div>
            <div className="mr-4">
              <GoToNextPage />
            </div>
            <div className="mr-4">
              <Zoom />
            </div>
          </div>
        );
      }}
    </Toolbar>

  );

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: (defaultTabs) => [],
    renderToolbar,
  });
  const scrollModePluginInstance = scrollModePlugin();


  return (
    <div className="container">
      <div className="viewer">

        {/* render this if we have a pdf file */}
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
          <div style={{ width: '100%', height: '750px' }}>
            <Viewer fileUrl={`https://core.ac.uk/download/pdf/52479411.pdf`}
              theme={{
                theme: 'white',
              }}
              defaultScale={0.8}
              viewMode='DualPage'
              scrollMode="Page"

              plugins={[defaultLayoutPluginInstance, scrollModePluginInstance]}
            >
            </Viewer>
          </div>
        </Worker>
      </div>

    </div>
  );
}

export default MyPdfComponent;