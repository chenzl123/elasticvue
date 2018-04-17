export const CONNECTION_STATES = {
  UNKNOWN: 'unknown',
  SUCCESS: 'success',
  ERROR: 'error'
}

export const CONNECTION_STATE_NAMES = {}
CONNECTION_STATE_NAMES[CONNECTION_STATES.UNKNOWN] = 'unknown'
CONNECTION_STATE_NAMES[CONNECTION_STATES.SUCCESS] = 'connected'
CONNECTION_STATE_NAMES[CONNECTION_STATES.ERROR] = 'disconnected'

export const CONNECTION_STATE_CLASSES = {}
CONNECTION_STATE_CLASSES[CONNECTION_STATES.UNKNOWN] = ''
CONNECTION_STATE_CLASSES[CONNECTION_STATES.SUCCESS] = 'green'
CONNECTION_STATE_CLASSES[CONNECTION_STATES.ERROR] = 'red'

export const DEFAULT_HOST = 'http://localhost:9200'

export const LOCALSTORAGE_KEY = 'elasticvuex'

export const ELASTICSEARCH_API_VERSIONS = [
  '6.x',
  '6.0',
  '5.6',
  '5.5',
  '5.4',
  '5.3',
  '5.2',
  '5.1',
  '5.0',
  '2.4',
  '1.7',
  '0.90'
]

export const NORMALIZED_SEARCH_PARAMS = {
  q: '*',
  from: 0,
  size: 1000,
  index: []
}