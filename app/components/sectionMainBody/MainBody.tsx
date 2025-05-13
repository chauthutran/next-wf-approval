import { useDispatch, useSelector } from "react-redux";
import Selectors from "../selectors/Selectors";
import DataListDisplay from "./DataListDisplay";
import { RootState, toggleDataEntry } from "../../redux/store";
import DataEntry from "./DataEntry";
import Modal from "../basic/Modal";
import DataEntryForm from "./DataEntryForm";

export default function MainBody() {
  const dispatch = useDispatch();

  const isDataEntry = useSelector((state: RootState) => state.dropdowns.isDataEntry);

  const toggleDataEntryClick = () => {
    dispatch(toggleDataEntry());
  };

  return (
    <main>
      <Selectors />
      <div className="p-2">
        { !isDataEntry && <DataListDisplay /> }
        
        <Modal isVisible={isDataEntry}>
          <div className="w-[90vh] bg-white relative">
              <div 
                className="text-red-500 font-bold absolute top-2 right-3 cursor-pointer text-2xl rounded-full border border-black px-2"
                onClick={toggleDataEntryClick}
              >
                x
              </div>
              <DataEntryForm />
          </div>
        </Modal>
      </div>
    </main>
  );
}