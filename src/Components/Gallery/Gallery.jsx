import './Gallery.css'

const Gallery = () => {
    return (

        <div className="mb-12 p-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="grid gap-3">
                    <div className="img-hover-zoom">
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/28wfnQQ/Frame-1.png" alt=""/>
                    </div>
                    <div className="img-hover-zoom">
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/SRz3PBK/chris-karidis-nnzk-ZNYWHa-U-unsplash-1.png" alt="" />
                    </div>
                    <div className="img-hover-zoom">
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/2Sv1xhb/horizontal-shot-mountains-covered-green-beautiful-cloudy-sky-1.png" alt="" />
                    </div>
                </div>
                <div className="grid gap-3">
                    <div className="img-hover-zoom">
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/MV7VnV0/ilnur-kalimullin-Ztd-NFSpug-QE-unsplash-1.png" alt="" />
                    </div>
                    <div className="img-hover-zoom">
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/nc7jqgL/nicholas-beel-F8b-ZLAZu9c-Y-unsplash-1.png" alt="" />
                    </div>
                    <div className="img-hover-zoom">
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/Bq12mrC/male-hiker-with-backpack-taking-picture-rocky-mountains-covered-snow-1.png" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div className="img-hover-zoom">
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/9p13vzn/spencer-davis-ckot-RXopw-RM-unsplash-1.png" alt="" />
                    </div>
                    <div className="img-hover-zoom">
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/GQkQ9qX/robin-ooode-Lys-Htv-Eh6ps-unsplash-1.png" alt="" />
                    </div>
                    <div className="img-hover-zoom">
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/943RMjz/Frame-3.png" alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div className="img-hover-zoom">
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/hWBD5jN/rodrigo-kugnharski-pd-Wc5wm1-STw-unsplash-1.png" alt="" />
                    </div>
                    <div className="img-hover-zoom">
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/7jspHHC/ilnur-kalimullin-CB0-Qrf8ib4-I-unsplash-1.png" alt="" />
                    </div>
                    <div className="img-hover-zoom">
                        <img className="h-auto max-w-full rounded-lg" src="https://i.ibb.co/rZ6QWCD/summer-alps-landscape-switzerland-middle-swiss-alps-mountains-1.png" alt="" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Gallery;