const sequence = angka => {
    //cek input angka
    if (typeof angka !== 'number') return "Parameter harus angka"
    //cek input bilangan positif
    if (angka < 0) return "Parameter harus bilangan positif"

    let result = [angka]
//cek jika angka tidak sama dengan 1
    while (angka != 1) {
        //apakah angka bilangan ganjil ? jika iya lanjut ke bawah If
        //jika tidak (ganjil) masuk ke Else
        if (angka % 2 == 0) {
            //angka dibagi 2
            angka = angka / 2
        } else {
            //angka * 3 + 1
            angka = 3 * angka + 1
        }
//push angka ke dalam array 
        result.push(angka)
    }

    return result
}