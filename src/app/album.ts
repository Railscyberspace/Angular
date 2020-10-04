// tslint:disable-next-line:import-spacing
// tslint:disable-next-line:quotemark
import { Track } from "./track";

export interface Album {
  name: string;
  releaseDate: string;
  coverImage: string;
  tracks: Track[];
}
