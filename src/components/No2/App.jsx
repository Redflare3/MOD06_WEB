import KartuMenu from './components/KartuMenu';
function App(){
    return(
        <Panel judul=" Menu hari ini">
            <KartuMenu nama="Nasi ayam geprek" kategori="" harga ={13.700}/>
            <KartuMenu nama="Es teh Lemon" kategori="" harga ={6.000}/>
            <KartuMenu nama="Mie Goreng Telur" kategori="" harga ={12.000}/>
        </Panel>
    );
}
