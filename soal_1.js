function bio(nama, umur) {
    let myBio = {
        nama: nama,
        umur: umur,
        address: 'Ds Rambatan Kulon rt 30 rw 04',
        hobbies: [
            'sport',
            'game'
        ],
        isMarried: false,
        listSchool: [{
                name: 'Universitas Pelita bangsa',
                yearIn: 2015,
                yearOut: 2019,
                major: 'Bachelor of Computer Science'
            },
            {
                name: 'SMKN 1 Indramayu',
                yearIn: 2012,
                yearOut: 2015,
                major: 'Animation'
            },
            {
                name: 'SMPN 1 Sindang Indramayu',
                yearIn: 2009,
                yearOut: 2012,
            },
        ],
        skill: [{
                name: 'PHP',
                level: 'Advanced'
            },
            {
                name: 'Javascript',
                level: 'Advanced'
            }
        ],
        interestInCoding: true
    }
 return JSON.stringify(myBio)
}
bio("mwahyudin", 24);