import { RankerMaster } from '../lib/battle/RankerIdenticalTest'

const ranker = RankerMaster.getInstance()

const result = ranker.rank( 1500, [ 2, 2 ] )

console.log( result )
