// response url + name

export interface ApiResponse {
    count: number;
    next: string;
    previous?: any;
    results: Array<PokemonInfo>;
  }
  
  export interface PokemonInfo {
    name: string;
    url: string;
  }

// response evrything else

export interface Pokemon {
  base_experience: number;
  height: number;
  id: number;
  name: string;
  sprites: Sprites;
  types: Array<Type>;
  weight: number;
}

export interface Type {
  slot: number;
  type: Detail;
}

export interface Sprites {
  back_default: string;
  front_default: string;
  versions: Versions;
}

interface Versions {
  'generation-v': Generationv;
}

interface Generationv {
  'black-white': BlackWhite;
}

interface BlackWhite {
  animated: Animated;
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

interface Animated {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

interface Detail {
  name: string;
  url: string;
}