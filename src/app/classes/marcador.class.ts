// export class Marcador {
//     constructor( public lat: number, public lng: number) {}
// }

export class Marcador {
    public lat: number;
    public lng: number;

    public name = 'Nombre';
    public direction = 'Direccion';
    public phone = 'Telefono';


    constructor( lat: number, lng: number) {
        this.lat = lat;
        this.lng = lng;
    }
}
