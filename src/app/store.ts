import { readFileSync, writeFileSync } from 'fs'
import { SaveData } from './types'

export const load = <T = any>( id: string ) => {
  if ( id.includes( '?' ) ) {
    id = id.split( '?' )[ 0 ]
  }

  return JSON.parse( readFileSync( id, 'utf8' ) ) as T
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

  writeFileSync( path, data, 'utf8' )
}

const leagues = [ 1500, 2500, 10000 ]

const categories = [
  'closers', 'attackers', 'defenders', 'leads', 'switches', 'chargers',
  'consistency', 'overall'
]
