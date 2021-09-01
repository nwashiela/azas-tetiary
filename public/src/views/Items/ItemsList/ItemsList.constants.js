import '../../../ types'

/**
 * @typedef {'missingName'} alertKey
 */

/**
 * @typedef {Record<alertKey, Alert>} 
 */
export const ALERTS = {
    missingName: {
        title: 'Missing Name',
        description: 'A short can not have a client name that is blank'
    }
}