'use client';

import App from '../components/App';
import Footer from '../components/sectionFooter/Footer';
import MainBody from '../components/sectionMainBody/MainBody';
import Selectors from '../components/selectors/Selectors';
import DataEntry from "../components/sectionMainBody/DataEntry";

const DataEntryPage = () => {
  
  return (
      <div className="flex flex-col h-[calc(100vh-48px)]">
          <main className="flex-grow">
            <Selectors />
            <div className="p-2">
              <DataEntry /> 
            </div>
          </main>
          
        <Footer />
      </div>
  );
};

export default DataEntryPage;
