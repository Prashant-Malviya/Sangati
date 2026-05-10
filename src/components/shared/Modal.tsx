import type {FC} from 'react';


interface ModalInterface {

    title?: string;
    children?: string;
    open?: boolean;
    onClose?: ()=>void;

}

const Modal : FC<ModalInterface> = ({open,onClose,title="this is modal title here...",children="modal description comes here"})=>{
    return(
        <>
        {open &&
         <div className="h-screen flex items-center justify-center bg-black fixed top-0 left-0 w-full animate__animated aimate__fadeIn"
        style={
            {
                background: 'rgba(0,0,0,0.9'
            }
        }
        >
            <div className="bg-white border border-gray-100 shadow-xl p-8 rounded-lg w-[480px] px-5 py-4 relative">
                <h1 className="text-lg font-semibold">{title}</h1>
                <div className="text-gray-500">
                    {children}
                </div>

                <button className="absolute top-0 right-0" onClick={onClose}>
                <i className="ri-close-circle-fill text-zinc-600"></i>

                </button>
            </div>
        </div>}
        </>
    )
}


export default Modal


