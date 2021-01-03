const Petunjuk = () => {
    return(
        <div className="container-fluid  bg-white col-md-10 col-xs-6 mb-5 mt-4 border rounded-left rounded-right ">
                    <div className="col-md-12 text-center ml-auto mr-auto mb-3 mt-3">
                        <h3>Panduan petunjuk</h3>
                        <div class="divider col-md-2 col-sm-4 col-xs-2 bg-dark text-center ml-auto mr-auto mb-3 mt-3"><hr/></div>
                    </div>
                    <div className="mt-1 mb-2"> 
                        <ol>
                            <li>
                                <p>Pilih skema sertifikasi yang akan Anda ambil yang berada pada halaman awal.</p>
                            </li>
                            <li>
                                <p>Setelah melakukan pemilihan skema sertifikasi yang diambil, lalu klik tombol <b>Daftar Sekarang</b> untuk proses Pendaftaran</p>
                            </li>
                            <li>
                                <p>
                                Setelah klik tombol <b>Daftar Sekarang</b> selanjutnya anda akan menuju <b>Halaman Login </b>.
                                </p>
                            </li>
                            <li>
                                <p>
                                Selanjutnya pada <b>Halaman Login </b> jika anda memiliki akun silahkan masukkan <b>email/username dan password</b>
                                </p>
                            </li>
                            <li>
                                <p>
                                Selanjutnya anda akan menuju halaman <b>detail informasi</b> untuk pilih TUK. ikut training/tidak, dan jika anda mengikuti sertifikasi ulang maka ceklis, jika anda mengikuti sertifikasi baru maka tidak usah di ceklis. klik tombol <b>pesan sekarang</b> dan cek email anda
                                </p>
                            </li>
                        </ol>
                    </div>
                    </div>
    )
}
export default Petunjuk