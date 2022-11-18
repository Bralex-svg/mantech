interface IProps {
  id?: string;
}
export default function ModalView({ id }: IProps) {
  return (
    <div
      className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
      id={id ? id : "modal-view"}
      tabIndex={-1}
      aria-labelledby={id ? id : "modal-viewlabel"}
      aria-hidden="true"
    >
      <div className="modal-dialog relative w-auto pointer-events-none">
        <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          <div className="modal-header flex flex-shrink-0 items-center justify-left p-4 border-b border-gray-200 rounded-t-md">
            <h5
              className="text-xl font-medium leading-normal text-gray-800"
              id="exampleModalLabel"
            >
              Create Room
            </h5>
          </div>
          <div className="modal-body relative p-4">
            Modal body text goes here.
          </div>
        </div>
      </div>
    </div>
  );
}
