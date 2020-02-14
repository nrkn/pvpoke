import { readFile, writeFile } from 'fs'
import { SaveData } from './types'

export const load = ( id: string, cb: ( data: any ) => void ) => {
  if ( id.includes( '?' ) ) {
    id = id.split( '?' )[ 0 ]
  }

  readFile( id, 'utf8', ( err, data ) => {
    if ( err ) throw err

    cb( JSON.parse( data ) )
  } )
}

export const save = ( saveData: SaveData ) => {
  const { data, league, category, cup } = saveData

  const fields = [ data, league, category, cup ]

  fields.forEach( field => {
    if ( typeof field !== 'string' || field === '' ) {
      throw Error( 'Expected data, league, category, cup in save data' )
    }
  } )

  if( !leagues.includes( parseInt( league ) ) )
    throw Error( 'Unexpected league' )

  if( !categories.includes( category ) )
    throw Error( 'Unexpected category' )

  const path = `./data/${ cup }/${ category }/rankings-${ league }.json`

  writeFile( path, data, 'utf8', err => {
    if ( err ) throw err
  } )
}

const leagues = [ 1500, 2500, 10000 ]

const categories = [
  'closers', 'attackers', 'defenders', 'leads', 'switches', 'chargers',
  'consistency', 'overall'
]
