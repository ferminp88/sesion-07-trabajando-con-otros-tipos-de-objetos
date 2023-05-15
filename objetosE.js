
const fermin =
    {nombre:"Fermin",
    apellido:"Palacios",
    edad:31,
    altura:170,
    eresDesarrollador:false
}

const amiga1 =
    {nombre:"Camila",
    apellido:"Delrio",
    edad:32,
    altura:140,
    eresDesarrollador:true
}

const amiga2 =
    {nombre:"Luciana",
    apellido:"Perez",
    edad:29,
    altura:180,
    eresDesarrollador:true
}



const edadActual = fermin.edad

const ListaCompleta = [ fermin, amiga1, amiga2 ]

const ListaOrdenada = ListaCompleta.sort((a,b)=>b.edad - a.edad)







