export interface ServerResponse<T> {
  docs: T[]
}

export interface ILaunch {
  rocket: Rocket
  success: boolean
  details: string
  flight_number: number
  name: string
  date_utc: string
}

export interface TableProps {
  data: ILaunch[] | undefined;
}

export interface Rocket {
  flickr_images: string[]
  id: string
}
