
function App(){
  const n = 10;
  const jam = 9
  const username = "Zaki"
    return (
      <>
      <div className="judul">
        <h1 className='judul' style={gayaJudul}>Kantin {username}</h1>
        <sapa />
        <p>{jam < 12 ? "Selamat Pagi" : "Selamat Siang"}</p>
        <p>Saldo awal kartu kantin: Rp {n * 1000} </p>
        <button disabled>Bayar</button>
      </div>
      </>
    );
  }
  export default App