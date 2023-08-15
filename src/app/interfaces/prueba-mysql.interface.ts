export interface pruebaMysql {
    id_producto?: string;
    nombre_producto?: string | undefined;
    clave_producto?: string ;
    categoria?: string | undefined ;
    descripcion?: string ;
    descripcion_corta?: string ;
    precio?: number ;
    imagen_principal?: string ;
    imagen_portada?: string ;
    imagen_1?: string ;
    imagen_2?: string ;
    imagen_3?: string ;
    nombre_carpeta?: string ;
    cantidad?: number ;
    presentacion?: string;
    /* id_producto?: string;
    nombre_producto?: string| null | undefined;
    clave_producto?: string | null | undefined;
    categoria?: string | null | undefined;
    descripcion?: string | null | undefined;
    descripcion_corta?: string | null | undefined;
    precio?: number | null | undefined;
    imagen_principal?: string | null | undefined;
    imagen_portada?: string | null | undefined;
    imagen_1?: string | null | undefined;
    imagen_2?: string | null | undefined;
    imagen_3?: string | null | undefined;
    nombre_carpeta?: string | null | undefined;
    cantidad?: number | null | undefined; */
  }
