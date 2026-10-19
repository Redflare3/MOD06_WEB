import LabelHarga from './LabelHarga'
function KartuMenu({nama, harga, kategori = "Makanan"}){
    return(
        <div className="judul">
            <h1 >{nama}</h1>
            <p>{kategori}</p>
            <LabelHarga nilai={harga}/>
        </div>
    ); 
}

// export default KartuMenu